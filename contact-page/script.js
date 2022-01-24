///////////////////mobile nav///////////////////////
const btnNavEl = document.querySelector(".btn_mobile_nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav_open");
});
////////////////////////contact form//////////////////////////////

////////////////////////variables of contact form//////////////////////////////
let FirstName = document.querySelector(".first_Name");
let LastName = document.querySelector(".last_Name");
let topic = document.querySelector(".topic");
let Email = document.querySelector(".Email");
let message = document.querySelector(".message");
let Submit = document.querySelector(".Submit_button");

////////////////////////variables of popup form//////////////////////////////
let popUpForm = document.querySelector(".pop_up_form");
let FirstNamePop = document.querySelector(".first_Name_pop");
let LastNamePop = document.querySelector(".last_Name_pop");
let topicPop = document.querySelector(".topic_pop");
let EmailPop = document.querySelector(".Email_pop");
let messagePop = document.querySelector(".message_pop");
let Done = document.querySelector(".Done_button");

////////////////////////////when user click on Submit/////////////////////////////////////////
Submit.addEventListener("click", function (a) {
  a.preventDefault();
  popUpForm.style.opacity = "1";
  popUpForm.style.pointerEvents = "auto";
  popUpForm.style.visibility = "visible";
  popUpForm.style.transform = "translate(-50%, -50%)";

  FirstNamePop.textContent = FirstName.value;
  LastNamePop.textContent = LastName.value;
  topicPop.textContent = topic.value;
  EmailPop.textContent = Email.value;
  messagePop.textContent = message.value;
  //////////show pop Up/////////
});
////////////////////////////when user click on Done/////////////////////////////////////////
Done.addEventListener("click", function (a) {
  a.preventDefault();
  //////////show pop Up/////////
  popUpForm.style.opacity = "0";
  popUpForm.style.pointerEvents = "none";
  popUpForm.style.visibility = "hidden";
  popUpForm.style.transform = "translate(300%, -50%)";
});
