function resultat() {
  var firstnumber = parseFloat(document.getElementById("premier_nombre").value);
  var secondnumber = parseFloat (document.getElementById("deuxieme_nombre").value);
  var result = Math.trunc(firstnumber) * secondnumber;
    alert(result);
}
