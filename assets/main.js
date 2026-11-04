(function(){
var d=document,h=d.documentElement,b=d.body;
var hb=d.querySelector('.hamburger'),dr=d.getElementById('mob-drawer');
function setNav(o){b.classList.toggle('nav-open',o);h.classList.toggle('no-scroll',o);if(hb)hb.setAttribute('aria-expanded',o?'true':'false');if(dr)dr.setAttribute('aria-hidden',o?'false':'true');if(o&&dr){var f=dr.querySelector('a,button');if(f)f.focus();}else if(hb&&!o){}}
if(hb)hb.addEventListener('click',function(){setNav(true)});
d.querySelectorAll('[data-close]').forEach(function(e){e.addEventListener('click',function(){setNav(false);if(hb)hb.focus()})});
if(dr)dr.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){setNav(false)})});
d.addEventListener('keydown',function(e){if(e.key==='Escape'&&b.classList.contains('nav-open')){setNav(false);if(hb)hb.focus()}});
var mq=window.matchMedia('(min-width:769px)');var fn=function(){if(mq.matches)setNav(false)};if(mq.addEventListener)mq.addEventListener('change',fn);
d.querySelectorAll('.acc-head').forEach(function(btn){btn.addEventListener('click',function(){
var it=btn.parentNode.parentNode,body=it.querySelector('.acc-body'),open=it.classList.toggle('open');
btn.setAttribute('aria-expanded',open?'true':'false');btn.querySelector('.plus').textContent=open?'−':'+';
body.style.maxHeight=open?body.scrollHeight+'px':'0px';});});
d.querySelectorAll('.acc-item.open .acc-body').forEach(function(x){x.style.maxHeight=x.scrollHeight+'px'});
window.addEventListener('resize',function(){d.querySelectorAll('.acc-item.open .acc-body').forEach(function(x){x.style.maxHeight=x.scrollHeight+'px'})});
var fab=d.querySelector('.fab-call'),ft=d.querySelector('.site-footer');
if(fab&&ft&&'IntersectionObserver' in window){new IntersectionObserver(function(es){es.forEach(function(e){fab.classList.toggle('hide',e.isIntersecting)})},{threshold:0.05}).observe(ft);}
})();