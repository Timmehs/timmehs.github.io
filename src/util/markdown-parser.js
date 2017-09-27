
/*
 * Find best timestamp format to convert to date in JS, would like to allow for multiple per day, so down to minute
 * precision though minutes wont be shown in UI.
 *
 * `$ touch $(date +"%m-%d-%Y-%H-%M").md`
 *
 * TODO: Find best practice for sharing root dir path across node application
 */
var fs = require('fs');

const POSTS_DIR = '/Users/timsandberg/projects/timmehs.github.io/posts/'

// TODO: Store and extract tags and title in .md files
export function getRawPosts() {
  const postFiles = fs.readdirSync(POSTS_DIR)

  return postFiles.map(file => {
    return {
      date: file.slice(0, -3),
      content: fs.readFileSync(POSTS_DIR + file, 'utf8')
    }
  })
}
