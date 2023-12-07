import { getAge } from '../../src/plugins';

describe('plugins/get-age.plugin', () => {

  test('getAge should return the age of a person', () => {

    const birthdate = '1993-08-05'
    const age = getAge(birthdate)

    expect(typeof age).toBe('number')

  })
  test('getAge should return the current age', () => {


    const birthdate = '1993-08-05';
    const age = getAge(birthdate);

    const calculateAge = new Date().getFullYear() - new Date(birthdate).getFullYear();
    expect(age).toBe(calculateAge);

  })

  // espias o spyOn
  test('getAge should return 0 years', () => {

    //mock es imitar un valor
    const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1993)
    const birthdate = '1993-08-05';
    const age = getAge(birthdate);
    console.log({age});
    expect(age).toBe(0);
    // esperamos que el metodo se haya llamado
    expect(spy).toHaveBeenCalled();
    // esperamos que el metodo se haya llamado con un argumento
    //expect(spy).toHaveBeenCalledWith({a:1});

  })

})