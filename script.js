const btn = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");

btn.addEventListener("mouseenter", function (e) {
  e.target.style.display = "none";
  btn2.style.display = "inline-block";
});

btn2.addEventListener("mouseenter", function (e) {
  e.target.style.display = "none";
  btn.style.display = "inline-block";
});
