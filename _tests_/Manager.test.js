const Manager = require('../lib/Manager');


test('creates manager object', () => {
    const manager = new Manager('Lance', 1, 'email@email.com', 225);

    expect(manager.name).toBe('Lance');
    expect(manager.officeNumber).toBe(225);
});

test('gets manager role', () => {
    const manager = new Manager('Lance', 1, 'email@email.com', 225);

    expect(manager.getRole()).toBe('Manager');
});