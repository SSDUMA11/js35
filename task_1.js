fetch("http://127.0.0.1:5501/home-work-data.json")
  .then(response => response.json())
  .then(data => {
    console.log(showAdminName(data));
  });

function showAdminName(data) {
    for (let user in data) {
      if (data[user].isAdmin) {
        return data[user].name;
      }
    }
  }