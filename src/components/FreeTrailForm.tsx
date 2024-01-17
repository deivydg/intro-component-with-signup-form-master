import { useState } from "react";
import "./FreeTrailForm.css";

function FreeTrailForm() {
  // Estados para almacenar los valores de los campos y mensajes de error
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Estados para mensajes de error específicos para cada campo
  const [nameError, setNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Funciones para manejar cambios en los campos
  const handleNameChange = (event) => {
    setName(event.target.value);
    // Limpiar mensaje de error al cambiar el contenido del campo
    setNameError("");
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    setLastNameError("");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  // Función para validar y enviar el formulario
  const handleSubmit = (event) => {
    event.preventDefault();

    // Realizar validaciones
    if (!name) {
      setNameError("First Name cannot be empty");
    }

    if (!lastName) {
      setLastNameError("Last Name cannot be empty");
    }

    if (!email) {
      setEmailError("Looks like this is not an email");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Enter a valid email");
    }

    if (!password) {
      setPasswordError("Password cannot be empty");
    }
  };

  // Función para la clase de error condicional
  const getClassName = (error) => (error ? "errorClassName" : "");

  return (
    <>
      <form onSubmit={handleSubmit} className="FreeTrailForm">
        <div className={`input-container ${getClassName(nameError)}`}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            className={`input-field ${getClassName(nameError)}`}
          />
        </div>

        {nameError && (
          <p className={`error-message ${getClassName(nameError)}`}>
            {nameError}
          </p>
        )}

        <div className={`input-container ${getClassName(lastNameError)}`}>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
            className={`input-field ${getClassName(lastNameError)}`}
          />
        </div>

        {lastNameError && (
          <p className={`error-message ${getClassName(lastNameError)}`}>
            {lastNameError}
          </p>
        )}

        <div className={`input-container ${getClassName(emailError)}`}>
          <input
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={handleEmailChange}
            className={`input-field ${getClassName(emailError)}`}
          />
        </div>

        {emailError && (
          <p className={`error-message ${getClassName(emailError)}`}>
            {emailError}
          </p>
        )}

        <div className={`input-container ${getClassName(passwordError)}`}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className={`input-field ${getClassName(passwordError)}`}
          />
        </div>

        {passwordError && (
          <p className={`error-message ${getClassName(passwordError)}`}>
            {passwordError}
          </p>
        )}

        <button type="submit">CLAIM YOUR FREE TRIAL</button>

        <p className="terms">
          By clickyng the button, you are agreeing to our
          <a href="#" className="termsAndServices">
            Term and services
          </a>
        </p>
      </form>
    </>
  );
}

export default FreeTrailForm;
