# JEC Commons Project


[![JEC version](https://img.shields.io/badge/JEC-1.0-%23ba00ff.svg)](http://jecproject.org)
[![npm version](https://badge.fury.io/js/jec-commons.svg)](https://www.npmjs.com/package/jec-commons)
[![Apache 2.0](https://img.shields.io/hexpm/l/plug.svg)](https://www.apache.org/licenses/LICENSE-2.0)


JEC Commons is a [JavaScript Enterprise Container][jec-url] project focused on all aspects of reusable JEC components.

[![][jec-logo]][jec-url]

JEC Commons contains core and utility APIs including:

- The JavaScript Connector API for Descriptors *(JCAD)* - An abstraction layer which allows developers to create JEC modules based on [TypeScript Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html).
- The File Processor API - A set of components for writing JEC modules. 
- The Logging API - Components that define a bridge between different JEC logging implementations.
- The Class Loading API - The components that allow to load [TypeScript](https://www.typescriptlang.org/) classes and resources into JEC servers.

## Requirements

JEC Commons needs the following system parameters in order to work correctly:

- npm 3+
- TypeScript 2+

## Installation

Set up the JEC Commons module with:

```bash
$ npm install jec-commons --save
```

## Using Components

All JEC Commons components have to be imported with the ES6 syntax:

```javascript
import { HttpStatusCode, HttpMethod } from "jec-commons";

const NO_CONTENT:number = HttpStatusCode.NO_CONTENT;
const GET:string = HttpMethod.GET;
console.log(NO_CONTENT);
//204
console.log(GET);
//GET
```

For a complete list of available components, please refer to the [API Reference](#api-reference) documentation.

## Running Tests

To execute all unit tests, use:

```bash
$ grunt test
```

## API Reference

The API Reference documentation is not included into the JEC Commons node module. To build the API reference documentation, use:

```bash
$ grunt doc
```

Documentation will be generated in the `docs/api-reference` repository.
The online version of the  API reference documentation is available at: <http://jecproject.org/docs/jec-commons/api/>

The documentation generator is [TypeDoc](http://typedoc.org/)

## Update Release Notes

**Current stable release:** [1.2.0](CHANGELOG.md#jec-commons-1.2.0)
 
For a complete listing of release notes for all JEC Commons update releases, see the [CHANGELOG](CHANGELOG.md) file. 

## License
This JEC Commons Project is licensed under Apache 2.0. Full license text is available in [LICENSE](LICENSE).

```
Copyright 2016-2018 Pascal ECHEMANN.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

[jec-url]: http://jecproject.org
[jec-logo]: https://raw.githubusercontent.com/jec-project/JEC/master/assets/jec-logos/jec-logo.png