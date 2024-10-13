document.addEventListener("DOMContentLoaded", function () {
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('afterbegin', data);
        });
});
// Fetch the footer
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.body.insertAdjacentHTML('beforeend', data);
    });

function updateDateTime() {
    const dateTimeElement = document.getElementById('dt');
    const now = new Date();
    const hours = now.getHours();

    // Format the date and time
    const formattedDate = now.toLocaleDateString();  // Get the date
    const formattedTime = now.toLocaleTimeString();  // Get the time

    // Update the date and time
    dateTimeElement.innerHTML = `Date: ${formattedDate} | Time: ${formattedTime}`;

}

// Update date and time every second
setInterval(updateDateTime, 1000);        