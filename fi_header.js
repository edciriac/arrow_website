let appHeader = `
<nav class="banner">
<img src="Media/Logo.png" alt="Logo">
<p>Eduard Ciriaco</p>
<button tabindex=0 onclick=window.history.back()></button>
</nav>
`;
let appFooter = `
<footer style="white-space: pre-line">
Paina 'Backspace' tai 'Vasen nuolinäppäin' siirtyäksesi edelliselle sivulle.
'c' näyttää ja piilottaa kursorin.
'Enter' avaa ja sulkee infolaatikoita ja siirtyy valitulle sivulle.
</footer>
`;

document.getElementById("app-header").innerHTML = appHeader;
document.getElementById("app-footer").innerHTML = appFooter;