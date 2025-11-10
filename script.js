document.addEventListener('DOMContentLoaded', function () {
  // Мобильное меню
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Переключение секций
  const navLinks = document.querySelectorAll('.nav-menu a[data-target]');
  const sections = document.querySelectorAll('.section');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-target');

      // Скрыть все секции
      sections.forEach(section => {
        section.classList.remove('active');
      });

      // Показать нужную
      document.getElementById(targetId).classList.add('active');

      // Закрыть мобильное меню
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Отправка формы
  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Сообщение отправлено!');
    form.reset();
  });
});
