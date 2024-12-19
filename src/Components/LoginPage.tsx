import { useState } from "react";
import Calculatora from "./Calculadora";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => {
        if (email === "asd" && password === "asd1234") {
          setIsAuthenticated(true); // Cambiar el estado de autenticación
        } else {
          alert("Credenciales incorrectas. Inténtalo nuevamente.");
        }
      };
      
      if (isAuthenticated) {
        // Mostrar la calculadora si está autenticado
        return (
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
              <h3 className="text-xl font-bold mb-4 text-center">Calculadora</h3>
              <Calculatora />
              <button onClick={() => {setIsAuthenticated(false); // Cerrar sesión
                  setEmail("");
                  setPassword("");
                }}
                className="bg-red-500 text-white rounded-xl mt-4 p-2"> Cerrar Sesión </button>
            </div>
          </div>
        );
      }
    
      // Mostrar formulario de inicio de sesión si no está autenticado
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
            <h3 className="text-xl font-bold mb-4 text-center">Bienvenido a la página</h3>
            <h4 className="text-lg mb-6 text-center">Inicio de sesión</h4>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Usuario:</label>
                <input
                  type="text"
                  placeholder="Usuario"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-2 border border-gray-300 rounded-lg w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Contraseña:</label>
                <input
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-2 border border-gray-300 rounded-lg w-full"
                />
              </div>
              <button
                onClick={handleLogin}
                className="bg-blue-500 text-white rounded-xl mt-2 p-2"
              >
                Ingresar
              </button>
            </div>
          </div>
        </div>
      );
}