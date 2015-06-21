# Boo
## Ghost theme development boilerplate

#### [Ghost](https://github.com/TryGhost)
#### [Developing Ghost Themes](http://themes.ghost.org/)

Version 0.0.1
***use at own peril***

## About
Boo is a theme development framwork for ghost using scss, linting and a staging environment.

It features an easily updatable ghost installation configured to run assets from the dev folder. A Theme is built from src into dev/themes/boo for testing and into build/ and build_min/ for shipping.

## Using Boo
- clone this repo
- run ```npm install```
- run ```grunt dev``` to kickstart the linter/watcher/builder
- run ```node index.js``` to start a ghost instance on localhost:2368

## Getting Started with 0.0.1
- the ghost admin panel is on localhost:2368/ghost
- in this version the framework requires you to setup dummy data manually
- after initial setup, change theme to Boo
- add a site log and cover image (try ```src/boo-logo.png```)

## Release notes 0.0.2
- async content for Boo theme
- demo site with content online
- install dummy data once
- Tag and Author pages in default Boo
- task to start the ghost instance when grunt dev
- multi theme development with cmd: build [from] [to]
