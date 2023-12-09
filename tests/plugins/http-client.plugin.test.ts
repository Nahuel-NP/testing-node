import { httpClientPlugin } from '../../src/plugins/http-client.plugin';


describe('plugins/http-client.plugin', () => {


  test('httpClientPlugin.get() should return a string', async () => {

    const data = await httpClientPlugin.get('https://jsonplaceholder.typicode.com/todos/1')
    expect(data).toEqual(
      {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: expect.any(Boolean)

      })


  })

  test('httpClientPlugin should have POST PUT and DELETE Methods',()=>{

    expect(typeof httpClientPlugin.post).toBe('function')
    expect(typeof httpClientPlugin.put).toBe('function')
    expect(typeof httpClientPlugin.delete).toBe('function')
    
    // expect(httpClientPlugin.post).toBeDefined()
    // expect(httpClientPlugin.put).toBeDefined()
    // expect(httpClientPlugin.delete).toBeDefined()
    
    // expect(httpClientPlugin).toHaveProperty('post')
    // expect(httpClientPlugin).toHaveProperty('put')
    // expect(httpClientPlugin).toHaveProperty('delete')
  })


})