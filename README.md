# Canvas Painter

[![Collaborizm](https://img.shields.io/badge/Collaborizm-Join%20now-blue.svg)](https://www.collaborizm.com/) [![Build Status](https://travis-ci.org/shrotavre/canvas-painter.svg?branch=master)](https://travis-ci.org/shrotavre/canvas-painter)

Experiment to render image from locally-run web page containing canvas

&nbsp;

## Installation

1. Clone repo
`git clone https://github.com/shrotavre/canvas-painter.git <dir_name>`

2. Change directory
`cd <dir_name>`

3. Remove git folder
*nix: `rm -rf ./.git`
win: `RD /S /Q .git`

4. Edit **package.json**
Change `name, version, description, repository, author, bugs, homepage`

5. Install packages
`npm install`

6. Update packages
`npm update`

&nbsp;

## Scripts

1. `build`
Transpile ES6 to **build** directory.

2. `dist`
Transpile and minify ES6 to **dist** directory.

3. `test`
Run tests in `test` firectory.