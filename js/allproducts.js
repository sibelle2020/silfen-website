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

function showProducts(bags) {
  console.log(bags);
  //grab the template
  //const template = document.querySelector("").content;

  posts.forEach((bags) => {
    console.log(bags);

    //clone
    //const copy = template.cloneNode(true);

    //adjust stuff

    //if (copy.sale) {
    //append
    //}
  });
}
