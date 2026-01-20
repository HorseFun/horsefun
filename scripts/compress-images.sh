#!/bin/bash

# 图片压缩脚本
# 使用 macOS 的 sips 工具压缩图片

ASSETS_DIR="src/assets"

echo "开始压缩图片..."

# 压缩 JPEG 文件
for img in "$ASSETS_DIR"/*.jpeg "$ASSETS_DIR"/*.jpg; do
  if [ -f "$img" ]; then
    original_size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
    echo "压缩: $img (原始大小: $((original_size / 1024))KB)"
    
    # 使用 sips 压缩 JPEG，质量设置为 80%
    sips -s format jpeg -s formatOptions 80 "$img" --out "$img.tmp" > /dev/null 2>&1
    
    if [ -f "$img.tmp" ]; then
      new_size=$(stat -f%z "$img.tmp" 2>/dev/null || stat -c%s "$img.tmp" 2>/dev/null)
      if [ "$new_size" -lt "$original_size" ]; then
        mv "$img.tmp" "$img"
        echo "  ✓ 压缩完成: $((new_size / 1024))KB (节省 $(( (original_size - new_size) / 1024 ))KB)"
      else
        rm "$img.tmp"
        echo "  - 文件已是最优大小"
      fi
    fi
  fi
done

# 压缩 PNG 文件 - 转换为优化的 JPEG（如果合适）或压缩 PNG
for img in "$ASSETS_DIR"/*.png; do
  if [ -f "$img" ]; then
    original_size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
    echo "处理: $img (原始大小: $((original_size / 1024))KB)"
    
    # 获取文件名（不含扩展名）
    filename="${img%.*}"
    
    # 尝试转换为 JPEG（通常更小）
    sips -s format jpeg -s formatOptions 85 "$img" --out "${filename}.jpg" > /dev/null 2>&1
    
    if [ -f "${filename}.jpg" ]; then
      jpg_size=$(stat -f%z "${filename}.jpg" 2>/dev/null || stat -c%s "${filename}.jpg" 2>/dev/null)
      if [ "$jpg_size" -lt "$original_size" ]; then
        # 如果 JPEG 更小，询问是否替换（这里自动替换）
        rm "$img"
        echo "  ✓ 转换为 JPEG: $((jpg_size / 1024))KB (节省 $(( (original_size - jpg_size) / 1024 ))KB)"
      else
        rm "${filename}.jpg"
        # 如果 JPEG 更大，压缩原 PNG
        sips -s format png "$img" --out "$img.tmp" > /dev/null 2>&1
        if [ -f "$img.tmp" ]; then
          new_size=$(stat -f%z "$img.tmp" 2>/dev/null || stat -c%s "$img.tmp" 2>/dev/null)
          if [ "$new_size" -lt "$original_size" ]; then
            mv "$img.tmp" "$img"
            echo "  ✓ PNG 压缩完成: $((new_size / 1024))KB (节省 $(( (original_size - new_size) / 1024 ))KB)"
          else
            rm "$img.tmp"
            echo "  - PNG 文件已是最优大小"
          fi
        fi
      fi
    fi
  fi
done

echo ""
echo "图片压缩完成！"
