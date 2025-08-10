// FAQ Accordion Premium
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentNode;
        const wasActive = item.classList.contains('active');
        
        // Close all items first
        document.querySelectorAll('.faq-item').forEach(el => {
            el.classList.remove('active');
            el.querySelector('.faq-question span:last-child').textContent = '+';
        });
        
        // Open clicked item if it wasn't active
        if (!wasActive) {
            item.classList.add('active');
            question.querySelector('span:last-child').textContent = '-';
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form submission with premium animation
const form = document.getElementById('redeemForm');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading effect
        const submitButton = form.querySelector('.submit-button');
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> PROCESSANDO...';
        submitButton.disabled = true;
        
        // Simulate processing
        setTimeout(() => {
            submitButton.innerHTML = '<i class="fas fa-check"></i> RESGATE CONFIRMADO!';
            submitButton.style.background = 'linear-gradient(to right, #4CAF50, #8BC34A)';
            
            // Show confirmation message
            const confirmation = document.createElement('div');
            confirmation.style.color = '#d4af37';
            confirmation.style.marginTop = '15px';
            confirmation.style.textAlign = 'center';
            confirmation.style.fontWeight = 'bold';
            confirmation.innerHTML = 'Seus Robux premium estão sendo creditados! Verifique seu e-mail para mais detalhes.';
            form.appendChild(confirmation);
            
            // Reset form after 5 seconds
            setTimeout(() => {
                form.reset();
                submitButton.innerHTML = 'RESGATAR BÔNUS AGORA';
                submitButton.style.background = 'linear-gradient(to right, #d4af37, #f9d423)';
                submitButton.disabled = false;
                confirmation.remove();
            }, 5000);
        }, 2000);
    });
}

// Add gold shimmer effect to offer cards on hover
document.querySelectorAll('.offer-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const shine = document.createElement('div');
        shine.style.position = 'absolute';
        shine.style.top = '0';
        shine.style.left = '-100%';
        shine.style.width = '50%';
        shine.style.height = '100%';
        shine.style.background = 'linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.1), transparent)';
        shine.style.zIndex = '1';
        card.style.position = 'relative';
        card.style.overflow = 'hidden';
        card.appendChild(shine);
        
        const animation = shine.animate([
            { left: '-100%' },
            { left: '150%' }
        ], {
            duration: 1000,
            iterations: 1
        });
        
        animation.onfinish = () => shine.remove();
    });
});
