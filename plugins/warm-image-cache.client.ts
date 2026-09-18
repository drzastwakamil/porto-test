import { spots } from '~/data/spots'
import { culture } from '~/data/culture'
import { history } from '~/data/history'

const STORAGE_KEY = 'porto-weekend:images-warmed-v1'
const CONCURRENCY = 6

function collectImageUrls(): string[] {
  const urls = [...spots, ...culture, ...history]
    .map((item) => item.image)
    .filter((url): url is string => !!url)
  return Array.from(new Set(urls))
}

function preloadImage(url: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = () => resolve()
    img.src = url
  })
}

async function warmPool(urls: string[]) {
  let index = 0
  async function worker() {
    while (index < urls.length) {
      const url = urls[index++]
      await preloadImage(url)
    }
  }
  await Promise.allSettled(Array.from({ length: CONCURRENCY }, worker))
}

export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined') return

  onNuxtReady(() => {
    if (!navigator.onLine) return
    try {
      if (window.localStorage.getItem(STORAGE_KEY)) return
    } catch {
      return
    }

    const urls = collectImageUrls()
    warmPool(urls).then(() => {
      try {
        window.localStorage.setItem(STORAGE_KEY, String(Date.now()))
      } catch {
        // storage unavailable — will just retry warming next load
      }
    })
  })
})
