
# polymer-init-vanilla-web-component

[![Build Status](https://travis-ci.org/PolymerLabs/generator-polymer-init-vanilla-web-component.svg?branch=master)](https://travis-ci.org/PolymerLabs/generator-polymer-init-vanilla-web-component)

A Yeoman generator that scaffolds a vanilla web component template.

### Setup

##### Prerequisites

First, install [Polymer CLI](https://github.com/Polymer/polymer-cli) and
generator-polymer-init-vanilla-web-component using [npm](https://www.npmjs.com) (we
assume you have pre-installed [node.js](https://nodejs.org)).

    npm install -g polymer-cli
    npm install -g generator-polymer-init-vanilla-web-component

##### Initialize element from template

Generate your new element using `polymer init`:

    mkdir my-element
    cd my-element
    polymer init vanilla-web-component

### Ready for [webcomponents.org](https://www.webcomponents.org)

The generated element fullfils the [publishing requirements](https://www.webcomponents.org/publish) of webcomponents.org:
- Version defaults to **0.0.1** in `bower.json` and `package.json` - you'll still have to [tag and create a release on github](https://help.github.com/articles/creating-releases/)
- License defaults to **MIT** in `bower.json`, `package.json`, and `README.md` - feel free to update it according to your needs
- `README.md` contains a comment block needed to enable inline demo in webcomponents.org - you'll have to [setup Github preview integration](https://www.webcomponents.org/preview-integration)
