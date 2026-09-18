import sharp from 'sharp'
import { fileURLToPath } from 'node:url'

const source = fileURLToPath(new URL('./icon-source.svg', import.meta.url))
const outDir = fileURLToPath(new URL('../public/icons/', import.meta.url))

await sharp(source).resize(192, 192).png().toFile(`${outDir}icon-192.png`)
await sharp(source).resize(512, 512).png().toFile(`${outDir}icon-512.png`)
await sharp(source)
  .resize(410, 410)
  .extend({ top: 51, bottom: 51, left: 51, right: 51, background: '#1b4b66' })
  .png()
  .toFile(`${outDir}icon-512-maskable.png`)

console.log('Icons written to public/icons/')
