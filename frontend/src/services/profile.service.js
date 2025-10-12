import axios from "./root.service.js";

export async function getProfile(token) {
  try {
    const response = await fetch("http://localhost:3000/api/profile/private", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    return {
      success: response.ok,
      data: response.ok ? data.data : null,
      message: response.ok
        ? "Perfil obtenido"
        : data.message || "Error al obtener perfil",
    };
  } catch (error) {
    console.error("Error al obtener perfil", error);
    return {
      success: false,
      data: null,
      message: error.message || "Error al obtener perfil",
    };
  }
}
