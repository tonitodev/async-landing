// import fetch from "node-fetch";
const API = 'https://work-out-api1.p.rapidapi.com/search?Muscles=shoulders';

const contenido = null || document.getElementById('contenido')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0453cf69b2msheec81362ee51224p1aac33jsn1635f6b81f6d',
		'X-RapidAPI-Host': 'work-out-api1.p.rapidapi.com'
	}
};

async function fetchData (urlApi) {

    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data

}

(async () => { // Esta sentencia permitirá automáticamente cuando está cargando ejecutar esta fucnión. Esta sintaxis proporciona una forma de definir y ejecutar una función asíncrona de forma inmediata en JavaScript.

    try {

        const exercises = await fetchData(API)
        console.log (typeof(exercises))

        let view = `
        ${exercises.map(ejercicio => `
            <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="https://media.revistagq.com/photos/5d35929de887bb000828e8f3/16:9/w_2560%2Cc_limit/GettyImages-982408932-(1).jpg" alt="${ejercicio.WorkOut}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${ejercicio.WorkOut}
          </h3>
        </div>
        <div class="mt-4 flex justify-between">
        <p>
          ${ejercicio.Explaination}
        </p>
      </div>
      </div>
            `).join('')} 
      `;
      contenido.innerHTML = view ;

    } catch (error) {
        console.log(error);
    }

}) ();
