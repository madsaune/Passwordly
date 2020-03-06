const passwordly = require('../index');

describe('Checking basic string configuration', () => {

  test('only 1 password is returned', () => {
    const password = passwordly('string', {
      uppercase: true,
      count: 1
    });
    expect(password.length).toBe(1);
  });

  test('only 2 passwords is returned', () => {
    const password = passwordly('string', {
      uppercase: true,
      count: 2
    });
    expect(password.length).toBe(2);
  });

  test('password length should be 12', () => {
    const password = passwordly('string', {
      uppercase: true
    });

    expect(password[0].length).toBe(12);
  });

  test('password length should be 18', () => {
    const password = passwordly('string', {
      uppercase: true,
      len: 18
    });

    expect(password[0].length).toBe(18);
  });

});

describe('Checking custom string configuration', () => {

  test('password should contain uppercase only', () => {
    const password = passwordly('string', {
      uppercase: true
    });

    expect(password[0].match(/[A-Z]/)).not.toBeNull();
    expect(password[0].match(/[a-z]/)).toBeNull();
    expect(password[0].match(/[0-9]/)).toBeNull();
    expect(password[0].match(/[@!\-*#%]/)).toBeNull();
  });

  test('password should contain lowercase only', () => {
    const password = passwordly('string', {
      lowercase: true
    });

    expect(password[0].match(/[A-Z]/)).toBeNull();
    expect(password[0].match(/[a-z]/)).not.toBeNull();
    expect(password[0].match(/[0-9]/)).toBeNull();
    expect(password[0].match(/[@!\-*#%]/)).toBeNull();
  });

  test('password should contain digits only', () => {
    const password = passwordly('string', {
      digits: true
    });

    expect(password[0].match(/[A-Z]/)).toBeNull();
    expect(password[0].match(/[a-z]/)).toBeNull();
    expect(password[0].match(/[0-9]/)).not.toBeNull();
    expect(password[0].match(/[@!\-*#%]/)).toBeNull();
  });

  test('password should contain symbols only', () => {
    const password = passwordly('string', {
      symbols: true
    });

    expect(password[0].match(/[A-Z]/)).toBeNull();
    expect(password[0].match(/[a-z]/)).toBeNull();
    expect(password[0].match(/[0-9]/)).toBeNull();
    expect(password[0].match(/[@!\-*#%]/)).not.toBeNull();
  });

  test('password should contain uppercase and lowercase only', () => {
    const password = passwordly('string', {
      uppercase: true,
      lowercase: true
    });

    expect(password[0].match(/[A-Z]/)).not.toBeNull();
    expect(password[0].match(/[a-z]/)).not.toBeNull();
    expect(password[0].match(/[0-9]/)).toBeNull();
    expect(password[0].match(/[@!\-*#%]/)).toBeNull();
  });

  test('password should contain uppercase, lowercase and digits only', () => {
    const password = passwordly('string', {
      uppercase: true,
      lowercase: true,
      digits: true
    });

    expect(password[0].match(/[A-Z]/)).not.toBeNull();
    expect(password[0].match(/[a-z]/)).not.toBeNull();
    expect(password[0].match(/[0-9]/)).not.toBeNull();
    expect(password[0].match(/[@!\-*#%]/)).toBeNull();
  });

  test('password should contain uppercase, lowercase, digits and symbols only', () => {
    const password = passwordly('string', {
      uppercase: true,
      lowercase: true,
      digits: true,
      symbols: true
    });

    expect(password[0].match(/[A-Z]/)).not.toBeNull();
    expect(password[0].match(/[a-z]/)).not.toBeNull();
    expect(password[0].match(/[0-9]/)).not.toBeNull();
    expect(password[0].match(/[@!\-*#%]/)).not.toBeNull();
  });
});