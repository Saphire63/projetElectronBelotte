export function creerTableau(lignes, colonnes) {
    const table = document.createElement("table");
    for (let i = 0; i < lignes; i++) {
        const tr = document.createElement("tr");

        for (let j = 0; j < colonnes; j++) {
            const td = document.createElement("td");  
            td.textContent = `Ligne ${i + 1}, Colonne ${j + 1}`; 
            tr.appendChild(td);  
        }


        table.appendChild(tr);
    }

    document.getElementById("tableau").appendChild(table);
}

