import { validateBody } from "./validation"

describe('Testing validation function', () => {
  it('should return false when body is empty', () => {
    expect(validateBody({})).toBe(false)
  })
  it('should return true when body is especified', () => {
    expect(validateBody({a: 2, b: 2})).toBe(true)
  })
})