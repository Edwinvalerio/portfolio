let contact = document.querySelector("#contact_link");
let footer = document.querySelector("#footer");
contact.addEventListener("click", function () {
  footer.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
});
