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
import {JecConfigError} from "../../../../../../src/com/jec/commons/cfg/exceptions/JecConfigError";

// Test:
describe("JecConfigError", ()=> {

  describe("instanceOf(Error)", ()=> {
    it("JecConfigError should extend Error", function() {
      let error:JecConfigError = new JecConfigError(null);
      expect(error).to.be.instanceOf(Error);
    });
  });

  describe("#message", ()=> {
    it("should return the same message as passed to the constructor function", function() {
      let message:string = "foo bar";
      let error:JecConfigError = new JecConfigError(message);
      expect(error.message).to.equal(message);
    });
  });
});