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

/**
 * Contains the different modes availables to specify the
 * <code>inspectMode</code> parameter of the <code>inspect()</code> method
 * defined by the <code>SourceFileInspector</code> interface.
 */
export enum DecoratorType {

  /**
   * Indicates that the decorator declaration is applyed to a class, or a class
   * member.
   */
  MEMBER = 0,

  /**
   * Indicates that the decorator declaration is applyed to a field.
   */
  FIELD = 1,
}