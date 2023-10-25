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

// Example JavaScript for handling ticket purchases and updating available tickets from a JSON file
const buyButtons = document.querySelectorAll('.buy-button');
const availableTicketsElement = document.getElementById('available-tickets');

let availableTickets;

// Function to update the available tickets count on the web page
function updateAvailableTickets() {
    availableTicketsElement.innerText = `Available Tickets: ${availableTickets}`;
}

// Function to fetch data from the JSON file
function fetchData() {
    fetch('db.json')
        .then((response) => response.json())
        .then((data) => {
            // Assuming the JSON structure has a 'films' array with ticket-related data
            // You can modify this to match your actual JSON structure
            const films = data.films;
            // Calculate available tickets by subtracting the sold tickets from capacity
            availableTickets = films.reduce((total, film) => total + (film.capacity - film.tickets_sold), 0);
            // Update the available tickets count on the web page
            updateAvailableTickets();
        });
}

// Call the fetchData function to load data from the JSON file
fetchData();

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
