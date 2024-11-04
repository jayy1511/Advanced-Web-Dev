"use strict";

const users = [
    {
        userName: "Alice",
        lastName: "Johnson",
        age: 30,
        address: {
            street: "Oak Avenue",
            number: 45,
            house: true,
        },
        role: "Software Engineer",
        gender: "female",
    },
    {
        userName: "Charlie",
        lastName: "Smith",
        age: 27,
        address: {
            street: "Maple Street",
            number: 101,
            house: false,
        },
        role: "Project Manager",
        gender: "male",
    },
    {
        userName: "Diana",
        lastName: "Brown",
        age: 35,
        address: {
            street: "Elm Road",
            number: 88,
            house: true,
        },
        role: "UX Designer",
        gender: "female",
    },
    {
        userName: "Eve",
        lastName: "Davis",
        age: 21,
        address: {
            street: "Birch Lane",
            number: 7,
            house: false,
        },
        role: "Intern",
        gender: "female",
    },
    {
        userName: "Frank",
        lastName: "Miller",
        age: 40,
        address: {
            street: "Pine Street",
            number: 200,
            house: true,
        },
        role: "CTO",
        gender: "male",
    },
    {
        userName: "Grace",
        lastName: "Wilson",
        age: 28,
        address: {
            street: "Cedar Avenue",
            number: 99,
            house: false,
        },
        role: "Marketing Specialist",
        gender: "female",
    },
    {
        userName: "Henry",
        lastName: "Moore",
        age: 33,
        address: {
            street: "Poplar Road",
            number: 16,
            house: true,
        },
        role: "HR Manager",
        gender: "male",
    },
    {
        userName: "Ivy",
        lastName: "Taylor",
        age: 25,
        address: {
            street: "Willow Street",
            number: 52,
            house: false,
        },
        role: "Sales Associate",
        gender: "female",
    },
    {
        userName: "Jack",
        lastName: "Anderson",
        age: 29,
        address: {
            street: "Spruce Avenue",
            number: 78,
            house: true,
        },
        role: "DevOps Engineer",
        gender: "male",
    },
    {
        userName: "Karen",
        lastName: "Thomas",
        age: 37,
        address: {
            street: "Chestnut Street",
            number: 65,
            house: false,
        },
        role: "Finance Manager",
        gender: "female",
    },
    {
        userName: "Leo",
        lastName: "Harris",
        age: 22,
        address: {
            street: "Fir Lane",
            number: 10,
            house: true,
        },
        role: "Data Analyst",
        gender: "male",
    },
];

function displayUsers() {
    const userContainer = document.getElementById('user-container');
    userContainer.innerHTML = '';
    users.forEach(user => {
        const card = document.createElement('article');
        card.classList.add('card');

        const cardImage = document.createElement('div');
        cardImage.classList.add('card-image');
        const img = document.createElement('img');
        img.src = user.gender === "female" ? './assets/01.jpg' : './assets/02.jpg';
        img.alt = user.userName;
        const title = document.createElement('span');
        title.classList.add('card-title');
        title.textContent = user.userName;

        cardImage.appendChild(img);
        cardImage.appendChild(title);
        card.appendChild(cardImage);

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');
        const ul = document.createElement('ul');
        ul.classList.add('list-group');

        const items = [
            `Name: ${user.userName} ${user.lastName}`,
            `Age: ${user.age}`,
            `Address: ${user.address.number} ${user.address.street}`,
            `Role: ${user.role}`,
        ];

        items.forEach(item => {
            const li = document.createElement('li');
            li.classList.add('list-group-item');
            li.textContent = item;
            ul.appendChild(li);
        });

        cardContent.appendChild(ul);
        card.appendChild(cardContent);
        userContainer.appendChild(card);
    });
}

displayUsers();
