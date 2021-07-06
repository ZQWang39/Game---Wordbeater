/**
 * @jest-environment jsdom
 */

import { init } from '../src/client/js/app';
 
describe("Testing the submit functionality", () => {
    
    test("Testing the init() function", () => {
          
           expect(init).toBeDefined();
})});