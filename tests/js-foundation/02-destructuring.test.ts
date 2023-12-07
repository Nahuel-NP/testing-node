import { characters } from "../../src/js-foundation/02-destructuring";


describe('js-fundation/02-destructuring', () => {

  test('characters shoud contain Flash, Superman', () => {
    // toContain is case sensitive
    expect(characters).toContain('Flash')
    expect(characters).toContain('Superman')

  })

  test('first character shoud be  Flash and second Superman', () => {

    const [flash,superman] = characters

   
    // toContain is case sensitive
    expect(flash).toBe('Flash')
    expect(superman).toBe('Superman')

  })

})