/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http:polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http:polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http:polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http:polymer.github.io/PATENTS.txt
 */

'use strict';
const Generator = require('yeoman-generator');
// Copy-paste of the polymer-cli generator, find if it's possible to just use that.
module.exports = class extends Generator {

  initializing() {
    // Yeoman replaces dashes with spaces. We want dashes.
    this.appname = this.appname.replace(/\s+/g, '-');
  }

  end() {
    this.log('\nSetup Complete!');
    this.log('Check out your new project README for information about what to do next.\n');
  }

  prompting() {
    let _this = this;
    let prompts = [{
      name: 'name',
      type: 'input',
      message: `Element name`,
      default: this.appname + (this.appname.includes('-') ? '' : '-element'),
      validate(name) {
        let nameContainsHyphen = name.includes('-');
        if (!nameContainsHyphen) {
          _this.log('\nUh oh, custom elements must include a hyphen in ' +
            'their name. Please try again.');
        }
        return nameContainsHyphen;
      },
    }, {
      type: 'input',
      name: 'description',
      message: 'Brief description of the element',
    }, ];
    // typings is out of date
    return this.prompt(prompts).then((props) => {
      this.props = props;
      this.props.elementClassName = this.props.name.replace(/(^|-)(\w)/g, (_match, _p0, p1) => p1.toUpperCase());
    });
  }

  writing() {
    let name = this.props.name;
    this.fs.copyTpl(
      `${this.templatePath()}/**/?(.)!(_)*`,
      this.destinationPath(),
      this.props);
    this.fs.copyTpl(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore'),
      this.props);
    this.fs.copyTpl(
      this.templatePath('_element.html'),
      this.destinationPath(`${name}.html`),
      this.props);
    this.fs.copyTpl(
      this.templatePath('test/_element.html'),
      this.destinationPath(`test/${name}.html`),
      this.props);
  }

  install() {
    this.log('\nProject generated!');
    this.log('Installing dependencies...');
    this.installDependencies({
      npm: false,
    });
  }
};
