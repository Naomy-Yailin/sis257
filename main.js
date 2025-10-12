// Año dinámico y accesibilidad del menú
document.getElementById('y').textContent = new Date().getFullYear();

const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
btn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', String(open));
});

// Validación mínima del formulario 
const form = document.querySelector('.form');
const msg = document.querySelector('.form__msg');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  if(!data.nombre || !data.email){ msg.textContent = 'Completa nombre y correo.'; return; }
  msg.textContent = '¡Solicitud enviada! Te responderemos por correo.';
  form.reset();
});
