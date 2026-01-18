// Lightweight active-nav highlighting
(function(){
  const here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav]").forEach(a=>{
    const href = a.getAttribute("href");
    if (href === here) a.classList.add("active");
  });

  document.querySelectorAll("[data-accordion]").forEach(group=>{
    group.querySelectorAll("[data-accordion-toggle]").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        const item = btn.closest(".accordion-item");
        item.classList.toggle("open");
      });
    });
  });
})();
