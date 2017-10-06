var fs = require('fs')
var path = require('path')

function getPostFiles(postsPath) {
  const postFiles = fs.readdirSync(postsPath)

  return postFiles.map(file => {
    return path.join(postsPath, file)
  })
}

module.exports = getPostFiles
