const translations = {
            en: {
                // Navigation & General
                home: "Home",
                skills: "My Skills", 
                projects: "Projects",
                social: "Social Media",
                contact: "Contact Me",
                
                // Hero Section
                heroGreeting: "Hi, I'm Rico Iqbal Jeryan",
                heroDescription: "(born in 2009). I'm passionate about Software Engineering, Coding, AI, and Technology. I'm currently learning and improving my skills in C#.",
                heroSubtext: "Building the future through code",
                resume: "Resume",
                
                // Skills
                skillsTitle: "My Skills",
                skillsDescription: "Here are the technologies and skills I'm working with",
                
                // Projects
                projectsTitle: "My Projects",
                projectsDescription: "A collection of projects I've built while learning",
                inventoryTitle: "Inventory Software",
                inventoryDesc: "Desktop school project with CRUD operations, borrow/return system, and comprehensive reporting features.",
                cashFundTitle: "Cash Fund Management App", 
                cashFundDesc: "Desktop & Mobile app with admin/treasurer/manager roles, dashboard, income/expense tracking, and reports.",
                calculatorTitle: "Python Terminal Calculator",
                calculatorDesc: "Command-line calculator built with Python featuring basic and advanced mathematical operations.",
                todoTitle: "Python Terminal Todo List",
                todoDesc: "Terminal-based task management application with add, edit, delete, and completion tracking features.",
                
                // Social
                socialTitle: "Connect With Me",
                socialDescription: "Let's connect on social media",
                
                // Contact
                contactTitle: "Get In Touch",
                contactDescription: "Have a question or want to work together?",
                fullName: "Full Name",
                email: "Email",
                message: "Message / Greeting", 
                sendMessage: "Send Message"
            },
            
            id: {
                // Navigation & General
                home: "Beranda",
                skills: "Keahlian Saya",
                projects: "Proyek",
                social: "Media Sosial",
                contact: "Hubungi Saya",
                
                // Hero Section
                heroGreeting: "Hai, Saya Rico Iqbal Jeryan",
                heroDescription: "(lahir tahun 2009). Saya passionate tentang Software Engineering, Coding, AI, dan Teknologi. Saat ini saya sedang belajar dan meningkatkan skill dalam C#.",
                heroSubtext: "Membangun masa depan melalui kode",
                resume: "Resume",
                
                // Skills
                skillsTitle: "Keahlian Saya",
                skillsDescription: "Berikut adalah teknologi dan keahlian yang sedang saya pelajari",
                
                // Projects 
                projectsTitle: "Proyek Saya",
                projectsDescription: "Kumpulan proyek yang telah saya buat selama belajar",
                inventoryTitle: "Software Inventaris",
                inventoryDesc: "Proyek sekolah desktop dengan operasi CRUD, sistem pinjam/kembali, dan fitur laporan komprehensif.",
                cashFundTitle: "Aplikasi Manajemen Dana Kas",
                cashFundDesc: "Aplikasi Desktop & Mobile dengan role admin/bendahara/manajer, dashboard, tracking pemasukan/pengeluaran, dan laporan.",
                calculatorTitle: "Kalkulator Terminal Python", 
                calculatorDesc: "Kalkulator command-line yang dibangun dengan Python dengan operasi matematika dasar dan lanjutan.",
                todoTitle: "Todo List Terminal Python",
                todoDesc: "Aplikasi manajemen tugas berbasis terminal dengan fitur tambah, edit, hapus, dan tracking penyelesaian.",
                
                // Social
                socialTitle: "Terhubung Dengan Saya",
                socialDescription: "Mari terhubung di media sosial",
                
                // Contact
                contactTitle: "Hubungi Saya", 
                contactDescription: "Punya pertanyaan atau ingin bekerja sama?",
                fullName: "Nama Lengkap",
                email: "Email",
                message: "Pesan / Sapaan",
                sendMessage: "Kirim Pesan"
            }
        };

        // Current language and theme
        let currentLang = 'en';
        let currentTheme = 'light';

        // Initialize page
        document.addEventListener('DOMContentLoaded', function() {
            // Detect browser language
            const browserLang = navigator.language || navigator.userLanguage;
            currentLang = browserLang.startsWith('id') ? 'id' : 'en';
            
            // Load saved preferences
            const savedLang = localStorage.getItem('language');
            const savedTheme = localStorage.getItem('theme');
            
            if (savedLang) currentLang = savedLang;
            if (savedTheme) currentTheme = savedTheme;
            
            // Apply preferences
            applyLanguage();
            applyTheme();
            
            // Animate skill bars
            animateSkillBars();
            
            // Add loaded class for animations
            document.body.classList.add('loaded');
        });

        // Language functions
        function toggleLanguage() {
            currentLang = currentLang === 'en' ? 'id' : 'en';
            localStorage.setItem('language', currentLang);
            applyLanguage();
        }

        function applyLanguage() {
            const elements = document.querySelectorAll('[data-translate]');
            elements.forEach(element => {
                const key = element.getAttribute('data-translate');
                if (translations[currentLang][key]) {
                    element.textContent = translations[currentLang][key];
                }
            });
            
            // Update language toggle button
            document.querySelector('.lang-toggle').textContent = currentLang.toUpperCase();
        }

        // Theme functions
        function toggleTheme() {
            currentTheme = currentTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', currentTheme);
            applyTheme();
        }

        function applyTheme() {
            if (currentTheme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'dark');
                document.querySelector('.theme-toggle').textContent = '☀️';
            } else {
                document.documentElement.removeAttribute('data-theme');
                document.querySelector('.theme-toggle').textContent = '🌙';
            }
        }

        // Navigation functions
        function scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const elementPosition = element.offsetTop - navHeight;
                
                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            }
        }

        function toggleMobileMenu() {
            const mobileNav = document.getElementById('mobileNav');
            mobileNav.classList.toggle('active');
        }

        function closeMobileMenu() {
            const mobileNav = document.getElementById('mobileNav');
            mobileNav.classList.remove('active');
        }

        // Animate skill bars
        function animateSkillBars() {
            const skillBars = document.querySelectorAll('.progress-fill');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const bar = entry.target;
                        const width = bar.getAttribute('data-width');
                        setTimeout(() => {
                            bar.style.width = width + '%';
                        }, 200);
                        observer.unobserve(bar);
                    }
                });
            });

            skillBars.forEach(bar => observer.observe(bar));
        }

        // Contact form handler
        function handleSubmit(event) {
            event.preventDefault();
            
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!fullName || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Create WhatsApp message
            const whatsappMessage = `Hello Rico, my name is ${fullName}. ${message}`;
            const whatsappURL = `https://wa.me/6285187050859?text=${encodeURIComponent(whatsappMessage)}`;
            
            // Open WhatsApp
            window.open(whatsappURL, '_blank');
            
            // Show success message
            alert('Message sent! Opening WhatsApp...');
            
            // Reset form
            document.getElementById('fullName').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        }

        // Smooth scroll behavior for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    scrollToSection(target.id);
                }
            });
        });

        // Add scroll effects
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.background = currentTheme === 'dark' 
                    ? 'rgba(17, 24, 39, 0.95)' 
                    : 'rgba(255, 255, 255, 0.95)';
            } else {
                navbar.style.background = currentTheme === 'dark'
                    ? 'rgba(17, 24, 39, 0.9)'
                    : 'rgba(255, 255, 255, 0.9)';
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const mobileNav = document.getElementById('mobileNav');
            const menuBtn = document.querySelector('.mobile-menu-btn');
            
            if (!mobileNav.contains(event.target) && !menuBtn.contains(event.target)) {
                mobileNav.classList.remove('active');
            }
        });