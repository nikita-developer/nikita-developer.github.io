function openModal(){document.getElementById('modal').classList.add('open')}
function closeModal(){document.getElementById('modal').classList.remove('open')}
function toggleMenu(){document.querySelector('.nav').classList.toggle('open')}
window.addEventListener('click',e=>{if(e.target.id==='modal') closeModal()})
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('fade-in')})},{threshold:.15});
document.querySelectorAll('.card,.promo,.app-block').forEach(el=>observer.observe(el));
