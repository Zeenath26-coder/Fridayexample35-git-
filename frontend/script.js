document.addEventListener('DOMContentLoaded', () => {
    const quitButton = document.getElementById('quitButton');
    const quitMessage = document.getElementById('quitMessage');

    quitButton.addEventListener('click', handleQuit);
});

function handleQuit() {
    // 1. Hide the main content and button
    const container = document.querySelector('.container');
    const quitButton = document.getElementById('quitButton');
    const quitMessage = document.getElementById('quitMessage');

    // Optionally, you can add a fade-out animation by toggling a CSS class
    quitButton.style.display = 'none';
    
    // 2. Display the "Thank You" message
    quitMessage.classList.remove('hidden');

    // 3. Optional: Attempt to close the window
    // NOTE: This only works for windows/tabs that were opened via script (window.open).
    // It will be ignored by most modern browsers for security reasons.
    // window.close(); 
    
    // 4. Alternative "Quit" action: Redirect to a final page
    /*
    setTimeout(() => {
        window.location.href = "https://www.google.com"; 
    }, 2000); // Redirect after 2 seconds
    */

    console.log("Quit action initiated: App state finalized.");
}