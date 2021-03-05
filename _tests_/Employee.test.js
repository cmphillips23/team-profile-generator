const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Connor');

    expect(employee.name).toBe('Connor');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(Number));
})
