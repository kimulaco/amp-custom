const uglifycss = require('uglifycss');

let AmpCustom = function () {
    this.MAX_BYTE = 50000;
    this.ENCODE = 'utf-8';
    this.removeStyleRegExp = [
        /(\r?\n|)@charset (.+?);(\r?\n|)/g,
        /(\r?\n|)@import (.+?);(\r?\n|)/g,
        /(\r?\n|)@namespace (.+?);(\r?\n|)/g,
        /(\r?\n|)@viewport ([\s\S]*?)}(\r?\n|)/gm,
        /(\r?\n|)@page ([\s\S]*?)}(\r?\n|)/gm,
        /(\r?\n|)@document(.+?)\{(?:[^{}]*\{[^{}]*\})*[^{}]*\}(\r?\n|)/gm,
        /(\r?\n|)@supports(.+?)\{(?:[^{}]*\{[^{}]*\})*[^{}]*\}(\r?\n|)/gm,
        /(| )!important(\r?\n|)/g
    ];
    this.optimizeOption = {
        minify: true
    };
};

AmpCustom.prototype = {
    /**
     * optimize
     * @param {string} cssSource - CSS source you want to optimize.
     * @param {object} option - Option to optimize CSS source.
     * @param {boolean} option.minify - Whether to compress the CSS source.
     * @return {boolean} - Optimized CSS source.
     */
    optimize: function (cssSource, option) {
        if (typeof cssSource !== 'string') {
            return cssSource;
        }

        option = Object.assign({}, this.optimizeOption, option || {});

        this.removeStyleRegExp.forEach((selfRegExp) => {
            cssSource = cssSource.replace(selfRegExp, '');
        });

        if (option.minify) {
            cssSource = uglifycss.processString(cssSource, {});
        }

        return cssSource;
    },

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

        return Buffer.byteLength(cssSource, this.ENCODE);
    },

    /**
     * isOverMaxByte
     * @param {string} cssSource - CSS source you want to check.
     * @return {boolean} - Whether the CSS byte capacity does not exceed the maximum value.
     */
    isOverMaxByte: function (cssSource) {
        if (!cssSource) {
            return false;
        }

        if (this.getSize(cssSource) > this.MAX_BYTE) {
            return true;
        }

        return false;
    }
};

module.exports = new AmpCustom();
