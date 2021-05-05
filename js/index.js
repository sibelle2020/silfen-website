const urlParams = new URLSearchParams(window.location.search);
const url =
  "https://s21kea-d06b.restdb.io/rest/silfen-products?sort=name" +
  `&q={"type":"bestsellers"}` +
  "&max=4";

const options = {
  headers: {
    "x-apikey": "6033bd605ad3610fb5bb64f6",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((data) => showBags(data));

function showBags(data) {
  data.forEach(showBest);
}

function showBest(bag) {
  const template = document.querySelector("#best-template").content;
  const clone = template.cloneNode(true);

  clone.querySelector("img").src = bag.imgmodel;
  clone.querySelector("h2").textContent = bag.name;
  clone.querySelector("p").textContent = `${bag.price} DKK`;
  clone.querySelector(".link-to-best").href = `product.html?id=${bag._id}`;

  const parent = document.querySelector(".bags-wrapper-best");
  parent.appendChild(clone);
}
