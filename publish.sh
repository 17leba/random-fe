COMMIT_ID=""$1

echo '****************更新代码***************'
git reset --hard || { echo "command failed"; exit 1; }
git fetch -p origin || { echo "command failed"; exit 1; }
git checkout $COMMIT_ID || { echo "command failed"; exit 1; }

echo '****************编译代码***************'
npm run build || { echo "command failed"; exit 1; }

echo '****************发布代码***************'
cp -rf dist/vue ./../koa-api/static/ || { echo "command failed"; exit 1; }
cp -rf dist/index.html ./../koa-api/views/ || { echo "command failed"; exit 1; }
rm -rf dist || { echo "command failed"; exit 1; }
