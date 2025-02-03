function redirectToService(service) {
    window.location.href = `gift-vouchers.html?service=${service}`;
}
function updateTitle() {
    const params = new URLSearchParams(window.location.search);
    const service = params.get("service"); 

    if (service) {
        const titleElement = document.querySelector(".section-title__title");
        if (titleElement) {
            let titleText = "Instant Voucher ";
            if (service === "gift-cards") {
                titleText += "E Gift Card";
            } else if (service === "prepaid-card") {
                titleText += "Prepaid Card";
            }
            titleElement.textContent = titleText; 
        }
    }
}

// Run the function when the page loads
window.onload = updateTitle;
