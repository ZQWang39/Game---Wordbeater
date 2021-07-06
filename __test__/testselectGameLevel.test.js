/**
 * @jest-environment jsdom
 */

import { selectGameLevel } from '../src/client/js/app';
 
describe("Testing the submit functionality", () => {
    
    test("Testing the selectGameLevel() function", () => {
          
           expect(selectGameLevel).toBeDefined();
})});