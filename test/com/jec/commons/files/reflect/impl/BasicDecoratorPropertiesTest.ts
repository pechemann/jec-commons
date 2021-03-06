//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import "mocha";
import {expect} from "chai";

// Class to test:
import {BasicDecoratorProperties} from "../../../../../../../src/com/jec/commons/files/reflect/impl/BasicDecoratorProperties";

// Test:
describe("DecoratorProperties", ()=> {

  const decoratorProps:BasicDecoratorProperties = new BasicDecoratorProperties();

  it("should have a 'name' property", function() {
    expect(decoratorProps).to.have.property("name", null);
  });

  it("should have a 'classPath' property", function() {
    expect(decoratorProps).to.have.property("classPath", null);
  });

  it("should have an 'value' property", function() {
    expect(decoratorProps).to.have.property("value", null);
  });
  
  it("should have an 'decoratorType' property", function() {
    expect(decoratorProps).to.have.property("decoratorType", null);
  });
});
