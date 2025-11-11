// un archivo .test.js se conoce como suit de pruebas
// Es el lugar donde ustedes definen las casos de prueba agrupados por temática


// 1. Importaciones necesarias
import { suma } from "../src/utils/ejemplo.js";


// 2. Importaciones de desarrollo


/*
 1. Bloques de prueba (agrupa por método) -> describe
 2. Casos individuales de prueba
 */

 describe("Probar función suma...", ()=>{
    // definimos los casos individuales 
    it("Caso 1: suma correcta de numeros positivos", ()=>{
        expect(suma(2, 3)).toBe(5);
    });
    
    it("Caso 2: suma correcta de numero con cero", ()=>{
        expect(suma(7, 0)).toBe(7);
    });

    it("Caso 3: suma correcta de numeros negativos", ()=>{
        expect(suma(-2, -4)).toBe(-6);
    });
});