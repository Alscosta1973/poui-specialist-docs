# Preview Modal — Página de Instalação

**Data:** 2026-06-18
**Escopo:** Adicionar botão "Ver exemplo" na seção "Primeiro uso" da página de instalação, abrindo um modal com mockup SVG de uma tela PO-UI page-list gerada pelo plugin.

---

## Objetivo

Usuários que chegam na página de instalação não têm uma imagem mental do que o plugin produz. Um botão de preview junto ao exemplo de primeiro uso resolve isso sem sair da página, aumentando a clareza e a confiança antes de instalar.

---

## Arquivos envolvidos

| Arquivo | Ação |
|---|---|
| `public/previews/page-list-pedidos.svg` | Criar — mockup SVG 800×500px |
| `components/preview-modal.tsx` | Criar — client component com modal |
| `components/mdx.tsx` | Editar — registrar `PreviewModal` |
| `content/docs/instalacao.mdx` | Editar — adicionar `<PreviewModal>` na seção "Primeiro uso" |

---

## Componente `PreviewModal`

**Localização:** `components/preview-modal.tsx`

**Props:**
```ts
interface PreviewModalProps {
  src: string;       // caminho do asset (ex: "/poui-specialist-docs/previews/page-list-pedidos.svg")
  label?: string;    // texto do botão, default "Ver exemplo"
}
```

**Comportamento:**
- Botão "Ver exemplo" com ícone de olho (ou similar), estilo outline secundário, alinhado após o bloco de código de primeiro uso
- Clique chama `dialogRef.current.showModal()` — API nativa `<dialog>`
- Fechar: ESC (nativo), clique no backdrop, botão "×" no canto superior direito
- Animação: fade-in CSS via `@keyframes`, sem dependências externas
- Acessibilidade: `<dialog>` gerencia focus trap e `aria-modal`; botão com `aria-haspopup="dialog"`

**Responsividade:**
- Modal: `max-width: 90vw; max-height: 90vh`
- Imagem: `max-width: 100%; height: auto`

---

## Mockup SVG

**Localização:** `public/previews/page-list-pedidos.svg`
**Dimensões:** 800×500px
**Tema:** dark, compatível com o site

**Layout:**
- Toolbar superior — fundo azul PO-UI `#0C6C94`, título "Pedidos", botão "Novo" à direita
- Barra de busca — campo com ícone de lupa
- Tabela com 4 colunas — Status (1ª), Nº Pedido, Data, Cliente
- 4 linhas de dados fictícios

**Dados da tabela:**

| Status | Nº Pedido | Data | Cliente |
|---|---|---|---|
| ● Aprovado (verde `#4CAF50`) | PED-0042 | 18/06/2026 | Acme Ltda |
| ● Aberto (azul `#2196F3`) | PED-0041 | 17/06/2026 | Beta S.A. |
| ● Pendente (amarelo `#FFC107`) | PED-0040 | 17/06/2026 | Gama ME |
| ● Fechado (cinza `#9E9E9E`) | PED-0039 | 16/06/2026 | Delta Co |

**Paleta dark:**
- Fundo geral: `#1a1a1a`
- Fundo tabela/header de linha: `#242424`
- Bordas: `#2a2a2a`
- Texto principal: `#e0e0e0`
- Texto secundário: `#9e9e9e`

---

## Integração no MDX

**Arquivo:** `content/docs/instalacao.mdx`

Adicionar após o bloco de código `/poui-specialist:generate page-list Pedidos --module vendas`, antes da linha "Veja a página /generate":

```mdx
<PreviewModal src="/poui-specialist-docs/previews/page-list-pedidos.svg" label="Ver como fica a tela" />
```

---

## Registro em `components/mdx.tsx`

Exportar `PreviewModal` no objeto de componentes MDX para que o Fumadocs o reconheça em qualquer página `.mdx`.

---

## Fora do escopo

- Live demo / iframe interativo
- GIF animado
- Outros templates além de page-list
- Alteração no pipeline de sync

---

## Critério de aceite

- Botão visível na seção "Primeiro uso" da página `/docs/instalacao`
- Modal abre com fade-in ao clicar
- Modal fecha com ESC, clique no backdrop ou botão "×"
- Mockup exibe Status como 1ª coluna com círculos coloridos
- Site builda sem erro (`next build`)
