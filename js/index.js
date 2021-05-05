const urlParams = new URLSearchParams(window.location.search);
let urlall = "https://s21kea-d06b.restdb.io/rest/silfen-products?sort=name";

const options = {
  method: "GET",
  headers: {
    "x-apikey": "6033bd605ad3610fb5bb64f6",
  },
};

fetch(urlall, options)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);
    allBags(data);
  });

function allBags(data) {
  console.log(data);
  data.forEach(showBags);
}
