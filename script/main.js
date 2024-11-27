fetch('https://jsonplaceholder.typicode.com/users')
    .then((resp) => resp.json())
    .then((data) => fetchUsers(data))
const cards = document.querySelector('.users-container')
async function fetchUsers(data) {
    cards.innerHTML = ""
    try {
    data.forEach(element => {
        let miCard = `<div class="col">
            <div class="card border-primary  h-100">
            <div class="card-body ">
                        <ul class="list-group list-group-flush ">
                            <li class="list-group-item text-bg-secondary"><h2>Información</h2></li>
                            <li class="list-group-item border-primary ">Nombre: ${element.name}</li>
                            <li class="list-group-item border-primary ">Usuario: ${element.username}</li>
                            <li class="list-group-item border-primary ">Telefono: ${element.phone}</li>
                            <li class="list-group-item border-primary ">Correo: ${element.email}</li>
                            <li class="list-group-item border-primary ">Pagina web: ${element.website}</li>
                            <li class="list-group-item ">Empresa: ${element.company.name}</li>
                         </ul>
                     </div>
                     </div>
         </div> `
        cards.innerHTML += miCard
    });
        } catch (error) {
        alert(`Error al cargar los usuarios. Inténtalo de nuevo más tarde`)
    }
}