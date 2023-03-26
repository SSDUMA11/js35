let nikola = {firstName: 'Nikola', lastName: 'Tesla'};
let bob = {firstName: 'Bob'};
let mike = {lastName: 'Smith'};
let micheal = {};

let getFullName = function (user) {
    return `${user.firstName} ${user.lastName}`;
}

getFullName = new Proxy(getFullName, {
    apply(target, thisArg, args) {
      let user = args[0];
      if (!user.firstName && !user.lastName) {
        return 'no name';
      } else if (!user.lastName || !user.firstName) {
        return user.firstName || user.lastName;
      } else {
        return target.apply(thisArg, args).toUpperCase();
      }  
    }
});

console.log(getFullName(nikola));
console.log(getFullName(bob));
console.log(getFullName(mike));
console.log(getFullName(micheal));