const collectibles = require('./collectibles');

const hotToys = importar('Hot Toys');
const bandai = importar('bandai');
const starWars = importar('Star Wars');

let todasJuntas = [...hotToys, ...bandai, ...starWars];

let collectibles = {
    'figuras': todasJuntas,
    listFigures: function () {
        this.figures.forEach(function(elemento){
            console.log(elemento.marca)
            console.log(elemento.nombre)
            console.log(elemento.precio)
            console.log(elemento.stock)
            
        })
    }
}

