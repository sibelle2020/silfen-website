function getdata() {
  fetch("https://s21kea-d06b.restdb.io/rest/silfen-products", {
    method: "GET",
    headers: {
      "x-apikey": "6033bd605ad3610fb5bb64f6",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      showBestsellers(response);
    })
    .catch((err) => {
      console.error(err);
    });
}
getdata();
