const main = document.querySelector('main');

async function getData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data = await res.json();
    data.forEach(element => {
        // Crear la card
        const card = document.createElement('div');
        card.className = 'card';
        
        const imagen = document.createElement('img');
        imagen.src = element.url;
        
        const titulo = document.createElement('h3');
        titulo.textContent = element.title;

        // append es oara agregar varios hijos (elementos)
        card.append(imagen, titulo);

        // appendChild es para agregar un solo hijo (elemento)
        main.appendChild(card);

    });
}

getData();
