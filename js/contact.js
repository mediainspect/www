
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    const statusDiv = document.getElementById('formStatus');
    statusDiv.textContent = 'Sending message...';
    statusDiv.className = 'form-status sending';

    // Simulate form submission (replace with actual API endpoint)
    setTimeout(() => {
        statusDiv.textContent = 'Message sent successfully!';
        statusDiv.className = 'form-status success';
        document.getElementById('contactForm').reset();
    }, 1000);
});
