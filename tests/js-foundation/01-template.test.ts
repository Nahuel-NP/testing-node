import { emailTemplate } from "../../src/js-foundation/01-template";




describe('js-foundation/01-template.ts', () => {

  test('emailTemplate shoud contain a greeting', () => {
    expect(emailTemplate).toContain('Hi');
  })
  test('emailTemplate shoud contain {{name}} and {{orderId}}', () => {
    expect(emailTemplate).toMatch(/{{name}}/);
    expect(emailTemplate).toMatch(/{{orderId}}/);
  })


})