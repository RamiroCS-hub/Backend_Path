import { describe, expect, test } from '@jest/globals';
import indexService from './indexService.js';

// UNIT TESTING WITH JEST
describe('sum function', () => {
  it('Add 2 + 2 to equal 4', () => {
    expect(indexService.sum(2, 2)).toBe(4)
  })
});

