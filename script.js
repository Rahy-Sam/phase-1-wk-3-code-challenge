// handling ticket purchases
updateAvailableTickets();

buyButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Simulate a ticket purchase by sending a request to a server
        fetch('/purchaseTicket', { method: 'POST' })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    // Update the available tickets count and notify the user
                    availableTickets -= 1;
                    updateAvailableTickets();
                    alert('Ticket purchased! Enjoy the event.');
                } else {
                    alert('Ticket purchase failed. Please try again.');
                }
            });
    });
});

