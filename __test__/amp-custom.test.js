const fs = require('fs');
const path = require('path');
const inputCss = fs.readFileSync(path.join(__dirname, './css/input.css')).toString();

describe('amp-custom', () => {
    const AmpCustom = require('amp-custom');
    const ampCustom = new AmpCustom();
    let output = '';

    test('.optimize(cssSource)', () => {
        output = ampCustom.optimize(inputCss);

        expect(typeof output).toBe('string');
    });

    test('.getSize(cssSource)', () => {
        let size = ampCustom.getSize(output);

        expect(typeof size).toBe('number');
    });

    test('.isOverMaxByte(cssSource)', () => {
        let bool = ampCustom.isOverMaxByte(output);

        expect(bool).toBe(false);
    });
});

(() => {
    const AmpCustom = require('amp-custom');
    const ampCustom = new AmpCustom();
    const outputPath = path.join(__dirname, './css/output.css');
    const outputCss = ampCustom.optimize(inputCss);

    fs.writeFile(outputPath, outputCss);
})();

