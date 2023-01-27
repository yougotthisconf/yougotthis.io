const fs = require('fs')
const path = require('path')
const readline = require('readline-sync')

const base = './content/library/videos'
const folderName = readline.question('Directory: ')

function getFilePaths() {
    const dirs = fs.readdirSync(base)
    const files = dirs.map(dir => fs.readdirSync(base + '/' + dir).map(name => base + '/' + dir + '/' + name)).flat()
    return files
}

async function main() {
    try {
        let files = getFilePaths()
        files = files.filter(file => file.includes(folderName))
        files = files.map(file => file.split('./content/library/')[1].split('.md')[0])
        for(file of files) {
          console.log(`- ${file}`)
        }
    } catch(error) {
        console.error({ error })
    }
}

main()
