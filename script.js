document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.section');
    
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        this.classList.toggle('active');
    });
    
    document.addEventListener('click', function(e) {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target) && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            navLinks.forEach(link => link.classList.remove('active'));
            
            this.classList.add('active');
            
            const targetId = this.getAttribute('href').substring(1);
            
            sections.forEach(section => section.classList.remove('active'));
            
            document.getElementById(targetId).classList.add('active');
            
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
                menuToggle.classList.remove('active');
            }
            
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
    
    const skillLevels = document.querySelectorAll('.skill-level');
    
    function animateSkills() {
        const habilidadesSection = document.getElementById('habilidades');
        
        if (habilidadesSection.classList.contains('active')) {
            skillLevels.forEach(skill => {
                const width = skill.style.width;
                skill.style.width = '0';
                
                setTimeout(() => {
                    skill.style.width = width;
                }, 100);
            });
        }
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (this.getAttribute('href') === '#habilidades') {
                setTimeout(animateSkills, 300);
            }
        });
    });
    
    const activeLink = document.querySelector('.nav-links a.active');
    if (activeLink) {
        const targetId = activeLink.getAttribute('href').substring(1);
        document.getElementById(targetId).classList.add('active');
    } else {
        navLinks[0].classList.add('active');
        const targetId = navLinks[0].getAttribute('href').substring(1);
        document.getElementById(targetId).classList.add('active');
    }
    
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
    
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
    
    if (document.getElementById('habilidades').classList.contains('active')) {
        setTimeout(animateSkills, 500);
    }
});