export const mayorDeEdad = (age) => {
    if (age < 0) {
      return null;
    } else {
      return age >= 18;
    }
};

const ComponenteMayorDeEdad = ({ age }) => {
    return <p>{mayorDeEdad(age) ? "Es mayor de edad" : "Es menor de edad"}</p>
};

export default ComponenteMayorDeEdad;
