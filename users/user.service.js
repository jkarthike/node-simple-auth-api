﻿// users hardcoded for simplicity
const users = [
    {
        id: 1,
        username: "test",
        password: "test",
        firstName: "Test",
        lastName: "User",
    },
    {
        id: 2,
        username: "maxmustermann",
        password: "test123",
        firstName: "Max",
        lastName: "Mustermann",
    },
];

module.exports = {
    authenticate
};

async function authenticate({ username, password }) {
    const user = users.find(
        (u) => u.username === username && u.password === password
    );
    if (user) {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
}
