
// create elements <table> and a <tbody>
var tbody = document.getElementById('catalog');

completeProductString = ""


for (i=0; i < flowers.length; i++) {
   completeProductString += flowers[i].createProductString()
}

//console.log(completeProductString)
tbody.innerHTML = completeProductString

//tbody[0].innerHTML += "<tr><td>" + null + "</td> <td>" + "tulip" + "<\td><td>" + "" + "<\td><td>" + this.productImage + "<\td><td>" + this.productPrice + "<\td><\tr>"

function filterResults(event) {
  const value = document.getElementById("search").value;

  completeProductString = ""

  for (i=0; i < flowers.length; i++) {
    if (flowers[i].productName.toLowerCase().includes(value.toLowerCase())) {
      completeProductString += flowers[i].createProductString()
      

    }
  }

  tbody[0].innerHTML = completeProductString

}