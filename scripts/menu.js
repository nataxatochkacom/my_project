document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const body = document.body;
    
    // Переключаем меню
    menuToggle.addEventListener('click', function() {
        const isActive = mobileMenu.classList.contains('active');
        
        // Переключаем состояния
        mobileMenu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        menuToggle.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', !isActive);
        
        // Блокируем прокрутку и клики на основном контенте
        body.classList.toggle('menu-open', !isActive);
    });
    
    // Закрываем меню при клике на оверлей
    menuOverlay.addEventListener('click', function() {
        closeMenu();
    });
    
    // Закрываем меню при клике на ссылку
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });
    
    // Закрываем меню при нажатии Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Функция закрытия меню
    function closeMenu() {
        mobileMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        body.classList.remove('menu-open');
    }
    
    // Кнопка "Наверх" (если у вас есть)
    const scrollTopBtn = document.getElementById('scrollTop');
    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});