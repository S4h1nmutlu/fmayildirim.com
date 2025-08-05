
//ürün 1
const detay1 = document.querySelector("#detay");
const closeButon = document.querySelector("#kapat");
const detayBtn = document.querySelector("#detayBtn");

closeButon.addEventListener("click", closeDetail);

function closeDetail(e) {
  detay1.setAttribute("style", "display:none");
  e.preventDefault();
}

detayBtn.addEventListener("click", openDetail);

function openDetail(e) {
  detay1.setAttribute("style", "display:block !important");
  e.preventDefault();  
  detay1.scrollIntoView({ behavior: "smooth" });
}

//ürün 2

const detay2 = document.querySelector("#detay2");
const closeButon2 = document.querySelector("#kapat2");
const detayBtn2 = document.querySelector("#detayBtn2");

closeButon2.addEventListener("click", closeDetail2);

function closeDetail2(e) {
  detay2.setAttribute("style", "display:none");
  e.preventDefault();
  
}

detayBtn2.addEventListener("click", openDetail2);

function openDetail2(e) {
  detay2.setAttribute("style", "display:block !important");
  e.preventDefault();
    detay2.scrollIntoView({ behavior: "smooth" });
}

//ürün 3

const detay3 = document.querySelector("#detay3");
const closeButon3 = document.querySelector("#kapat3");
const detayBtn3 = document.querySelector("#detayBtn3");

closeButon3.addEventListener("click", closeDetail3);

function closeDetail3(e) {
  detay3.setAttribute("style", "display:none");
  e.preventDefault();
}

detayBtn3.addEventListener("click", openDetail3);

function openDetail3(e) {
  detay3.setAttribute("style", "display:block !important");
  e.preventDefault();
    detay3.scrollIntoView({ behavior: "smooth" });
}

//ürün 4

const detay4 = document.querySelector("#detay4");
const closeButon4 = document.querySelector("#kapat4");
const detayBtn4 = document.querySelector("#detayBtn4");

closeButon4.addEventListener("click", closeDetail4);

function closeDetail4(e) {
  detay4.setAttribute("style", "display:none");
  e.preventDefault();
}

detayBtn4.addEventListener("click", openDetail4);

function openDetail4(e) {
  detay4.setAttribute("style", "display:block !important");
  e.preventDefault();
    detay4.scrollIntoView({ behavior: "smooth" });
}

//ürün 5

const detay5 = document.querySelector("#detay5");
const closeButon5 = document.querySelector("#kapat5");
const detayBtn5 = document.querySelector("#detayBtn5");

closeButon5.addEventListener("click", closeDetail5);

function closeDetail5(e) {
  detay5.setAttribute("style", "display:none");
  e.preventDefault();
}

detayBtn5.addEventListener("click", openDetail5);

function openDetail5(e) {
  detay5.setAttribute("style", "display:block !important");
  e.preventDefault();
  detay5.scrollIntoView({ behavior: "smooth" });
}



