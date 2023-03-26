fetch('https://127.0.0.1:5501/home-work-data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    console.log(showAdminName(data));
  });

function showAdminName(data) {
    for (let user in data) {
      if (data[user].isAdmin) {
        return data[user].name;
      }
    }
    return "No admin found";
  }
console.log(showAdminName()); 

/////////////////////////////////////
// let users = {
//     "mike":{
//        "name": "Mike",
//        "age": 18,
//        "isAdmin": false
//     },
//     "bob":{
//        "name": "Bob",
//        "age": 32,
//        "isAdmin": false
//     },
//     "nikola":{
//        "name": "Nikola",
//        "age": 25,
//        "isAdmin": true
//     }
// }

// function showAdminName(data) {
//     for (let user in data) {
//       if (data[user].isAdmin) {
//         return data[user].name;
//       }
//     }
//     return "No admin found";
//   }
//  console.log(showAdminName(users)); 