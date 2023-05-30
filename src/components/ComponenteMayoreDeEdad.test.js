import { mayorDeEdad } from "./ComponenteMayorDeEdad";
 
describe ('Funcion mayorDeEdad dentro de ComponenteMayorDeEdad', () => {
    
  test('Retorna true cuando la edad es igual a 18', () => {
    const result = mayorDeEdad(18);
    expect(result).toBe(true);
  });

  test('Retorna true cuando la edad es mayor a 18', () => {
    const result = mayorDeEdad(20);
    expect(result).toBe(true);
  });
    
  test('Retorna false cuando la edad es menor a 18', () => {
    const result = mayorDeEdad(15);
    expect(result).toBe(false);
  });

  test('Retorna null cuando la edad es negativa', () => {
    const result = mayorDeEdad(-5);
    expect(result).toBe(null);
  });

})
