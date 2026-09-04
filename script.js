const menuBtn=document.getElementById("menuBtn"),nav=document.getElementById("nav");
menuBtn?.addEventListener("click",()=>{nav.classList.toggle("open");});
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add("visible");});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

window.addEventListener("scroll",()=>{
  const header=document.querySelector(".site-header");
  header.style.background=window.scrollY>30?"rgba(7,8,9,.92)":"rgba(7,8,9,.75)";
});
