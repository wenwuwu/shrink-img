shrink-img
=========

[![NPM version][icon-nv]][link-nv]
[![Dependency Status][icon-ds]][link-ds]
[![devDependency Status][icon-dds]][link-dds]
![License][icon-li]

## Installation 

```shell
    npm install shrink-img
```

## Usage

```js
    const shrink = require('shrink-img');

    // Pass in a directory. It will recursively compress all png,jpg,gif images under this folder.
    // !! This will replace your original images, do back up if you needed.
    shrink('FolderPath', 'yourTinyPngAPIKey');
    shrink('.', 'ZgPDOUKtFZgPIiDOKtR');
```

*You need to have a tinyPng API key before compress images.  Go to apply: https://tinypng.com/developers*

[icon-nv]: https://img.shields.io/npm/v/shrink-img.svg?style=flat
[link-nv]: https://www.npmjs.com/package/shrink-img
[icon-ds]: https://img.shields.io/david/wenwuwu/shrink-img.svg?style=flat
[link-ds]: https://david-dm.org/wenwuwu/shrink-img
[icon-dds]: https://img.shields.io/david/dev/wenwuwu/shrink-img.svg?style=flat
[link-dds]: https://david-dm.org/wenwuwu/shrink-img#info=devDependencies
[icon-li]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat
