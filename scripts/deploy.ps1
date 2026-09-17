# 部署脚本（Windows / PowerShell）
# 用法：.\scripts\deploy.ps1 -Server "user@server" -RemotePath "/opt/site/"
param(
  [Parameter(Mandatory = $true)]
  [string]$Server,

  [string]$RemotePath = "/opt/site/"
)

$outDir = Join-Path (Split-Path $PSScriptRoot -Parent) "apps\web\out"

if (-not (Test-Path $outDir)) {
  Write-Error "未找到构建产物：$outDir（请先运行 npm run build）"
  exit 1
}

Write-Host "正在部署 $outDir -> ${Server}:${RemotePath} ..."
scp -r "$outDir\*" "${Server}:${RemotePath}"

if ($LASTEXITCODE -eq 0) {
  Write-Host "部署完成"
} else {
  Write-Error "部署失败"
  exit 1
}
