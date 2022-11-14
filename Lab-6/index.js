const list = document.getElementById('listUsers')

function addUsers() {
    fetch("https://randomuser.me/api/?results=2")
        .then((results) => {
            return results.json();
        })
        .then((response) => {
            const user = response.results[0];
            const person = new Person(
                user.picture,
                user.cell,
                user.location.city,
                user.location.country,
                user.location.postcode);    
            person.listUsers();
        });
}

function removeUsers() {
    while (list.firstChild) {
        list.removeChild(list.firstChild)
    }
}

class Person {
    constructor(picture, cell, city, country, postcode) {
        this.picture = picture;
        this.cell = cell;
        this.city = city;
        this.country = country;
        this.postcode = postcode;
    }

    listUsers() {
        const user = document.createElement('div');
        user.id = 'user';

        const picture = document.createElement('img');
        picture.src = this.picture.medium;
        user.appendChild(picture);

        const cell = document.createElement('span');
        cell.innerHTML = `Cell: <em>${this.cell}</em>`
        user.appendChild(cell);

        const city = document.createElement('span');
        city.innerHTML = `City: <em>${this.city}</em>`;
        user.appendChild(city);

        const country = document.createElement('span');
        country.innerHTML = `Country: <em>${this.country}</em>`;
        user.appendChild(country);

        const postcode = document.createElement('span');
        postcode.innerHTML = `Postcode: <em>${this.postcode}</em>`;
        user.appendChild(postcode);
        list.appendChild(user);

        console.log(this.picture, this.cell, this.city, this.country, this.postcode);
    }
}