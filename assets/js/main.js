const inputTarea = document.querySelector("#nuevaTarea");
const btnAgregar = document.querySelector("#button-addon2");
const totalTareas = document.querySelector("#contadorTotal");
const totalTareasCompletadas = document.querySelector("#contadorCompletadas");
const listaDeTareas = document.querySelector("#listaDeTareas");

const tareas = [
    { id: 1, tarea: "Trotar 10k", done: false },
    { id: 2, tarea: "Generar reporte inicial", done: false },
    { id: 3, tarea: "Leer un libro", done: false },
];

let contadorTareas = 4;

btnAgregar.addEventListener("click", () => {
    const nuevaTarea = {
        id: contadorTareas++,
        tarea: inputTarea.value,
        done: false,
    };
    tareas.push(nuevaTarea);
    inputTarea.value = "";

    renderizar();
});

function tareaLista(id) {
    const index = tareas.findIndex((tarea) => tarea.id == id);
    tareas[index].done = !tareas[index].done;

    renderizar();
}

function borrar(id) {
    const index = tareas.findIndex((tarea) => tarea.id == id);
    tareas.splice(index, 1);

    renderizar();
}

function renderizar() {
    html = "";

    for (const tarea of tareas) {
        html += `
            <tr class=${tarea.done ? "table-success" : ""}>
                <th class="text-center" scope="row">${tarea.id}</th>
                <td class="${tarea.done ? "tarea-completada" : ""}">${tarea.tarea}</td>
                <td>${tarea.done ? "Realizado" : ""}</td>
                <td class="text-center"><input class="form-check-input" type="checkbox" value="" id="checkDefault" onclick="tareaLista(${tarea.id})" ${tarea.done === true ? "checked" : ""}/></td>
                <td class="text-center"><button type="button" class="btn-close" aria-label="Close" onclick="borrar(${tarea.id})"></button></td>
            </tr>
        `;
    }
    listaDeTareas.innerHTML = html;
    totalTareas.innerHTML = tareas.length;

    const contadorTareasCompletadas = tareas.filter((tarea) => tarea.done);
    totalTareasCompletadas.innerHTML = contadorTareasCompletadas.length;
    console.table(tareas);
}

renderizar();
