import fs from 'fs'
import path from 'path'
import { createClient } from 'contentful'

const SPACE = 'cg1ut3p9tk10'
const TOKEN = '9e21768bb9e633738d2a73a5a826d1644dc31f39de3af7e6d6f09f3528a9955d'

const client = createClient({
  space: SPACE,
  accessToken: TOKEN
})

const types = [
  'person'
]

export const getcontent = async () => {
  console.log('> Starting import...')
  for (const type of types) {
    console.log('> Getting content for', type)
    const entries = await client.getEntries({
      content_type: type,
      include: 3
    })
    fs.writeFileSync(
        path.join(__dirname, '..', 'data', `${type}.json`),
        JSON.stringify(entries.items)
    )
    console.log('> Content gotten and written for', type)
  }
  return true
}

if (process.argv[2] === 'install') {
  getcontent()
}