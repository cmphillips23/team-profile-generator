const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Connor', 1, 'cmphillips23@gmail.com');

    expect(employee.name).toBe('Connor');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('cmphillips23@gmail.com');
});

test('gets employee name', () => {
    const employee = new Employee('Connor', 1, 'cmphillips23@gmail.com');

    expect(employee.getName()).toBe('Connor');
});

test('gets employee id', () => {
    const employee = new Employee('Connor', 1, 'cmphillips23@gmail.com');

    expect(employee.getId()).toBe(1);
});

test('gets employee email', () => {
    const employee = new Employee('Connor', 1, 'cmphillips23@gmail.com');

    expect(employee.getEmail()).toBe('cmphillips23@gmail.com');
});

test('gets employee role', () => {
    const employee = new Employee('Connor', 1, 'cmphillips23@gmail.com');

    expect (employee.getRole()).toBe('Employee');
});
