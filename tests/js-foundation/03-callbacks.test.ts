import { getUserById } from "../../src/js-foundation/03-callbacks";


describe('js-foundation/03-calllbacks', () => {

  //argumento done para esperar callback
  test('getuserById should return error if user does not exist', (done) => {

    const id = 10;

    getUserById(id, (error, user) => {
      expect(error).toBe(`User not found with id ${id}`)
      expect(user).toBeUndefined()
      // done se llama cuando ya tenemos los resultados
      // no termina la prueba hasta que done se ejecute
      done();

    })


  })
  test('getuserById should an user', (done) => {

    const id = 1;

    getUserById(id, (error, user) => {
      expect(user).toStrictEqual({id:1,name:'John Doe'})
      expect(error).toBeUndefined()
      // done se llama cuando ya tenemos los resultados
      // no termina la prueba hasta que done se ejecute
      done();

    })


  })


})