# Boo
## Ghost theme development boilerplate

---

Version 0.0.0 ***use at own peril***

## Description

Boo is a theme development framwork for ghost using scss, linting and a staging environment.

It features an easily updatable ghost installation configured to run assets from the dev folder. A Theme is built from src into dev/themes/boo for testing and into build for shipping.

## Using Boo
- clone this repo
- run npm install
- run node index.js to start a ghost instance on localhost:2368
- the ghost admin panel is on localhost:2368/ghost
- run grunt dev to kick start the linter/watcher

## Release notes 0.0.1:
- default Boo favicon.ico
- default Boo webfont
- default Boo theme
- moar task runnerz
- multi theme development with cmd: build [from] [to]
