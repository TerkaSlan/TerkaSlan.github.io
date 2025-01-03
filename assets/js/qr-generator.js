document.addEventListener('DOMContentLoaded', function() {
    const qrcodeElement = document.getElementById("qrcode");
    if (qrcodeElement) {
        new QRCode(qrcodeElement, {
            text: window.location.href,
            width: 128,
            height: 128
        });
    }
}); 