document.addEventListener("DOMContentLoaded", function() {
    let movies = Array.from(document.querySelectorAll(".card"));
    movies.sort((a, b) => {
        let yearA = parseInt(a.querySelector(".year").textContent);
        let yearB = parseInt(b.querySelector(".year").textContent);
        return yearB - yearA; // Sort in descending order
    });
    
    let container = document.querySelector(".cardhold");
    movies.forEach(movie => container.appendChild(movie));
});
