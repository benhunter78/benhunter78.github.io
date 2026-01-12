// Check localStorage for vandalized state on page load
document.addEventListener('DOMContentLoaded', function() {
    const isVandalized = localStorage.getItem('vandalized') === 'true';
    const vandalizeLink = document.getElementById('vandalize-link');

    if (isVandalized) {
        document.body.classList.add('vandalized');
        vandalizeLink.textContent = "I'm going green!";
    }

    // Add click event listener
    vandalizeLink.addEventListener('click', function(e) {
        e.preventDefault();

        const currentlyVandalized = document.body.classList.contains('vandalized');

        if (currentlyVandalized) {
            // Revert to normal
            document.body.classList.remove('vandalized');
            vandalizeLink.textContent = 'Vandalize this page!';
            localStorage.setItem('vandalized', 'false');
        } else {
            // Apply vandalized colors
            document.body.classList.add('vandalized');
            vandalizeLink.textContent = "I'm going green!";
            localStorage.setItem('vandalized', 'true');
        }
    });
});
