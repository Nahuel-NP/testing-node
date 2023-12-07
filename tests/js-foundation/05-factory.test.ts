import { buildMakePerson } from "../../src/js-foundation/05-factory";



describe('js-foundation/05-factory.ts',()=>{


  const getUUID = ()=> '12345';
  const getAge = ()=> 35;

  test('buildMakePerson should return a function',()=>{
    const makePerson = buildMakePerson({getUUID,getAge});
    expect(makePerson).toBeInstanceOf(Function);
  })

  test('buildMakePerson should return a person object',()=>{

    const makePerson = buildMakePerson({getUUID,getAge});
    const person = makePerson({name:'John Doe',birthdate:'1994-06-08'});

    expect(person).toEqual(
      { id: '12345', name: 'John Doe', birthdate: '1994-06-08', age: 35 }
    )

  })

})