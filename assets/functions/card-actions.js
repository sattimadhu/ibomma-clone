document.addEventListener("DOMContentLoaded", function() {
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", function() {
            const movieId = this.getAttribute('data-id');
                window.location.href = `movie-details.html?id=${movieId}`;
        });
    });
});
let cards = document.querySelectorAll(".logo");

    cards.forEach(card => {
        card.addEventListener("click", function() {
            window.location.href = "content.html";
        });
    });
