const getPostFiles = require('../util/get-post-files');


function BlogBuilderPlugin(options) {
  this.source = options.source
}

BlogBuilderPlugin.prototype.apply = function(compiler) {
  const plugin = this;

  compiler.plugin('emit', function(compilation, callback) {
    const fileList = getPostFiles(this.source)
    // Insert this list into the webpack build as a new file asset:
    compilation.assets['blog-manifest.js'] = {
      source: function() {
        return `module.exports = ${fileList}`
      },
      size: function() {
        return fileList.length + 2;
      }
    };

    callback();
  });
};

module.exports = BlogBuilderPlugin
