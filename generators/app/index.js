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
    this.fs.copyTpl(`${this.templatePath()}/**/?(.)!(_)*`, this.destinationPath(), this.props);
    this.fs.copyTpl(this.templatePath('_element.html'), `${name}.html`, this.props);
    this.fs.copyTpl(this.templatePath('test/_element_test.html'), `test/${name}_test.html`, this.props);
  }

  install() {
    this.log('\nProject generated!');
    this.log('Installing dependencies...');
    this.installDependencies({
      npm: false,
    });
  }
};