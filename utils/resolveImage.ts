const imageModules = import.meta.glob<string>(
  '@/assets/images/**/*.{svg,png,jpg,jpeg,webp,gif,avif,bmp,ico}',
  { eager: true, import: 'default' }
)

const extensionPattern = /\.(svg|png|jpe?g|webp|gif|avif|bmp|ico)$/i

const imageMap = Object.entries(imageModules).reduce<Record<string, string>>((acc, [path, src]) => {
  const normalized = normalizeKey(path)
  if (!acc[normalized]) {
    acc[normalized] = src
  }
  return acc
}, {})

function normalizeKey(path: string): string {
  return stripExtension(stripToAssets(path))
}

function stripToAssets(path: string): string {
  return path.replace(/\\/g, '/').replace(/^.*\/assets\/images\//, '')
}

function stripExtension(path: string): string {
  return path.replace(extensionPattern, '')
}

function normalizeInput(path: string): string {
  const normalized = path
    .replace(/\\/g, '/')
    .replace(/^@\/assets\/images\//, '')
    .replace(/^~\/assets\/images\//, '')
    .replace(/^\.\/assets\/images\//, '')
    .replace(/^\/assets\/images\//, '')
    .replace(/^assets\/images\//, '')

  return stripExtension(normalized)
}

export function resolveImage(path: string): string {
  const key = normalizeInput(path)
  const resolved = imageMap[key]

  if (!resolved) {
    console.warn(`[resolveImage] Image not found for path: ${path}`)
    return ''
  }

  return resolved
}
