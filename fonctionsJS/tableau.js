export function creerTableau(lignes, colonnes) {
    console.log(`Création d'un tableau de ${lignes} lignes et ${colonnes} colonnes`);

    const table = document.createElement("table");
    for (let i = 0; i < lignes; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < colonnes; j++) {
            const cell = document.createElement("td");
            cell.textContent = `(${i},${j})`;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    document.body.appendChild(table);
}
