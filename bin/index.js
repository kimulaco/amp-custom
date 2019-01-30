#!/usr/bin/env node

const AmpCustom = require('../amp-custom');
const ampCustom = new AmpCustom();
const program = require('commander');
const fs = require('fs');
const pkg = require('../package.json');
const argv = process.argv;
const inputPath = argv[2];
const outputPath = argv[3];
const inputCss = fs.readFileSync(inputPath).toString();
const outputCss = ampCustom.optimize(inputCss);

program
    .version(pkg.version)
    .parse(process.argv);

fs.writeFile(outputPath, outputCss, (error) => {
    if (error) {
        console.error(new Error(error));

        return;
    }

    console.log('Optimization of CSS has been completed.');
});
