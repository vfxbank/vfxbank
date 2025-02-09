document.addEventListener('DOMContentLoaded', () => {
    const letters = document.querySelectorAll('.parallax-text span');
    

    letters.forEach((letter) => {
        letter.dataset.depthX = Math.random() * 30 + 10; 
        letter.dataset.depthY = Math.random() * 30 + 10; 
    });


    const header = document.querySelector('header');
    const heroSectionHeight = document.querySelector('.container').offsetHeight;

    window.addEventListener('scroll', () => {
        if (window.scrollY > heroSectionHeight) {
            header.classList.add('visible');
        } else {
            header.classList.remove('visible');
        }
    });
});

document.addEventListener('mousemove', (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    const letters = document.querySelectorAll('.parallax-text span');
    
    letters.forEach((letter) => {
        const depthX = letter.dataset.depthX;
        const depthY = letter.dataset.depthY;

        const offsetX = x * depthX;
        const offsetY = y * depthY;

        letter.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const photoItems = document.querySelectorAll('.photo-item');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        
        photoItems.forEach((item, index) => {
            const depth = index % 2 === 0 ? 5 : -5; 
            const itemOffset = item.offsetTop;
            const windowHeight = window.innerHeight;


            if (scrollPosition + windowHeight > itemOffset && scrollPosition < itemOffset + item.clientHeight) {
                const parallaxEffect = (scrollPosition - itemOffset) * depth / 100;
                item.style.transform = `translateY(${parallaxEffect}px)`;
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const photoItems = document.querySelectorAll('.photo-item');

    photoItems.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top; 
            const moveX = (x - rect.width / 2) * 0.1; 
            const moveY = (y - rect.height / 2) * 0.1;

            item.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translate(0, 0)';
        });
    });
});
