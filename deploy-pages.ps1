$ErrorActionPreference = "Stop"
$sitePath = $PSScriptRoot
$exportPath = Join-Path $sitePath "out"
$remote = git -C $sitePath remote get-url origin
if ($LASTEXITCODE -ne 0) { throw "Git origin is not configured." }

$env:NEXT_PUBLIC_BASE_PATH = "/gift-demo-concept"
try {
  npm --prefix $sitePath run build
  if ($LASTEXITCODE -ne 0) { throw "Static build failed." }
} finally {
  Remove-Item Env:NEXT_PUBLIC_BASE_PATH -ErrorAction SilentlyContinue
}

New-Item -ItemType File -Force -Path (Join-Path $exportPath ".nojekyll") | Out-Null
git -C $exportPath init --initial-branch=gh-pages
if ($LASTEXITCODE -ne 0) { throw "Could not initialize the publish directory." }
git -C $exportPath add -A
if ($LASTEXITCODE -ne 0) { throw "Could not stage the static export." }
git -C $exportPath commit -m "Deploy GIFT Demo Concept"
if ($LASTEXITCODE -ne 0) { throw "Could not commit the static export." }
git -C $exportPath push --force $remote HEAD:gh-pages
if ($LASTEXITCODE -ne 0) { throw "Could not push the gh-pages branch." }

Write-Host "Published static files to gh-pages. Check https://albidox.github.io/gift-demo-concept/ after GitHub Pages finishes building."
