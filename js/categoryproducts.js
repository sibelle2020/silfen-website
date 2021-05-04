const urlParams = new URLSearchParams(window.location.search);
let urlall = "https://s21kea-d06b.restdb.io/rest/silfen-products";
const type = urlParams.get("type");

if (type) {
  console.log(genre);
  urlall = urlall + `&q={"type":{"$elemMatch":"${type}"}}`;
}

function getdata() {
  fetch("https://s21kea-d06b.restdb.io/rest/silfen-products", {
    method: "GET",
    headers: {
      "x-apikey": "6033bd605ad3610fb5bb64f6",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      showProducts(response);
    })
    .catch((err) => {
      console.error(err);
    });
}
getdata();

function showProducts(data) {
  console.log(data);
  data.forEach(showBags);
}
