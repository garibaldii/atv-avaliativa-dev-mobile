var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  console.log("aqui");
  var n;
  let x = new XMLHttpRequest();
  x.open("GET", "http://localhost:8080/");
  x.onreadystatechange = function () {
    if (x.readyState == 4) {
      if (x.status == 200) {
        n = JSON.parse(x.responseText);
        console.log(n);
        var lista = document.getElementById("lista");
        k = Object.keys(n);
        for (var m in k)
          lista.innerHTML += "<li>" + k[m] + " : " + n[k[m]] + "<li>";
      } else {
        lista.innerHTML += "Erro";
      }
    }
  };
  x.send();
});
