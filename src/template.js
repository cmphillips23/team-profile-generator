const generateCards = employeeData => {
     const name = employeeData.getName();
     const id = employeeData.getId();
     const email = employeeData.getEmail();
     const office = employeeData.getOffice();
     const github = employeeData.getGitHub();
     const school = employeeData.getSchool();
     const role = employeeData.getRole();

    for (i=0; i = employeeArr.length; i++) {
        if(role === 'Manager') {
            return `
                <div class="card">
                    <div class="card-body bg-info text-white ">
                        <h3 class="card-title">${name}</h3>
                        <h5>Manager</h5>
                    </div>
                    <div class="d-flex-inline p-3 card-text">
                        <p>ID: ${id}</p>
                        <a href = "mailto: ${email}">${email}</a>
                        <p>Office number: ${office}</p>
                    </div>
                </div>
            `
        } else if (role === 'Engineer') {
            return `
                <div class="card">
                    <div class="card-body bg-info text-white ">
                        <h3 class="card-title">${name}</h3>
                        <h5>Engineer</h5>
                    </div>
                    <div class="d-flex-inline p-3 card-text">
                        <p>ID: ${id}</p>
                        <a href = "mailto: ${email}">${email}</a>
                        <a href = "https://github.com/${github}">GitHub Profile</a>
                    </div>
                </div>
            `
        } else {
            return `
                <div class="card">
                    <div class="card-body bg-info text-white ">
                        <h3 class="card-title">${name}</h3>
                        <h5>Intern</h5>
                    </div>
                    <div class="d-flex-inline p-3 card-text">
                        <p>ID: ${id}</p>
                        <a href = "mailto: ${email}">${email}</a>
                        <p>School: ${school}</p>
                    </div>
                </div>
            `
        }
        
    }
}

module.exports = employeeData => {
    const { info } = employeeData;

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <link rel="stylesheet" href="./src/style.css">
    </head>
    <body>
        <header>
            <h1 class="p-5 bg-secondary text-center align-middle text-white">My Team</h1>
        </header>
        <div class="d-flex justify-content-around">
            <div class="card-deck justify-content-around col-11 text-center">
                ${generateCards(info)}
            </div>
        </div>
    </body>
    </html>
    `;
};