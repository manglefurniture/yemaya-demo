const header=document.querySelector('[data-header]');const toggle=document.querySelector('[data-menu-toggle]');const nav=document.querySelector('[data-nav]');

const setMenu=(open)=>{if(!toggle||!nav)return;toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);document.body.style.overflow=open?'hidden':''};

toggle?.addEventListener('click',()=>setMenu(toggle.getAttribute('aria-expanded')!=='true'));
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
window.addEventListener('resize',()=>{if(window.innerWidth>=980)setMenu(false)},{passive:true});

const onScroll=()=>header?.classList.toggle('is-scrolled',window.scrollY>16);onScroll();window.addEventListener('scroll',onScroll,{passive:true});

const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduce&&'IntersectionObserver'in window){const io=new IntersectionObserver((entries)=>{for(const e of entries){if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}},{rootMargin:'0px 0px -8% 0px',threshold:.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('is-visible'))}

if(!reduce&&window.matchMedia('(pointer:fine)').matches){const items=[...document.querySelectorAll('.parallax-media img')];let ticking=false;const move=()=>{const vh=window.innerHeight;for(const img of items){const r=img.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>vh)continue;const p=(r.top+r.height/2-vh/2)/vh;img.style.transform=`translate3d(0,${p*-18}px,0) scale(1.035)`}ticking=false};window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(move);ticking=true}},{passive:true});move();}
