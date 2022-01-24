"use strict";
// boiteVitessHeader.style.opacity = "0";
// boiteVitessHeader.style.visibility = "hidden";
// boiteVitessHeader.style.pointerEvents = "none";
////////////////variables//////////////////////
////////buttons//////////
let nextOne = document.querySelector(".nextOne");
let nextTwo = document.querySelector(".nextTwo");
let nextFour = document.querySelector(".nextFour");
let SearchAgain = document.querySelector(".Search_again");
/////////////////////////
////////elements/////////
/////////
let moto = document.querySelector("#moto");
let compact = document.querySelector("#compact");
let citadin = document.querySelector("#citadin");
let berline = document.querySelector("#berline");
let Utilitaire = document.querySelector("#Utilitaire");
let engin = document.querySelector("#engin");
let camion = document.querySelector("#camion");
//// inputs of engin types////
let electric = document.querySelector("#electric");
let hybride = document.querySelector("#hybride");
let essence = document.querySelector("#essence");
let diesel = document.querySelector("#diesel");
/////////
let electricForm = document.querySelector(".electric_form");
let hybrideForm = document.querySelector(".hybride_form");
let essenceForm = document.querySelector(".essence_form");
let dieselForm = document.querySelector(".diesel_form");
/////////
let boiteVitessHeader = document.querySelector(".boite_a_vitess_header");
let boiteVitessParagraph = document.querySelector(".boite_a_vitess_paragraph");
let formPower = document.querySelector(".form_power");
let daysInput = document.querySelector(".days_input");
let daysInputValue;
let wordPrice = document.querySelector(".price");
/////////////////////////
let price = 0;
////////////////////////////////////////////////
nextOne.addEventListener("click", function () {
  if (moto.checked) {
    formPower.style.width = "28rem";
    electricForm.style.display = "flex";
    hybrideForm.style.display = "none";
    essenceForm.style.display = "none";
    dieselForm.style.display = "flex";
    ///////////////
    boiteVitessHeader.style.display = "none";
    boiteVitessParagraph.style.display = "none";
    ///////////////
    boiteVitessParagraph.textContent = "Manuelle";
    ///////////////
    price = 10;
  }
  //////////////////////
  else if (citadin.checked) {
    formPower.style.width = "50rem";
    electricForm.style.display = "flex";
    hybrideForm.style.display = "flex";
    essenceForm.style.display = "flex";
    dieselForm.style.display = "flex";
    ///////////////
    boiteVitessHeader.style.display = "block";
    boiteVitessParagraph.style.display = "block";
    ///////////////
    boiteVitessParagraph.textContent = "Manuelle";
    ///////////////
    price = 12;
  }
  //////////////////////
  else if (compact.checked) {
    formPower.style.width = "50rem";
    electricForm.style.display = "flex";
    hybrideForm.style.display = "flex";
    essenceForm.style.display = "flex";
    dieselForm.style.display = "flex";
    ///////////////
    boiteVitessHeader.style.display = "block";
    boiteVitessParagraph.style.display = "block";
    ///////////////
    boiteVitessParagraph.textContent = "Manuelle";
    ///////////////
    price = 14;
  }
  //////////////////////
  else if (berline.checked) {
    formPower.style.width = "40rem";
    electricForm.style.display = "none";
    hybrideForm.style.display = "flex";
    essenceForm.style.display = "flex";
    dieselForm.style.display = "flex";
    ///////////////
    boiteVitessHeader.style.display = "block";
    boiteVitessParagraph.style.display = "block";
    ///////////////
    boiteVitessParagraph.textContent = "Automatique";
    ///////////////
    price = 20;
  }
  //////////////////////
  else if (Utilitaire.checked) {
    // dieselForm.style.margin = "0 auto";
    formPower.style.width = "10rem";
    electricForm.style.display = "none";
    hybrideForm.style.display = "none";
    essenceForm.style.display = "none";
    dieselForm.style.display = "flex";
    dieselForm.style.alignItems = "centre";
    ///////////////
    boiteVitessHeader.style.display = "block";
    boiteVitessParagraph.style.display = "block";
    ///////////////
    boiteVitessParagraph.textContent = "Manuelle";
    ///////////////
    price = 16;
  }
  //////////////////////
  else if (engin.checked) {
    formPower.style.width = "28rem";
    electricForm.style.display = "none";
    hybrideForm.style.display = "none";
    essenceForm.style.display = "flex";
    dieselForm.style.display = "flex";
    ///////////////
    boiteVitessHeader.style.display = "block";
    boiteVitessParagraph.style.display = "block";
    ///////////////
    boiteVitessParagraph.textContent = "Manuelle";
    ///////////////
    price = 900;
  }
  //////////////////////
  else if (camion.checked) {
    formPower.style.width = "10rem";
    electricForm.style.display = "none";
    hybrideForm.style.display = "none";
    essenceForm.style.display = "none";
    dieselForm.style.display = "flex";
    ///////////////
    boiteVitessHeader.style.display = "block";
    boiteVitessParagraph.style.display = "block";
    ///////////////
    boiteVitessParagraph.textContent = "Automatique";
    ///////////////
    price = 250;
  }
});
nextTwo.addEventListener("click", function () {
  if (electric.checked) {
    price = price + (price / 100) * 5;
  }
  /////////////
  else if (hybride.checked) {
    price = price + (price / 100) * 9;
  }
  //////////////
  else if (essence.checked) {
    price = price + (price / 100) * 14;
  }
  /////////////
  else if (diesel.checked) {
    price = price + (price / 100) * 21;
  }
});
nextFour.addEventListener(
  "click",
  function () {
    daysInputValue = daysInput.value;
    price = price * daysInputValue;
    wordPrice.textContent = `${Math.trunc(price)}$`;
  },
  { once: true }
);
