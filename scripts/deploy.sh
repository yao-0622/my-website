#!/usr/bin/env bash
# 部署脚本（Linux）
# 用法：./scripts/deploy.sh user@server /opt/site/
set -euo pipefail

SERVER="${1:?用法: deploy.sh user@server [/opt/site/]}"
REMOTE_PATH="${2:-/opt/site/}"

OUT_DIR="$(cd "$(dirname "$0")/.." && pwd)/apps/web/out"

if [ ! -d "$OUT_DIR" ]; then
  echo "未找到构建产物：$OUT_DIR（请先运行 npm run build）" >&2
  exit 1
fi

echo "正在部署 $OUT_DIR -> ${SERVER}:${REMOTE_PATH}"
scp -r "$OUT_DIR"/* "${SERVER}:${REMOTE_PATH}"
echo "部署完成"
