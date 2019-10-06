const fs = require('fs')
const childProcess = require('child_process')
const util = require('util')
const exec = util.promisify(childProcess.exec)
const readFile = util.promisify(fs.readFile)

const CLI_SCRIPT_PATH = 'bin/index.js'
const INPUT_CSS_PATH = 'test/css/input.css'
const OUTPUT_CSS_PATH = 'test/css/output.css'

describe('amp-custom-cli', () => {
  let successOutput = null

  beforeAll(async () => {
    await exec(`npx del-cli ${OUTPUT_CSS_PATH}`)
    await exec(`node ${CLI_SCRIPT_PATH} ${INPUT_CSS_PATH} ${OUTPUT_CSS_PATH}`)
    successOutput = await readFile(OUTPUT_CSS_PATH).toString()
  })

  test('.optimize(cssSource) is success', () => {
    expect(typeof successOutput).toBe('string')
  })
})
