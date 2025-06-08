// Script pour la persistance du thème et le menu responsive
document.addEventListener('DOMContentLoaded', function() {
    // Récupération des éléments
    const moonIcon = document.getElementById('bi-moon');
    const body = document.body;
    
    // Vérifier si un thème est déjà enregistré
    const savedTheme = localStorage.getItem('theme');
    
    // Appliquer le thème sauvegardé s'il existe
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        if (moonIcon) {
            moonIcon.classList.remove('bi-moon');
            moonIcon.classList.add('bi-sun');
        }
    }
    
    // Gestion du clic sur l'icône de thème
    if (moonIcon) {
        moonIcon.addEventListener('click', function() {
            // Basculer entre les modes
            body.classList.toggle('dark-mode');
            
            // Mettre à jour l'icône
            if (body.classList.contains('dark-mode')) {
                moonIcon.classList.remove('bi-moon');
                moonIcon.classList.add('bi-sun');
                // Sauvegarder la préférence
                localStorage.setItem('theme', 'dark');
            } else {
                moonIcon.classList.remove('bi-sun');
                moonIcon.classList.add('bi-moon');
                // Sauvegarder la préférence
                localStorage.setItem('theme', 'light');
            }
        });
    }
    
    // Gestion du menu responsive
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.getElementById('menu');
    
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('show');
        });
        
        // Fermer le menu quand on clique sur un lien
        const menuLinks = document.querySelectorAll('#menu a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    menu.classList.remove('show');
                }
            });
        });
    }
    
    // Ajuster la hauteur du menu en cas de redimensionnement
    window.addEventListener('resize', function() {
        if (menu && window.innerWidth > 768) {
            menu.classList.remove('show');
        }
    });
});