var fs = require('fs')
var path = require('path')
var yaml = require('js-yaml')

// Convert post.md file to object { date, markdown, title, tags }
function parsePost(rawString) {
  const splitContent = rawString.split("----\n")
  const data = yaml.safeLoad(splitContent[0])
  const tags = Object.assign(...data.tags.split(',').map(k => ({ [k]: true })))

  return {
    ...data,
    tags,
    markdown: splitContent.slice(1).join('')
  }
}

function getRawPosts(postsPath) {
  console.log(postsPath)
  const postFiles = fs.readdirSync(postsPath)

  return postFiles.map(file => {
    const filePath = path.join(postsPath, file)
    const rawFileString = fs.readFileSync(filePath, 'utf8')
    return parsePost(rawFileString)
  })
}

module.exports = getRawPosts
