import React, { useState, useEffect } from "react";
import { request } from "../axios_helper"; 
const AuthContent = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    request("GET", "/messages", {})
      .then((data) => {
        console.log("Data recibida:", data); 
        setMessages(data); 
      })
      .catch((err) => {
        console.error("Error fetching messages:", err);
        setError(err.message || "Error cargando mensajes.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Cargando mensajes...</div>;
  }

  if (error) {
    return <div style={{ color: "red" }}>Error: {error}</div>;
  }

  return (
    <div className="mt-5 p-8 items-center justify-center bg-gray-100 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-semibold mb-3 items-center">
        Mensajes del Backend:
      </h2>
      {Array.isArray(messages) && messages.length > 0 ? (
        <ul className="list-disc list-inside">
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      ) : (
        <p>No hay mensajes para mostrar.</p>
      )}
    </div>
  );
};

export default AuthContent;
