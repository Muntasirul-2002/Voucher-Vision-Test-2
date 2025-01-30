 // Initialize EmailJS
 (function() {
    emailjs.init("7dWbkJYVm3Lnl61G3");
})();

document.getElementById('contact').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = {
        name: document.getElementById('full_name').value,
        email_id: document.getElementById('email').value,
        mobile_no: document.getElementById('mobile_no').value,
        message: document.getElementById('message').value
    };
    // console.log('Form Data:', formData); 
    emailjs.send('service_cuf6yiv', 'template_9efvywa', {
        name: formData.name,
        email_id: formData.email_id,
        mobile_no: formData.mobile_no,
        message: formData.message
    })
    .then(function(response) {
        console.log('Email sent successfully:', response);
        showPopup();
        document.getElementById('contact').reset();
    })
    .catch(function(error) {
        alert('Error sending message. Please try again.');
        console.error('EmailJS error:', error);
    });
});
function showPopup() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
}
function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
}