import { creerTableau }  from './fonctionsJS/tableau.js';

document.addEventListener("DOMContentLoaded", () => {
    const nvTab = document.getElementById("nvTab");
    if (nvTab) {
        nvTab.addEventListener("click", () => {
            creerTableau(2,3);
        });
    } else {
        console.error("Bouton nvTab introuvable !");
    }
});
