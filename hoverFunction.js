document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn-primary');

    buttons.forEach(button => {
        // Add mouseover event listener to each button
        button.addEventListener('mouseover', function () {
            // Change background color on hover
            button.style.backgroundColor = '#978792'; 
        });
        // Add mouseout event listener to each button
        button.addEventListener('mouseout', function () {
            // Restore original background color
            button.style.backgroundColor = '#AAA694'; 
        });
        // Add click event listener to each button
        button.addEventListener('click', function (event) {
            // Change background color on click
            button.style.backgroundColor = '#6D5F69'; 
            setTimeout(function () {
                // Restore hover background color after 500ms
                button.style.backgroundColor = '#AAA694'; 
            }, 500);
        });
    });
});
