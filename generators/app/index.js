'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('class');
    this.class = opts.class ? 'Class' : '';

    this.argument('arguments', {
      type: Array,
      required: true
    });

    this.componentName = args[0];
    this.pathName = args[1] ? args[1] : 'src';
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath(`MyComponent${this.class}.js`),
      this.destinationPath(`${this.componentName}.js`), {
        name: this.componentName
      }
    );

    this.fs.copyTpl(
      this.templatePath('MyComponent.css'),
      this.destinationPath(`${this.componentName}.css`), {
        name: this.componentName
      }
    );
  }

  paths() {
    this.destinationRoot(`${this.pathName}`);
  }
};
