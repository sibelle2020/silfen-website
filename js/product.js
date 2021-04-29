const searchParams = new URLSearchParams(window.location.search);
const productId = searchParams.get("product");

fetch(
  "https://s21kea-d06b.restdb.io/rest/silfen-products" +
    productId +
    "?fetchchildren=true",
  {
    method: "GET",
    headers: {
      "x-apikey": "6033bd605ad3610fb5bb64f6",
    },
  }
)
  .then((res) => res.json())
  .then((response) => {
    showProduct(response);
  })
  .catch((err) => {
    console.error(err);
  });

function showProduct(data) {
  console.log(data);
}
