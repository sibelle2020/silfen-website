const urlParams = new URLSearchParams(window.location.search);
let urlall =
  "https://s21kea-d06b.restdb.io/rest/silfen-products?sort=name" +
  "&fetchchildren=true";
const type = urlParams.get("type");

if (type) {
  console.log(type);
  urlall = urlall + `&q={"type":{"$elemMatch":"${type}"}}`;
}

const options = {
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

function showBags(bag) {
  const template = document.querySelector("#product-list-template").content;
  const copy = template.cloneNode(true);

  copy.querySelector(".link-to-product").href = `product.html?id=${bag._id}`;
  copy.querySelector("img").src = bag.imgmodel;
  copy.querySelector(".bag-name").textContent = bag.name;
  copy.querySelector(".bag-price").textContent = `${bag.price} DKK`;

  if (bag.sale) {
    copy.querySelector(".sale").classList.remove("hidden");
    copy.querySelector(".sale-price").textContent = `${
      bag.price - (bag.sale / 100) * bag.price
    } DKK`;
    copy.querySelector(".bag-price").classList.add("line-through");
  }

  if (type) {
    document.querySelector("h1").textContent = type;
  }

  const parent = document.querySelector(".template-container");
  parent.appendChild(copy);
}

function myFunction() {
  document.querySelector("#catDropdown").classList.toggle("show");

  window.onclick = function (event) {
    if (!event.target.matches(".filter-dropbtn-category")) {
      let dropdowns = document.querySelector(".dropdown-content-category");
      let i;
      for (i = 0; i < dropdowns.clientHeight; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
}

function myFunction2() {
  document.querySelector("#colorDropdown").classList.toggle("show");

  window.onclick = function (event) {
    if (!event.target.matches(".filter-dropbtn-colors")) {
      let dropdowns = document.querySelector(".dropdown-content-colors");
      let i;
      for (i = 0; i < dropdowns.clientHeight; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
}

function myFunction3() {
  document.querySelector("#priceDropdown").classList.toggle("show");

  window.onclick = function (event) {
    if (!event.target.matches(".filter-dropbtn-price")) {
      let dropdowns = document.querySelector(".dropdown-content-price");
      let i;
      for (i = 0; i < dropdowns.clientHeight; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
}
