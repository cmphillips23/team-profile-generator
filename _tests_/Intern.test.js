const Intern = require('../lib/Intern');


test('creates intern object', () => {
    const intern = new Intern('Montel', 'University of Houston');

    expect(intern.name).toBe('Montel');
    expect(intern.school).toBe('University of Houston');
});

test('gets intern school', () => {
    const intern = new Intern('Montel', 'University of Houston');

    expect(intern.getSchool()).toBe('University of Houston');
});

test('gets intern role', () => {
    const intern = new Intern('Montel', 'University of Houston');

    expect(intern.getRole()).toBe('Intern');
});