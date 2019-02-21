import { } from 'dotenv/config'
import { name, version } from '../package.json'

import Painter from './painter'

(async () => {
  console.log(`${name} (version ${version}) is running.`)

  console.log(`Painting..`)
  await Painter('star', { hands: 8, size: 500 })
  console.log(`Finished!`)
})();
