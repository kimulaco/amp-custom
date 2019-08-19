const fs = require('fs')
const path = require('path')
const inputCss = fs.readFileSync(path.join(__dirname, './css/input.css')).toString()

describe('amp-custom', () => {
  const AmpCustom = require('../amp-custom')
  const ampCustom = new AmpCustom()
  let successOutput = null

  test('.optimize(cssSource) is success', () => {
    successOutput = ampCustom.optimize(inputCss)
    expect(typeof successOutput).toBe('string')
  })

  test('.optimize(undefined) is fail', () => {
    const failOutput = ampCustom.optimize()
    expect(failOutput).toBeFalsy()
  })

  test('.getSize(cssSource) is success', () => {
    const size = ampCustom.getSize(successOutput)
    expect(typeof size).toBe('number')
  })

  test('.getSize(undefined) is fail', () => {
    const size = ampCustom.getSize()
    expect(size).toBeFalsy()
  })

  test('.isOverMaxByte(cssSource) is success', () => {
    const bool = ampCustom.isOverMaxByte(successOutput)
    expect(bool).toBe(false)
  })

  test('.isOverMaxByte(undefined) is fail', () => {
    const bool = ampCustom.isOverMaxByte()
    expect(bool).toBeFalsy()
  })
});

(() => {
  const AmpCustom = require('amp-custom')
  const ampCustom = new AmpCustom()
  const outputPath = path.join(__dirname, './css/output.css')
  const outputCss = ampCustom.optimize(inputCss)

  fs.writeFile(outputPath, outputCss)
})()
