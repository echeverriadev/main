import { toCamelCase } from '../parse-functions';

describe('toCamelCase', () => {
  it('should convert strings with hyphens to camelCase', () => {
    expect(toCamelCase('hello-world')).toBe('helloWorld');
  });

  it('should convert strings with underscores to camelCase', () => {
    expect(toCamelCase('hello_world')).toBe('helloWorld');
  });

  it('should leave camelCase strings unchanged', () => {
    expect(toCamelCase('helloWorld')).toBe('helloWorld');
  });
});
