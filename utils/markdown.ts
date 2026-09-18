import { marked } from 'marked'

marked.setOptions({ breaks: true })

export function renderMarkdown(text: string): string {
  return marked.parse(text, { async: false }) as string
}

export function renderMarkdownInline(text: string): string {
  return marked.parseInline(text, { async: false }) as string
}
