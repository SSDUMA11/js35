let users = [
    {name: 'Nikola', age: 18, id: 1},
    {name: 'Bob', age: 25, id: 2},
    {name: 'Mike', age: 32, id: 3},
];

localStorage.setItem('users', JSON.stringify(users));

function sayHelloToUser(id) {
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find(user => user.id === id);
    
    if (user) {
     return `Hello, ${user.name}!`;
    } else {
     return `User with id ${id} not found`;
    }
}  

console.log(sayHelloToUser(2)); 