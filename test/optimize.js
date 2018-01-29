const fs = require('fs');
const ampCustom = require('amp-custom');

fs.readFile('./src/test.css', (readError, data) => {
    if (readError) {
        console.error(readError);

        return;
    }

    let cssSource = ampCustom.optimize(data.toString());

    fs.writeFile('./dist/test.css', cssSource, (writeError) => {
        if (writeError) {
            console.error(writeError);
        }
    });
});
