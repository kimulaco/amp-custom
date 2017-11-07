const fs = require('fs');
const ampCustom = require('../index.js');

fs.readFile('./test/css/module-test-before.css', (error, data) => {
    if (error) {
        console.error(error);

        return;
    }

    let cssSource = ampCustom.optimize(data.toString());

    fs.writeFile('./test/css/module-test-after.css', cssSource, (error) => {
        if (error) {
            console.error(error);
        }
    });
});
