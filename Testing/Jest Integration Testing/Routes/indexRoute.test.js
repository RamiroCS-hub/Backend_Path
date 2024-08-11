import { testServer } from "../utils/testServer"
import index from "./indexRoute"
const request = testServer(index)

/* We mock the Service because we want to test only the integration between the routes and the controller, we can make another integration test to test the communication between the service and the controller */

// THIS IS A STUB
jest.mock('../Service/indexService.js', () => ({ sum: jest.fn((a, b) => a + b)}) )

describe('Testing [ /index ]', () => {
  it('should response with status 200 when body provided', async () => {
    // AAA - Arrange - Act - Assert
    //Arrange
    const expected = 200
    //Act
    const { status: result } = await request.get('/index').send({ a: 2, b: 2})
    //Assert
    expect(result).toEqual(expected)
  })
  it('should response with the addition of a and b parameters', async () => {
    const a = 2, b = 2
    //Arrange
    const expected = a + b 
    //Act
    const { body: result } = await request.get('/index').send({a, b})
    //Assert
    expect(result.result).toEqual(expected)
  })
  it('should response with status 400 when body is empty', async () => {

    //Arrange
    const expected = 400
    //Act
    const { status: result } = await request.get('/index').send({})
    //Assert
    expect(result).toEqual(expected)
  })
})
