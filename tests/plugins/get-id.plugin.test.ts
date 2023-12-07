import { getUUID } from "../../src/plugins";


describe('plugins/get-id.plugin', () => {


  test('get-id should return a string', () => {

    const id = getUUID();
    expect(typeof id).toBe('string');
    expect(id).toHaveLength(36);
  })

})