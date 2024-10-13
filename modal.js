
    // Modal logic
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("submitBtn");
    const closeModal = document.getElementsByClassName("close")[0];
    const submitModalBtn = document.getElementById("modalSubmitBtn");

    // Open modal on button click
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // Close the modal when the user clicks on <span> (x)
    closeModal.onclick = function () {
        modal.style.display = "none";
    }

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    // Close the modal when the submit button inside the modal is clicked
    submitModalBtn.onclick = function () {
        modal.style.display = "none";
    }
