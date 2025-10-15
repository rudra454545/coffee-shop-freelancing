const fs = require('fs')
const path = require('path')

const menuPath = path.join(__dirname, '..', 'shake-sea', 'components', 'sections', 'menu.jsx')
const publicImgDirs = [
  path.join(__dirname, '..', 'public', 'img'),
  path.join(__dirname, '..', 'public', 'images')
]

const content = fs.readFileSync(menuPath, 'utf8')
const regex = /image:\s*"(\/img\/[^"]+\.jpg)"/gmi
let match
const images = new Set()
while ((match = regex.exec(content)) !== null) {
  images.add(match[1])
}

const results = []
for (const imgPath of images) {
  const filename = imgPath.replace(/^\/img\//, '')
  // ignore numeric-only filenames
  const namePart = filename.replace(/\.jpg$/i, '')
  if (/^\d+$/.test(namePart)) {
    results.push({ image: imgPath, status: 'ignored-numeric' })
    continue
  }

  let found = false
  for (const dir of publicImgDirs) {
    const full = path.join(dir, filename)
    if (fs.existsSync(full)) {
      found = true
      break
    }
  }
  results.push({ image: imgPath, exists: found })
}

const missing = results.filter(r => r.exists === false)

console.log('Checked', results.length, 'unique images referenced in menu.jsx')
if (missing.length === 0) {
  console.log('All referenced images were found (or ignored numeric filenames).')
} else {
  console.log('Missing images:')
  missing.forEach(m => console.log(' -', m.image))
}

// exit with code 0 even if missing, just report
process.exit(0)
