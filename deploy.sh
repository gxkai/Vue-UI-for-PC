#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run buildDocs

npm run build

git add -A

git commit -m 'deploy'

git push origin master

git subtree push --prefix dist origin gh-pages
# 进入生成的文件夹
#cd dist
#
#git init
#git add -A
#git commit -m 'deploy'
#
## 如果发布到 https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:gxkai/Vue-UI-for-PC.git master:gh-pages

cd -
