import indexController from "./indexController.js";
import * as validation from "../Validation/validation.js"

/** UNIT TESTING EXAMPLE WITH FUNCTION MOCKING */
const mockResponse = {
  status: jest.fn(() => mockResponse),
  send: jest.fn()
}

const mockRequest = {
  body: null 
}

jest.mock('../Service/indexService.js', () => ({ sum: jest.fn((a, b) => a + b)}) )

describe('Testing the index controller', () => {
  it('Should return status 400 when validateBody is false', () => {
    jest.mock('../Validation/validation.js', () => ( { validateBody: jest.fn(() => false)}))
    indexController.sum(mockRequest, mockResponse)
    expect(mockResponse.status).toHaveBeenCalledWith(400)
    expect(mockResponse.send).toHaveBeenCalled()
  })

  it('Should return a + b when body provided', () => {
    jest.mock('../Validation/validation.js', () => ( { validateBody: jest.fn(() => true)}))
    mockRequest.body = {"a": 2, "b": 2}
    indexController.sum(mockRequest, mockResponse)
    expect(mockResponse.send).toHaveBeenCalledWith({ result: 4})
    expect(mockResponse.status).toHaveBeenCalledWith(200)
  })
});
