/**
 * @jest-environment jsdom
 */

import { clearFromLocalStorage } from '../src/client/js/app';
 
describe("Testing the submit functionality", () => {
    
    test("Testing the clearFromLocalStorage() function", () => {
          
           expect(clearFromLocalStorage).toBeDefined();
})});