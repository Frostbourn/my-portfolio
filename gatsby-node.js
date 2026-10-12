const fs = require("fs")
const https = require("https")
const path = require("path")

require("dotenv").config({ path: path.join(__dirname, ".env") })

const get = (url) =>
  new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          res.resume()
          resolve(get(res.headers.location))
          return
        }
        const chunks = []
        res.on("data", (chunk) => chunks.push(chunk))
        res.on("end", () =>
          resolve({ status: res.statusCode, body: Buffer.concat(chunks) })
        )
      })
      .on("error", reject)
  })

const field = (value) => (value && value["en-US"] ? value["en-US"] : value)

const fetchCv = async () => {
  const space = process.env.CONTENTFUL_SPACE_ID
  const token = process.env.CONTENTFUL_ACCESS_TOKEN
  if (!space || !token) {
    throw new Error("Missing CONTENTFUL_SPACE_ID or CONTENTFUL_ACCESS_TOKEN")
  }

  const { status, body } = await get(
    `https://cdn.contentful.com/spaces/${space}/environments/master/assets?access_token=${token}&limit=200`
  )
  if (status !== 200) {
    throw new Error(`Contentful assets request failed (${status})`)
  }

  const pdfs = JSON.parse(body.toString()).items
    .map((item) => {
      const file = field(item.fields.file) || {}
      return {
        title: field(item.fields.title) || "",
        fileName: file.fileName || "",
        url: file.url || "",
        updatedAt: item.sys.updatedAt || "",
      }
    })
    .filter((item) => item.url && item.fileName.toLowerCase().endsWith(".pdf"))

  const cv = pdfs
    .filter((item) => /cv/i.test(item.title) || /cv/i.test(item.fileName))
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))[0]

  if (!cv) {
    throw new Error("No CV pdf found in Contentful")
  }

  const fileUrl = cv.url.startsWith("//") ? `https:${cv.url}` : cv.url
  const file = await get(fileUrl)
  if (file.status !== 200) {
    throw new Error(`CV download failed (${file.status})`)
  }

  const destination = path.join(__dirname, "public", "cv.pdf")
  fs.mkdirSync(path.dirname(destination), { recursive: true })
  fs.writeFileSync(destination, file.body)

  return { url: `/cv.pdf?v=${cv.updatedAt.slice(0, 10).replace(/-/g, "")}` }
}

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const cv = await fetchCv()
  actions.createNode({
    id: createNodeId("local-cv"),
    url: cv.url,
    internal: {
      type: "LocalCv",
      contentDigest: createContentDigest(cv),
    },
  })
}
