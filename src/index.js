import { } from 'dotenv/config'
import { name, version } from '../package.json'

import Painter from './painter'

(async () => {
  console.log(`${name} (version ${version}) is running.`)

  await Painter('star')
})();
