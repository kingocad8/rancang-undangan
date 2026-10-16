// Rancang Undangan — website company profile
// 1. Menu mobile, 2. FAQ accordion, 3. Animasi reveal saat scroll

// 1. Toggle menu navigasi (mobile)
(function () {
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (!toggle || !links) return;
  toggle.addEventListener("click", function () {
    links.classList.toggle("buka");
  });
  links.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      links.classList.remove("buka");
    });
  });
})();

// 2. FAQ accordion — satu terbuka dalam satu waktu
(function () {
  var items = document.querySelectorAll(".faq-item");
  items.forEach(function (item) {
    var q = item.querySelector(".faq-q");
    var a = item.querySelector(".faq-a");
    q.addEventListener("click", function () {
      var sedangBuka = item.classList.contains("buka");
      items.forEach(function (lain) {
        lain.classList.remove("buka");
        lain.querySelector(".faq-a").style.maxHeight = null;
      });
      if (!sedangBuka) {
        item.classList.add("buka");
        a.style.maxHeight = a.scrollHeight + "px";
      }
    });
  });
})();

// 3. Reveal halus saat kartu/section masuk layar
(function () {
  var target = document.querySelectorAll(".card, .step, .sec-title, .hero-copy, .hero-img");
  target.forEach(function (el) { el.classList.add("reveal"); });
  if (!("IntersectionObserver" in window)) {
    target.forEach(function (el) { el.classList.add("tampil"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("tampil");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  target.forEach(function (el) { io.observe(el); });
})();
