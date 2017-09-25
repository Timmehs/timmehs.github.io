# timmehs.github.io
A personal site/blog about me, music, and code.

TODO:
* Separate out a development branch.
 - Since personal github pages deploy off of master branch, I'd like to keep the footprint as small as possible
 - To do this I can work in a development branch containing src folder
 - Add a deploy script that pushes just the /dist folder to `master`
  - see discussion: https://gist.github.com/cobyism/4730490
* Blog:
  - parse MD files in a `/posts` directory into a blog with
    - date sorting
    - tag searching
