//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2017 Pascal ECHEMANN.
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
import {GuidTestUtils} from "../../../../../../utils/test-utils/guid-utils/GuidTestUtils";

// Class to test:
import {JcadContextImpl} from "../../../../../../src/com/jec/commons/jcad/spi/JcadContextImpl";

// Test:
describe("JcadContextImpl", ()=> {

  describe("#getId()", ()=> {
    it("should return a valid GUID V4", function() {
      let ctx:JcadContextImpl = new JcadContextImpl();
      let id:string = ctx.getId();
      expect(id).to.be.a("string");
      expect(GuidTestUtils.GUID_VALIDATOR.test(id)).to.equal(true);
    });
  });
});