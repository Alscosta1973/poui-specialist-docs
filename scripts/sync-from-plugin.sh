#!/usr/bin/env bash
# Copia skills do plugin privado (clonado em $1) para content/docs/
# Uso: ./scripts/sync-from-plugin.sh <caminho-do-plugin-clonado>
set -euo pipefail

PLUGIN_DIR="${1:?Informe o diretório do plugin clonado}"
DOCS_DIR="$(dirname "$0")/../content/docs"

add_frontmatter() {
  local src="$1"
  local dest="$2"
  local title description

  # Extrai título da primeira linha H1
  title=$(grep -m1 '^# ' "$src" | sed 's/^# //' || echo "$(basename "$src" .md)")
  # Extrai descrição do primeiro parágrafo não-vazio após o título
  description=$(awk '/^# /{found=1;next} found && /^[^#\-\|]/ && NF>0{print;exit}' "$src" \
    | sed 's/["`*_]//g' | cut -c1-120 || echo "")

  {
    echo "---"
    echo "title: $title"
    [ -n "$description" ] && echo "description: \"$description\""
    echo "---"
    echo ""
    cat "$src"
  } > "$dest"
}

# Templates (poui-code-generation)
mkdir -p "$DOCS_DIR/templates"
for f in "$PLUGIN_DIR/skills/poui-code-generation"/*.md; do
  [ -f "$f" ] || continue
  name=$(basename "$f" .md)
  [ "$name" = "SKILL" ] && continue
  dest="$DOCS_DIR/templates/${name}.mdx"
  add_frontmatter "$f" "$dest"
  echo "Synced: templates/${name}.mdx"
done

# Componentes (poui-components)
mkdir -p "$DOCS_DIR/componentes"
for f in "$PLUGIN_DIR/skills/poui-components"/*.md; do
  [ -f "$f" ] || continue
  name=$(basename "$f" .md)
  [ "$name" = "SKILL" ] && continue
  dest="$DOCS_DIR/componentes/${name}.mdx"
  add_frontmatter "$f" "$dest"
  echo "Synced: componentes/${name}.mdx"
done

# Padrões (poui-patterns)
mkdir -p "$DOCS_DIR/padroes"
for f in "$PLUGIN_DIR/skills/poui-patterns"/*.md; do
  [ -f "$f" ] || continue
  name=$(basename "$f" .md)
  [ "$name" = "SKILL" ] && continue
  dest="$DOCS_DIR/padroes/${name}.mdx"
  add_frontmatter "$f" "$dest"
  echo "Synced: padroes/${name}.mdx"
done

echo "Sync concluído."
