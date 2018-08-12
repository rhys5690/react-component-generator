# generator-react-component-finished [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> 

## Installation

First, install [Yeoman](http://yeoman.io) and generator-react-component-finished using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-react-component-finished
```

## Generating Your Component

```bash
yo react-component-finished <YourComponentName />
```

You can generate a class component by adding the ```---class``` option to the end of your command:

```bash
yo react-component-finished <YourComponentName /> --class
```

## Placing Your Component In a Custom Location

Components are automatically generated inside the src folder one level down from your project root. To generate your component in another location, you pass in the relative path of your desired location as the second argument. So your command would look like:

```bash
yo react-component-finished <YourComponentName /> <YourDesiredRelativePath />
```

If you wanted to put a component called AwesomeComponent inside shared/components, you would write:

```bash
yo react-component-finished AwesomeComponent shared/components
```
