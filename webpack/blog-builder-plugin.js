
const getRawPosts = require('./util/get-raw-posts');


function BlogBuilderPlugin(options) {
  this.source = options.source
}

BlogBuilderPlugin.prototype.apply = function(compiler) {
  const plugin = this;

  compiler.plugin('emit', function(compilation, callback) {
    const posts = getRawPosts(plugin.source);

    // Insert this list into the webpack build as a new file asset:
    compilation.assets['blog-manifest.js'] = {
      source: function() {
        return `const postJSON = ${JSON.stringify(posts)};\nexport default postJSON`
      },
      size: function() {
        return posts.length + 2;
      }
    };

    callback();
  });
};

module.exports = BlogBuilderPlugin
