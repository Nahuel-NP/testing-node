import { getAge } from '../../src/plugins';

describe('plugins/get-age.plugin',()=>{

  test('getAge should return the age of a person',()=>{

    const birthdate = '1993-08-05'
    const age = getAge(birthdate)

    expect(typeof age).toBe('number')

  })
  test('getAge should return the current age',()=>{


    const birthdate = '1993-08-05';
    const age = getAge(birthdate);

    const calculateAge = new Date().getFullYear() - new Date(birthdate).getFullYear();
    expect(age).toBe(calculateAge);

  })

})