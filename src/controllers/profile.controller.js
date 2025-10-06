import { handleSuccess } from "../Handlers/responseHandlers.js";
import * as userService from '../services/user.service.js';
import { handleErrorClient } from '../Handlers/responseHandlers.js';

export function getPublicProfile(req, res) {
  handleSuccess(res, 200, "Perfil público obtenido exitosamente", {
    message: "¡Hola! Este es un perfil público. Cualquiera puede verlo.",
  });
}

export function getPrivateProfile(req, res) {
  const user = req.user;

  handleSuccess(res, 200, "Perfil privado obtenido exitosamente", {
    message: `¡Hola, ${user.email}! Este es tu perfil privado. Solo tú puedes verlo.`,
    userData: user,
  });
}

export const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { email, password } = req.body;

    const newData = {};
    if (email) newData.email = email;
    if (password) newData.password = await bcrypt.hash(password, 10);

    const updatedUser = await userService.updateUser(userId, newData);

    if (!updatedUser) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json({ message: 'Perfil actualizado con éxito', user: updatedUser });
  } catch (error) {
    handleError(res, error);
  }
};

export const deleteProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const deletedUser = await userService.deleteUser(userId);

    if (!deletedUser) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json({ message: 'Perfil eliminado con éxito' });
  } catch (error) {
    handleError(res, error);
  }
};