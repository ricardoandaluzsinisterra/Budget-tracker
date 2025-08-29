import { BudgetItem } from "../models";

function createInitialBulkEntries(): void{
    let entries: BudgetItem[] = [];
    
    // Entradas relacionadas con examen raly
    entries.push(new BudgetItem("Examen Raly", 45, 1, "Servicios médicos"));
    entries.push(new BudgetItem("Taco Bell", 24, 3, "Comida"));
    entries.push(new BudgetItem("Fondo de Invitación", 105, 1, "Eventos"));
    entries.push(new BudgetItem("Vuelo Salvador", 75, 1, "Transporte"));
    entries.push(new BudgetItem("Lung Fung", 45, 1, "Comida"));
    entries.push(new BudgetItem("Comida Salvador", 60, 1, "Comida"));
    entries.push(new BudgetItem("Makoto", 45, 1, "Comida"));
    entries.push(new BudgetItem("Estadía El Salvador", 40, 1, "Hospedaje"));
    entries.push(new BudgetItem("Fonda Random", 20, 2, "Comida"));
    entries.push(new BudgetItem("Juego de Panamá", 100, 1, "Entretenimiento"));
    entries.push(new BudgetItem("Arepas", 6, 1, "Comida"));
    entries.push(new BudgetItem("Vuelo a Brazil", 150, 1, "Transporte"));
    entries.push(new BudgetItem("Salchipapas", 16, 2, "Comida"));
    entries.push(new BudgetItem("Estadía Brasil", 200, 1, "Hospedaje"));
    entries.push(new BudgetItem("Ribs", 16, 1, "Comida"));
    entries.push(new BudgetItem("Comida Brasil", 175, 1, "Comida"));
    entries.push(new BudgetItem("Llaveros IRL", 10, 1, "Recuerdos"));
    entries.push(new BudgetItem("Dermatología", 60, 1, "Servicios médicos"));
    entries.push(new BudgetItem("Psiquiatra", 125, 1, "Servicios médicos"));
    entries.push(new BudgetItem("Recuerdo LATAM", 12, 1, "Recuerdos"));
    entries.push(new BudgetItem("Odontóloga", 35, 1, "Servicios médicos"));
    
}
