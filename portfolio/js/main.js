/* 
  Portfolio Main JavaScript
  Features:
  - Smooth Scrolling
  - Musanze Transport Fare Estimator
  - Contact Form Handling
  - Mobile Menu Toggle
*/

document.addEventListener('DOMContentLoaded', () => {

    console.log('Portfolio Loaded Successfully');

    /* =====================================================
       1️⃣  SMOOTH SCROLLING
    ====================================================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });


    /* =====================================================
       2️⃣  MUSANZE TRANSPORT FARE ESTIMATOR
    ====================================================== */

    const calculateBtn = document.getElementById('calculateFare');
    const fareResult = document.getElementById('fareResult');
    const fareField = document.getElementById('fare');
    const distanceField = document.getElementById('distance');

    if (calculateBtn) {
        calculateBtn.addEventListener('click', () => {

            const distance = parseFloat(distanceField.value);

            // ✅ Validation
            if (isNaN(distance) || distance <= 0) {
                fareResult.textContent = 'Please enter a valid distance.';
                fareResult.style.color = '#d63031';
                fareResult.style.display = 'block';
                fareField.value = '';
                return;
            }

            // ✅ Fare Calculation Rules
            // Base rate = 500 RWF
            // After first km = 150 RWF per km

            let fare = 500;

            if (distance > 1) {
                fare += (distance - 1) * 150;
            }

            fare = Math.round(fare);

            // ✅ Display inside textfield
            fareField.value = fare + " RWF";

            // ✅ Success message
            fareResult.textContent = 'Fare calculated successfully!';
            fareResult.style.color = '#0984E3';
            fareResult.style.display = 'block';

            // ✅ Animation
            fareResult.style.animation = 'none';
            fareResult.offsetHeight; // Trigger reflow
            fareResult.style.animation = 'fadeIn 0.5s ease-in';
        });
    }


    /* =====================================================
       3️⃣  CONTACT FORM HANDLING
    ====================================================== */

    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            alert('Thank you for your message! This is a portfolio demo.');

            contactForm.reset();
        });
    }


    /* =====================================================
       4️⃣  MOBILE MENU TOGGLE
    ====================================================== */

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {

        menuToggle.addEventListener('click', () => {

            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');

            const spans = menuToggle.querySelectorAll('span');

            if (menuToggle.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
            } else {
                spans.forEach(span => span.style.transform = 'none');
                spans[1].style.opacity = '1';
            }
        });

        // Close menu when link clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');

                const spans = menuToggle.querySelectorAll('span');
                spans.forEach(span => span.style.transform = 'none');
                spans[1].style.opacity = '1';
            });
        });
    }

});