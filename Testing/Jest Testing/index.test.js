import { describe, expect, test } from '@jest/globals';
import { sum } from './index.js';

// UNIT TESTING WITH JEST
describe('sum function', () => {
  test('Add 2 + 2 to equal 4', () => {
    expect(sum(2, 2)).toBe(4)
  })
});
