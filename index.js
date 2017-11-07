const uglifycss = require('uglifycss');

let AmpCustom = function () {
    this.MAX_BYTE = 50000;
    this.ENCODE = 'utf-8';
    this.removeStyleArr = [
        /@charset (.+?);/g,
        /@import (.+?);/g,
        /@namespace (.+?);/g,
        /@viewport ([\s\S]*?)}/gm,
        /@page ([\s\S]*?)}/gm,
        /!important/g
    ];
    this.option = {
        minify: true
    };
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
    },

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

        option = Object.assign({}, this.option, option || {});
        cssSource = this._removeInvalidStyle(cssSource);

        if (option.minify) {
            cssSource = this._minifyStyle(cssSource);
        }

        return cssSource;
    },

    /**
     * _minifyStyle
     * @param {string} cssSource - CSS source to compress
     * @return {string} - Compressed CSS source
     */
    _minifyStyle: function (cssSource) {
        return uglifycss.processString(cssSource, {});
    },

    /**
     * _removeInvalidStyle
     * @param {string} cssSource - CSS source you want to optimize.
     * @return {string} - Optimized CSS source.
     */
    _removeInvalidStyle: function (cssSource) {
        this.removeStyleArr.forEach((removeStyle) => {
            cssSource = cssSource.replace(removeStyle, '');
        });

        return cssSource;
    }
};

module.exports = new AmpCustom();
