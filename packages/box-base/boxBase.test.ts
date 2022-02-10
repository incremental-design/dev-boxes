import { generatePasswords } from './src/Quickstart';

describe('generatePasswords', () => {
  it('should generate 100 passwords', () => {
    for (const password of generatePasswords()) {
      console.log(password);
      expect(password).toHaveLength(36);
    }
  });
});
