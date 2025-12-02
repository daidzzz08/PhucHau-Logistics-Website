/**
 * PHÚC HẬU LOGISTICS - MAIN SCRIPT
 */

// 1. Tailwind Config (Global Injection)
// Đoạn này giúp Tailwind CDN hiểu các màu custom của chúng ta
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Be Vietnam Pro', 'sans-serif'],
            },
            colors: {
                brand: {
                    dark: '#0f2c4a',    // Deep Ocean Dark
                    main: '#164e82',    // Ocean Blue
                    light: '#f0f9ff',   // Alice Blue
                    accent: '#f59e0b',  // Amber 500
                    accentHover: '#d97706'
                }
            },
            boxShadow: {
                'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    
    // 2. Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            // Toggle Icon
            const icon = menuBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            }
        });
    }

    // 3. Active Link Highlight Logic
    // Tự động thêm class 'active' vào menu dựa trên URL hiện tại
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-item');
    const mobileLinks = document.querySelectorAll('#mobile-menu a');

    // Hàm check active (hoạt động tương đối với file path)
    const setActive = (links) => {
        links.forEach(link => {
            const href = link.getAttribute('href');
            // Kiểm tra xem href có nằm trong đường dẫn hiện tại không
            // Lưu ý: Cần xử lý logic cẩn thận vì 'services.html' và 'services/same-day.html'
            if (href && href !== '#' && currentPath.includes(href.replace('..', '').replace('./', ''))) {
                link.classList.add('active', 'text-brand-main');
            }
        });
    };

    setActive(navLinks);
    setActive(mobileLinks);

    // 4. Sticky Header Effect (Optional)
    const header = document.getElementById('main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('shadow-md');
            } else {
                header.classList.remove('shadow-md');
            }
        });
    }
});