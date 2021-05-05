const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url =
  "https://s21kea-d06b.restdb.io/rest/silfen-products/608d539b22a6f4340013b6a9";
const urlrec =
  "https://s21kea-d06b.restdb.io/rest/silfen-products?type=bestseller&max=3";

const options = {
  headers: {
    "x-apikey": "6033bd605ad3610fb5bb64f6",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((data) => showBag(data));

fetch(urlrec, options)
  .then((res) => res.json())
  .then((data) => showRec(data));

function showBag(bag) {
  const template = document.querySelector("#product-template").content;
  const copy = template.cloneNode(true);

  copy.querySelector(".bag-title").textContent = bag.name;
  copy.querySelector(".bag-price-title").textContent = `${bag.price} DKK`;
  copy.querySelector(".main-img").src = bag.imgmodel;

  const parent = document.querySelector(".product-info-wrapper");
  parent.appendChild(copy);
}

function showRec(data) {
  data.forEach(recList);
}
