document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = [
        {
            id: 1,
            title: "Instagram Reel",
            category: "short-form",
            videoId: "5O0YDHiosD0",
            thumbnail: "https://i.ytimg.com/vi/5O0YDHiosD0/hqdefault.jpg"
        },
        {
            id: 2,
            title: "YouTube Vlog",
            category: "long-form",
            videoId: "dQw4w9WgXcQ",
            thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
        },
        {
            id: 3,
            title: "Valorant Montage",
            category: "gaming",
            videoId: "Fp8msa5uYsc",
            thumbnail: "https://i.ytimg.com/vi/Fp8msa5uYsc/hqdefault.jpg"
        },
        {
            id: 4,
            title: "Messi Highlights",
            category: "football",
            videoId: "OUK7b4c1k0s",
            thumbnail: "https://i.ytimg.com/vi/OUK7b4c1k0s/hqdefault.jpg"
        },
        {
            id: 5,
            title: "Product Advertisement",
            category: "ecommerce",
            videoId: "9bZkp7q19f0",
            thumbnail: "https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg"
        },
        {
            id: 6,
            title: "Wildlife Documentary",
            category: "documentary",
            videoId: "JGwWNGJdvx8",
            thumbnail: "https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg"
        },
        {
            id: 7,
            title: "Color Grading Demo",
            category: "color-grading",
            videoId: "JGwWNGJdvx8",
            thumbnail: "https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg"
        },
        {
            id: 8,
            title: "Anime AMV",
            category: "anime",
            videoId: "JGwWNGJdvx8",
            thumbnail: "https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg"
        },
        {
            id: 9,
            title: "Brand Commercial",
            category: "ads",
            videoId: "JGwWNGJdvx8",
            thumbnail: "https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg"
        },
        {
            id: 10,
            title: "TikTok Edit",
            category: "short-form",
            videoId: "JGwWNGJdvx8",
            thumbnail: "https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg"
        },
        {
            id: 11,
            title: "Podcast Episode",
            category: "long-form",
            videoId: "JGwWNGJdvx8",
            thumbnail: "https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg"
        },
        {
            id: 12,
            title: "Fortnite Montage",
            category: "gaming",
            videoId: "JGwWNGJdvx8",
            thumbnail: "https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg"
        }
    ];
    const portfolioGrid = document.querySelector('.portfolio-grid');
    function renderPortfolioItems(filter = 'all') {
        portfolioGrid.innerHTML = '';
        const filteredItems = filter === 'all' 
            ? portfolioItems 
            : portfolioItems.filter(item => item.category === filter);
        filteredItems.forEach(item => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = `portfolio-item ${item.category}`;
            portfolioItem.dataset.category = item.category;
            
            portfolioItem.innerHTML = `
                <img src="${item.thumbnail}" alt="${item.title}">
                <div class="portfolio-overlay">
                    <h3>${item.title}</h3>
                    <p>${item.category.replace('-', ' ')}</p>
                    <div class="play-btn" data-video-id="${item.videoId}">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
            `;
            portfolioGrid.appendChild(portfolioItem);
        });
        document.querySelectorAll('.play-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const videoId = this.getAttribute('data-video-id');
                openVideoLightbox(videoId);
            });
        });
    }
    renderPortfolioItems();
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            renderPortfolioItems(filter);
        });
    });
    const videoLightbox = document.querySelector('.video-lightbox');
    const closeBtn = document.querySelector('.close-btn');
    const videoIframe = document.querySelector('.video-container iframe');
    function openVideoLightbox(videoId) {
        videoIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        videoLightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    function closeVideoLightbox() {
        videoIframe.src = '';
        videoLightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    closeBtn.addEventListener('click', closeVideoLightbox);
    videoLightbox.addEventListener('click', function(e) {
        if (e.target === videoLightbox) {
            closeVideoLightbox();
        }
    });
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'var(--white-color)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
});