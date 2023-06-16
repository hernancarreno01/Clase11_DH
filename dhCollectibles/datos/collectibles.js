/*
let importarHotToys = (require('./figuras1.json'))
let importarBandai = (require('./figuras2.json'))
let importarStarWars = (require('./figuras3.json'))


module.export= importarHotToys
module.export= importarBandai;
module.export= importarStarWars

let todasLasMarcas = [...importarHotToys, ...importarBandai, ...importarStarWars]

console.log(importarHotToys)
console.log(importarBandai)
console.log(importarStarWars)
console.log(todasLasMarcas)
*/
const {readFileSync} = requiere('fs');

function importar (marca) {
    let nombreArchivo = "";

    switch (marca){
        case "Hot Toys":
            nombreArchivo = "figuras1.json";
            break;
            case "Bandai":
            nombreArchivo = "figuras2.json";
            break;
            case "Stars Wars":
            nombreArchivo = "figuras3.json";
            break;
            default:
                return []

    }
    let figuras =JSON.parse(readFileSync("./datos/") + nombreArchivo)       
    
    return figuras;
}
module.export = importar;
