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
import {HttpMethod} from "../../../../../../src/com/jec/commons/net/http/HttpMethod";

// Utilities:
import * as utils from "../../../../../../utils/test-utils/utilities/HttpMethodTestUtils";

// Test:
describe("HttpMethod", ()=> {

  describe("#GET", ()=> {
    it("GET should return 'GET'", function() {
      expect(HttpMethod.GET).to.equal(utils.GET);
    });
  });

  describe("#POST", ()=> {
    it("POST should return 'POST'", function() {
      expect(HttpMethod.POST).to.equal(utils.POST);
    });
  });

  describe("#PUT", ()=> {
    it("PUT should return 'PUT'", function() {
      expect(HttpMethod.PUT).to.equal(utils.PUT);
    });
  });

  describe("#DELETE", ()=> {
    it("DELETE should return 'DELETE'", function() {
      expect(HttpMethod.DELETE).to.equal(utils.DELETE);
    });
  });

  describe("#HEAD", ()=> {
    it("HEAD should return 'HEAD'", function() {
      expect(HttpMethod.HEAD).to.equal(utils.HEAD);
    });
  });

  describe("#OPTIONS", ()=> {
    it("OPTIONS should return 'OPTIONS'", function() {
      expect(HttpMethod.OPTIONS).to.equal(utils.OPTIONS);
    });
  });

  describe("#TRACE", ()=> {
    it("TRACE should return 'TRACE'", function() {
      expect(HttpMethod.TRACE).to.equal(utils.TRACE);
    });
  });

  describe("#CONNECT", ()=> {
    it("CONNECT should return 'CONNECT'", function() {
      expect(HttpMethod.CONNECT).to.equal(utils.CONNECT);
    });
  });
});
