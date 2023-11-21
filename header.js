let appHeader = `
<nav class="banner">
<img src="Media/Logo.png" alt="Logo">
<p>Eduard Ciriaco</p>
</nav>
`;
let appFooter = `
<footer style="white-space: pre-line">
Press 'c' to toggle cursor.
Press 'Enter' to expand and minimize info boxes.
Press 'Backspace' or 'Left Arrow' to go to previous page.
</footer>
`;

document.getElementById("app-header").innerHTML = appHeader;
document.getElementById("app-footer").innerHTML = appFooter;