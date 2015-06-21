# Boo
## Ghost theme development boilerplate

#### [Ghost](https://github.com/TryGhost)

Version 0.0.0 ***use at own peril***

## About
Boo is a theme development framwork for ghost using scss, linting and a staging environment.

It features an easily updatable ghost installation configured to run assets from the dev folder. A Theme is built from src into dev/themes/boo for testing and into build/ for shipping.

## Using Boo
- clone this repo
- run ```npm install```
- run ```node index.js``` to start a ghost instance on localhost:2368
- the ghost admin panel is on localhost:2368/ghost
- run ```grunt dev``` to kickstart the linter/watcher/builder

## Release notes 0.0.1:
- install dummy data
- Tag and Author pages in default Boo
- Async content
- default Boo logo
- default Boo favicon.ico
- task to start the ghost instance when grunt dev
- multi theme development with cmd: build [from] [to]

## Release notes 0.0.2:
- demo site with content online
