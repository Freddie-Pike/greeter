#!/usr/bin/env sh

set -euo pipefail

if ! command -v jq >/dev/null 2>&1; then
  echo "dependency 'jq' not found."
  echo "OSX: \`brew install jq\`"
  echo "Ubuntu: \`apt install jq\`"
  exit
fi

if [ -n "$(git status --porcelain)" ]; then
  echo "You have uncommitted changes. Please commit these before attempting to release"
  exit
fi

version=$(jq ".version" < package.json | tr -d '"')
git fetch --tags

if git tag --list | grep -Eq "^$version$"; then
  echo "Tag already exists for version \"$version\"."
  echo "Did you forget to increment the version number?"
  exit
fi

current_branch=$(git rev-parse --abbrev-ref HEAD)

git checkout --orphan "release-$version"
npm run build
git rm -rf --cached .
git add "dist" "package.json" -f
git commit -m "Release $version"
git tag "$version"
git push origin "$version"
git checkout -f "$current_branch"
git branch -D "release-$version"
