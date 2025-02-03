function redirectToService(service) {
    // Redirect to gift-vouchers.html with query parameter
    window.location.href = `gift-vouchers.html?service=${service}`;
}
function updateTitle() {
    // Get the query parameter from the URL
    const params = new URLSearchParams(window.location.search);
    const service = params.get("service"); // Correctly extract the 'service' parameter

    if (service) {
        const titleElement = document.querySelector(".section-title__title");
        if (titleElement) {
            let titleText = "Instant Voucher ";
            if (service === "gift-cards") {
                titleText += "E Gift Card";
            } else if (service === "prepaid-card") {
                titleText += "Prepaid Card";
            }
            titleElement.textContent = titleText; // Update the title dynamically
        }
    }
}

// Run the function when the page loads
window.onload = updateTitle;
