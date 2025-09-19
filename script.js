// Show/Hide modal
document.getElementById('bookNowBtn').onclick = () => {
    document.getElementById('bookingModal').style.display = 'flex';
};

document.getElementById('closeBookingModal').onclick = () => {
    document.getElementById('bookingModal').style.display = 'none';
};

document.getElementById('bookingModal').onclick = (e) => {
    if(e.target === document.getElementById('bookingModal')) {
        document.getElementById('bookingModal').style.display = 'none';
    }
};

// Booking form
document.getElementById('bookingForm').onsubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    if(name) {
        // Add patient to list
        const ul = document.getElementById('patientList');
        const li = document.createElement('li');
        li.textContent = name;
        ul.appendChild(li);

        // Show success message
        form.style.display = 'none';
        document.getElementById('bookingSuccess').style.display = 'block';

        setTimeout(() => {
            document.getElementById('bookingModal').style.display = 'none';
            form.reset();
            form.style.display = 'block';
            document.getElementById('bookingSuccess').style.display = 'none';
        }, 1800);

        // Open a new browser tab (simulated)
        window.open('https://www.example.com', '_blank');
    }
};
