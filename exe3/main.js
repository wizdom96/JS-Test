let presmetaj = document.getElementById("presmetaj");
presmetaj.addEventListener("click", presmetajbakzis);

function presmetajbakzis() {
  var vkupnasuma = document.getElementById("vkupnasuma").value;
  var procent = document.getElementById("procent").value;
  var vraboteni = document.getElementById("vraboteni").value;

  if (vkupnasuma === "" || vraboteni == 0) {
    alert("Ve molam vnesete vrednosti!");
  } else {
    let vkupno = (vkupnasuma * procent) / vraboteni;
    vkupno = Math.round(total * 100) / 100;
    vkupno = total.toFixed(2);

    document.getElementById("presmetano").innerHTML = `   
        Vkupno baksiz po osoba: <br><span id='total'>${vkupno}</span> denari.
    `;
  }
}
