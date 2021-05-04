const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://s21kea-d06b.restdb.io/rest/silfen-products" + id;

const options = {
  headers: {
    "x-apikey": "6033bd605ad3610fb5bb64f6",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((data) => showBag(data));
