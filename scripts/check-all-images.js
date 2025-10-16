const fs = require('fs')
const path = require('path')
const glob = require('glob')

// Find all JSX files
const jsxFiles = glob.sync('**/*.jsx', { 
  cwd: path.join(__dirname, '..'),
  ignore: ['node_modules/**', '.next/**', 'out/**']
})

const publicImgDirs = [
  path.join(__dirname, '..', 'public', 'img'),
  path.join(__dirname, '..', 'public', 'gallery'),
  path.join(__dirname, '..', 'public', 'video')
]

const allImages = new Set()
const results = []

// Regex patterns to find image references
const patterns = [
  /image:\s*["']([^"']+)["']/gi,
  /src=["']([^"']+\.(?:jpg|jpeg|png|gif|webp|mp4))["']/gi,
  /src:\s*["']([^"']+\.(?:jpg|jpeg|png|gif|webp|mp4))["']/gi
]

console.log('Checking image references in all JSX files...\n')

jsxFiles.forEach(file => {
  const filePath = path.join(__dirname, '..', file)
  const content = fs.readFileSync(filePath, 'utf8')
  
  patterns.forEach(pattern => {
    let match
    while ((match = pattern.exec(content)) !== null) {
      const imagePath = match[1]
      if (imagePath.startsWith('/')) {
        allImages.add(imagePath)
        
        // Check if file exists
        const relativePath = imagePath.substring(1) // remove leading /
        let found = false
        
        for (const dir of publicImgDirs) {
          const fullPath = path.join(__dirname, '..', 'public', relativePath)
          if (fs.existsSync(fullPath)) {
            found = true
            break
          }
        }
        
        results.push({
          file,
          image: imagePath,
          exists: found
        })
      }
    }
  })
})

const missing = results.filter(r => !r.exists)
const found = results.filter(r => r.exists)

console.log(`Total image references found: ${results.length}`)
console.log(`Images found: ${found.length}`)
console.log(`Missing images: ${missing.length}\n`)

if (missing.length > 0) {
  console.log('Missing images:')
  missing.forEach(m => {
    console.log(`  ${m.image} (referenced in ${m.file})`)
  })
} else {
  console.log('✅ All image references are valid!')
}

process.exit(missing.length > 0 ? 1 : 0)