import React, { useState } from "react";
import { request } from "../axios_helper";

const LoginRegister = ({ onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    login: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const endpoint = isLogin ? "/login" : "/register";

    const payload = isLogin
      ? { login: form.login, password: form.password }
      : {
          login: form.login,
          password: form.password,
          firstName: form.firstName,
          lastName: form.lastName,
        };

    request("POST", endpoint, payload)
      .then((user) => {
        console.log("Usuario autenticado:", user);
        localStorage.setItem("token", user.token); // guardar el token
        if (onLoginSuccess) {
          onLoginSuccess(); // notificar éxito
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        setError("Credenciales incorrectas o usuario ya existe.");
      });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {isLogin ? "Iniciar sesión" : "Registrarse"}
      </h2>

      {error && (
        <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {!isLogin && (
          <>
            <input
              type="text"
              name="firstName"
              placeholder="Nombre"
              value={form.firstName}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Apellido"
              value={form.lastName}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            />
          </>
        )}

        <input
          type="text"
          name="login"
          placeholder="Login"
          value={form.login}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          {isLogin ? "Entrar" : "Registrarse"}
        </button>
      </form>

      <div className="text-center mt-4">
        {isLogin ? (
          <p>
            ¿No tienes cuenta?{" "}
            <button
              onClick={() => setIsLogin(false)}
              className="text-blue-500 underline"
            >
              Registrarse
            </button>
          </p>
        ) : (
          <p>
            ¿Ya tienes cuenta?{" "}
            <button
              onClick={() => setIsLogin(true)}
              className="text-blue-500 underline"
            >
              Iniciar sesión
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginRegister;
