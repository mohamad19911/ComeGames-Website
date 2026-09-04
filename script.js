const tutorials = [
  {title:"Build Your First Game with Unity", category:"Game Development", icon:"🎮", duration:"18:42", level:"Beginner", desc:"Create a playable game from scratch and understand the core Unity workflow.", video:""},
  {title:"Modern JavaScript: From Zero to Project", category:"Programming", icon:"⌘", duration:"24:10", level:"Beginner", desc:"Learn the JavaScript fundamentals you actually need to build real things.", video:""},
  {title:"Build an AI Tool with an API", category:"AI", icon:"✦", duration:"21:35", level:"Intermediate", desc:"Connect an AI API to a practical project and turn an idea into a working tool.", video:""},
  {title:"Create a Stunning Landing Page", category:"Web Development", icon:"◈", duration:"16:28", level:"Beginner", desc:"Design and code a modern responsive landing page with HTML and CSS.", video:""},
  {title:"C# Game Systems Explained", category:"Game Development", icon:"⚙", duration:"29:04", level:"Intermediate", desc:"Understand reusable systems, components and clean game architecture.", video:""},
  {title:"CSS Animations That Feel Premium", category:"Web Development", icon:"✺", duration:"13:16", level:"Beginner", desc:"Add polished micro-interactions and motion without heavy libraries.", video:""},
  {title:"Python Automation for Creators", category:"Programming", icon:"🐍", duration:"20:51", level:"Beginner", desc:"Automate repetitive tasks with simple Python scripts.", video:""},
  {title:"AI Workflow for Game Creators", category:"AI", icon:"⚡", duration:"17:40", level:"Intermediate", desc:"Use AI as a creative multiplier across planning, coding and production.", video:""},
  {title:"Unreal Engine: First Steps", category:"Game Development", icon:"▲", duration:"22:18", level:"Beginner", desc:"Navigate Unreal Engine and build your first interactive scene.", video:""},
  {title:"Git & GitHub for Beginners", category:"Programming", icon:"⌘", duration:"14:07", level:"Beginner", desc:"Save, share and manage your projects like a professional.", video:""},
  {title:"Responsive Design Masterclass", category:"Web Development", icon:"▣", duration:"27:22", level:"Intermediate", desc:"Build layouts that look great on phones, tablets and desktop.", video:""},
  {title:"Prompt Engineering for Builders", category:"AI", icon:"✦", duration:"19:03", level:"Beginner", desc:"Write better prompts for coding, research, content and prototyping.", video:""}
];

const grid=document.querySelector("#courseGrid"), latest=document.querySelector("#latestList");
const count=document.querySelector("#courseCount");
count.textContent = tutorials.length + "+";

function card(t,i){
  return `<article class="course" data-category="${t.category}" onclick="selectTutorial(${i})">
    <div class="thumb"><div class="thumb-grid"></div><span class="tag">${t.category.toUpperCase()}</span><span class="duration">${t.duration}</span><div class="thumb-icon">${t.icon}</div></div>
    <div class="course-body"><h3>${t.title}</h3><p>${t.desc}</p><div class="course-meta"><span>${t.level}</span><b>Watch →</b></div></div>
  </article>`;
}
function render(filter="All"){
  grid.innerHTML=tutorials.map((t,i)=>filter==="All"||t.category===filter?card(t,i):"").join("");
}
function renderLatest(){
  latest.innerHTML=tutorials.slice(0,5).map((t,i)=>`<div class="latest-item"><div class="latest-thumb">${t.icon}</div><div><h3>${t.title}</h3><p>${t.category} · ${t.duration} · ${t.level}</p></div><button onclick="selectTutorial(${i})">WATCH ▶</button></div>`).join("");
}
function selectTutorial(i){
  const t=tutorials[i], player=document.querySelector("#player");
  document.querySelector("#playerTitle").textContent=t.title;
  document.querySelector("#playerMeta").textContent=`${t.category} · ${t.duration} · ${t.level}`;
  if(t.video){
    const safe=t.video;
    if(/youtube\.com|youtu\.be/.test(safe)){
      const id=safe.includes("youtu.be/")?safe.split("youtu.be/")[1].split(/[?&]/)[0]:(safe.match(/[?&]v=([^&]+)/)||[])[1];
      if(id) player.innerHTML=`<iframe width="100%" height="100%" style="min-height:330px;border:0" src="https://www.youtube.com/embed/${id}" title="${t.title}" allowfullscreen></iframe>`;
    } else player.innerHTML=`<video controls style="width:100%;height:100%;min-height:330px" src="${safe}"></video>`;
  }
  document.querySelector("#watch").scrollIntoView({behavior:"smooth",block:"center"});
}
document.querySelectorAll("#filters button").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll("#filters button").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active"); render(btn.dataset.filter);
}));
document.querySelectorAll(".category").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelector('#courses').scrollIntoView({behavior:"smooth"});
  setTimeout(()=>document.querySelector(`#filters button[data-filter="${btn.dataset.jump}"]`).click(),350);
}));
document.querySelector(".menu-btn").addEventListener("click",()=>document.querySelector(".nav-links").classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>document.querySelector(".nav-links").classList.remove("open")));
render(); renderLatest();
