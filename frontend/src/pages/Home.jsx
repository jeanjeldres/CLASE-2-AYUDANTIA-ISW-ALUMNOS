import { useState } from "react";
import { getProfile } from "../services/profile.service.js";

const Home = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState(null);

  const handleGetProfile = async () => {
    setLoading(true);
    setError(null);
    setSuccessMessage("");

    const token = localStorage.getItem("token");

    try {
      const result = await getProfile(token);
      if (result.success) {
        setProfileData(result.data);
        setSuccessMessage("Se encontraron datos de perfil");
      } else {
        alert(result.message);
        setProfileData(null);
      }
    } catch (error) {
      console.error(error);
      setError("Error al obtener perfil:", error);
      setProfileData(null);
      alert("Error al obtener perfil");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 w-full max-w-2xl transform transition-all hover:scale-105">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
          Página de inicio
        </h1>

        <button
          onClick={handleGetProfile}
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300"
        >
          Obtener Perfil
        </button>
        {loading && <p className="text-gray-500">Cargando...</p>}
        {successMessage && (
          <p className="text-gray-500 mb-5">{successMessage}</p>
        )}
        {error && <p className="text-red-300 mb-4">{error}</p>}

        {profileData && (
          <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-200 text-gray-700">
            <h2 className="text-xl font-bold mb-4">Datos del perfil:</h2>
            <p>
              <strong>Email:</strong> {profileData.userData.email}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
