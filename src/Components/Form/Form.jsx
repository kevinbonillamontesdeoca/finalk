import { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.name.length < 7) {
      setError(true);
      setErrorMessage("Nombre debe ser menor a 7");
      return;
    }
    const incluye = userData.email.includes("@");

    if (!incluye) {
      setError(true);
      setErrorMessage("Correo debe tener @");
      return;
    }

    const str = userData.password.trim();
    const passwordIsValid = userData.password === str;

    if (!passwordIsValid || userData.password.length < 8) {
      setError(true);
      setErrorMessage(
        "La contraseña no incluye espacios en blanco y debe tener 8 caracteres"
      );
      return;
    }

    console.log(userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresar el Nombre"
          onChange={handleChange}
          name="name"
        />
        <input
          type="text"
          placeholder="Ingresar el Correo"
          name="email"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Ingresar la Contraseña"
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>

      {error && <h1>{errorMessage}</h1>}
    </div>
  );
};

export default Form;
