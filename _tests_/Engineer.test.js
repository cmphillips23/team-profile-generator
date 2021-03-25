const Engineer = require('../lib/Engineer');


test('creates an engineer object', () => {
    const engineer = new Engineer('Bill', 2, 'email@email.com', 'billtheengi@github.com');

    expect(engineer.name).toBe('Bill');
    expect(engineer.github).toBe('billtheengi@github.com');
});

test('gets engineer name', () => {
    const engineer = new Engineer('Bill', 2, 'email@email.com', 'billtheengi@github.com');

    expect(engineer.getName()).toBe('Bill');
});

test('gets engineer github', () => {
    const engineer = new Engineer('Bill', 2, 'email@email.com', 'billtheengi@github.com');

    expect(engineer.getGitHub()).toBe('billtheengi@github.com');
});

test('gets engineer role', () => {
    const engineer = new Engineer('Bill', 2, 'email@email.com', 'billtheengi@github.com');

    expect (engineer.getRole()).toBe('Engineer');
});