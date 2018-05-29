const CleanCSS = require('clean-css');

let AmpCustom = function (option) {
    this.MAX_BYTE = 50000;
    this.encode = 'utf-8';
    this.removeStyles = [
        /@charset (.+?);/g,
        /@import (.+?);/g,
        /@namespace (.+?);/g,
        /@viewport ([\s\S]*?)}/gm,
        /@page ([\s\S]*?)}/gm,
        /@document(.+?)\{(?:[^{}]*\{[^{}]*\})*[^{}]*\}/gm,
        /@supports(.+?)\{(?:[^{}]*\{[^{}]*\})*[^{}]*\}/gm,
        /!important/g
    ];
    this.cleanCss = new CleanCSS(Object.assign({
        compatibility: 'ie11'
    }, option || {}));
};

AmpCustom.prototype = {
    /**
     * getSize
     * @param {string} cssSource - CSS source you want to measure.
     * @returns {number|boolean} - Number of bytes in CSS source.
     */
    getSize: function (cssSource) {
        if (!cssSource) {
            console.error(new Error('Error: CSS source is not a string.'));

            return false;
        }

        return Buffer.byteLength(cssSource, this.encode);
    },

    /**
     * isOverMaxByte
     * @param {string} cssSource - CSS source you want to check.
     * @return {boolean} - Whether the CSS byte capacity does not exceed the maximum value.
     */
    isOverMaxByte: function (cssSource) {
        if (typeof cssSource !== 'string') {
            return false;
        }

        if (this.getSize(cssSource) > this.MAX_BYTE) {
            return true;
        }

        return false;
    },

    /**
     * optimize
     * @param {string} cssSource - CSS source you want to optimize.
     * @return {string} - Optimized CSS source.
     */
    optimize: function (cssSource) {
        if (typeof cssSource !== 'string') {
            return cssSource;
        }

        this.removeStyles.forEach((style) => {
            cssSource = cssSource.replace(style, '');
        });

        return this.cleanCss.minify(cssSource).styles;
    }
};

module.exports = AmpCustom;
