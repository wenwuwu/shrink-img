
const tinify = require("tinify");
const fs = require("fs");

/**
* Compresses images recursively under given directory.
* !!! This will replace your original images.
*/
const gotoDirAndCompress = function (dir) {
    const list = fs.readdirSync(dir);

    list.forEach(function (file) {
        file = `${dir}/${file}`;
        const isDir = fs.statSync(file).isDirectory();

        if (   /\.(png|jpg|gif)$/.test(file)
            || isDir ) {

            if (isDir) {
                gotoDirAndCompress(file);
            }
            else {
                // const idx = file.lastIndexOf('.');
                // const newName = file.substring(0, idx) + '.min' + file.substring(idx);
                // tinify.fromFile(file).toFile(newName);
                
                // Write to current file.
                tinify.fromFile(file).toFile(file);
            }
        }
    });
};

const shrink = function (dirPath, apiKey) {
    /**
    * You need to have a tinyPng API key.
    * @see https://tinypng.com/developers
    */
    tinify.key = apiKey;
    gotoDirAndCompress(dirPath);
};

module.export = shrink;
