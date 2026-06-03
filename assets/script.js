
const root=document.documentElement;
const saved=localStorage.getItem('theme'); if(saved) document.body.dataset.theme=saved;
document.getElementById('themeToggle')?.addEventListener('click',()=>{const next=document.body.dataset.theme==='light'?'dark':'light';document.body.dataset.theme=next;localStorage.setItem('theme',next);});
const progress=document.getElementById('progress');
window.addEventListener('scroll',()=>{const h=document.documentElement;const p=(h.scrollTop)/(h.scrollHeight-h.clientHeight)*100;progress.style.width=p+'%';});
const links=[...document.querySelectorAll('.toc a')];
const sections=links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id));}})},{rootMargin:'-20% 0px -70% 0px'});
sections.forEach(s=>obs.observe(s));
const search=document.getElementById('searchBox');
const content=document.getElementById('reportContent');
search?.addEventListener('input',()=>{const q=search.value.trim().toLowerCase();const blocks=[...content.querySelectorAll('p, li, h2, h3, h4, h5, .report-table, .report-figure, pre')];blocks.forEach(b=>{b.classList.toggle('hidden-by-search', q && !b.innerText.toLowerCase().includes(q));});});
