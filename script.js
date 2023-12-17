// Pobierz formularz kontaktowy
const contactForm = document.getElementById('contact-form');

// Dodaj nasłuchiwanie zdarzenia submit formularza
contactForm.addEventListener('submit', function (event) {
    // Zatrzymaj domyślne zachowanie formularza
    event.preventDefault();

    // Pobierz wartości pól formularza
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Wyślij dane do serwera lub wykonaj inne akcje
    // Tutaj możesz dodać kod obsługujący wysyłkę formularza, np. za pomocą Fetch API

    // Wyświetl komunikat potwierdzający
    alert(`Dziękujemy, ${name}! Twój formularz został wysłany.`);
});
