const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url =
  "https://s21kea-d06b.restdb.io/rest/silfen-products/" +
  id +
  "?fetchchildren=true";
const urlrec =
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
  copy.querySelector(".bag-description").textContent = bag.description;

  copy.querySelector(".material-info").textContent = bag.material;
  copy.querySelector(".dimensions-info").textContent = bag.dimensions;
  copy.querySelector(".strap-info").textContent = `Max. ${bag.straplength}cm`;

  const parent = document.querySelector(".product-info-wrapper");
  parent.appendChild(copy);

  const template2 = document.querySelector("#color-squares-template").content;

  bag.colors.forEach((color) => {
    const baby = template2.cloneNode(true);

    baby.querySelector(".color-img").src = color.imgsquare;
    baby.querySelector(".color-img").alt = color.name;

    document.querySelector(".color-squares").appendChild(baby);
  });

  const template3 = document.querySelector("#extra-img-template").content;

  bag.images.forEach((images) => {
    const extra = template3.cloneNode(true);

    extra.querySelector(".extra-img").src = images.image;

    document.querySelector(".extra-img-container").appendChild(extra);
  });
}

function showRec(data) {
  data.forEach(recList);
}

function recList(rec) {
  const rectemplate = document.querySelector("#recommended-template").content;
  const clone = rectemplate.cloneNode(true);

  clone.querySelector("img").src = rec.imgmodel;
  clone.querySelector("h2").textContent = rec.name;
  clone.querySelector("p").textContent = `${rec.price} DKK`;
  clone.querySelector(".link-to-recommend").href = `product.html?id=${rec._id}`;

  const parent = document.querySelector(".bags-wrapper");
  parent.appendChild(clone);
}
