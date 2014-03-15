var path = require("path");

module.exports = {
    /**
     * @returns {string}
     */
    joinName: function () {
        var args = [].slice.call(arguments);
        return args.filter(function (arg) {
            return !!arg;
        }).join("-");
    },
    /**
     * @param num
     * @param unit
     * @returns {number}
     */
    roundUpToUnit: function (num, unit) {
        var dif = num % unit;
        return (dif) ? num + unit - dif : num;
    },
    /**
     * @param value
     * @returns {number}
     */
    scaleValue: function (value) {
        return Math.ceil(value);
    },
    /**
     * @param filePath
     * @returns {XML|string|void|*}
     */
    swapFileName: function (filePath) {

        var svgfile = path.basename(filePath);
        var pngfile = svgfile.replace(/svg/g, "png");

        return filePath.replace(svgfile, pngfile);
    }
};