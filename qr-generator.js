document.addEventListener('DOMContentLoaded', function() {
    // Get the current page URL
    const pageUrl = window.location.href;
    
    // Create QR code using qrcode.js library
    new QRCode(document.getElementById("qrcode"), {
        text: pageUrl,
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
});