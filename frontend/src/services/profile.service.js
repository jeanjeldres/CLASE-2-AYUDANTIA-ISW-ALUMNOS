import axios from './root.service.js';

export async function getProfile(token) {
  try {
    const response = await fetch("http://localhost:3000/api/profile/private", { // URL completa del backend
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    // Transformar la respuesta a JSON
    const data = await response.json();

    // Retornar la estructura esperada
    return {
      success: response.ok,  // true si status 2xx
      data: response.ok ? data.data : null,
      message: response.ok ? "Perfil obtenido" : data.message || "Error al obtener perfil",
    };
  } catch (error) {
    console.error('Error al obtener perfil', error);
    return {
      success: false,
      data: null,
      message: error.message || 'Error al obtener perfil',
    };
  }
}