// Create tmp folder, dump mp3s, have Deepgram key ready

const readline = require('readline-sync')
const fs = require('fs')
const { Deepgram } = require('@deepgram/sdk')

const DG_KEY = process.env.DG_KEY || readline.question('Deepgram Key: ')
const BASE = './utils/tmp'

const deepgram = new Deepgram(DG_KEY)

async function main() {
  const files = fs.readdirSync(BASE)
  for(let file of files) {
    const source = {
      buffer: fs.readFileSync(BASE+'/'+file),
      mimetype: 'audio/mp3'
    }

    const response = await deepgram.transcription.preRecorded(source, {
      punctuate: true,
      paragraphs: true
    })

    const transcript = response.results.channels[0].alternatives[0].paragraphs.transcript

    fs.writeFileSync(BASE+'/'+file+'.txt', transcript)
  }
}

main()