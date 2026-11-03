#!/usr/bin/env bash
# Builds WebP size variants (640/1024/1600/2400 px wide, never upscaled) for every photo the site
# shows, next to the source as <name>-<width>.webp, and writes src/data/image-variants.json so
# src/lib/responsive.ts can build srcset lists. Re-run after adding or replacing a photo.
# Needs cwebp (brew install webp).
set -euo pipefail
cd "$(dirname "$0")/.."

PUB=public
WIDTHS=(640 1024 1600 2400)
SOURCES=(
  assets/sophie/img/about/web/about-1.jpg
  assets/sophie/img/about/web/about-8.jpg
  assets/sophie/img/about/web/about-9.jpg
  assets/sophie/img/about/web/about-13.jpg
  assets/sophie/img/about/web/about-16.jpg
  assets/sophie/img/roles/web/role-art.jpg
  assets/sophie/img/roles/web/role-portrait.jpg
  assets/sophie/img/collabs/piaget.jpg
  assets/sophie/img/collabs/kaviar-gauche.jpg
  assets/sophie/img/press/web/friends-of-friends.jpg
  assets/sophie/img/press/web/giving-back-is-dead.jpg
  assets/sophie/img/press/web/harpers-bazaar.jpg
  assets/sophie/img/press/web/icon.jpg
  assets/sophie/img/press/web/maison-e-terrace.jpg
  assets/sophie/img/press/web/lofficiel.jpg
  assets/sophie/img/press/web/residency-2023.jpg
  assets/sophie/img/press/web/residency-2025.jpg
  assets/sophie/img/press/web/residency-2024.jpg
  assets/sophie/img/press/web/schlossseiten.jpg
  assets/sophie/img/press/web/tatler.jpg
  assets/sophie/img/press/web/vogue.jpg
  assets/sophie/img/house-2026/rooftop-cover.jpg
  assets/sophie/img/house-2026/sophie-portrait.jpg
  assets/sophie/img/house-2026/sophie-terrace.jpg
  assets/sophie/img/house-2026/house-pool.jpg
  assets/sophie/img/house-2026/house-aerial.jpg
  assets/sophie/img/house-2026/house-aerial-close.jpg
  assets/sophie/img/house-2026/pink-wall.jpg
  assets/sophie/img/house-2026/terrace-sunset.jpg
  assets/sophie/img/house-2026/courtyard-candles.jpg
  assets/sophie/img/house-2026/columns-table.jpg
  assets/sophie/img/house-2026/dinner.jpg
  assets/sophie/img/house-2026/eclipse.jpg
  assets/sophie/img/house-2026/chef.jpg
  assets/sophie/img/house-2026/chef-2.jpg
  assets/sophie/img/house-2026/menu.jpg
  # The hero is encoded from its 4K master; its key is the path the markup uses.
  assets/sophie/img/hero-portrait.jpg:assets/sophie/img/hero-portrait-4k.png
)

json="{"
first=1
for entry in "${SOURCES[@]}"; do
  key=${entry%%:*}
  src=${entry#*:}
  [ "$src" = "$entry" ] && src=$key
  w=$(sips -g pixelWidth "$PUB/$src" | awk 'END{print $2}')
  base="$PUB/${key%.*}"
  made=()
  for target in "${WIDTHS[@]}"; do
    if [ "$target" -le "$w" ]; then
      cwebp -quiet -q 82 -m 6 -sharp_yuv -resize "$target" 0 "$PUB/$src" -o "$base-$target.webp"
      made+=("$target")
    fi
  done
  # Narrower than the smallest width: keep a single variant at the native width.
  if [ ${#made[@]} -eq 0 ]; then
    cwebp -quiet -q 82 -m 6 -sharp_yuv "$PUB/$src" -o "$base-$w.webp"
    made=("$w")
  fi
  list=$(IFS=,; echo "${made[*]}")
  [ $first -eq 1 ] && first=0 || json+=","
  json+="\"/$key\":[$list]"
  echo "$key -> ${made[*]}"
done
json+="}"
echo "$json" | python3 -m json.tool > src/data/image-variants.json
