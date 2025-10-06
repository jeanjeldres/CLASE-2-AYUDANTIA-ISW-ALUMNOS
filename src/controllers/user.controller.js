
import { handleSuccess, handleErrorClient, handleErrorServer } from "../Handlers/responseHandlers.js";
import { updateProfile, deleteProfile } from "../services/user.service.js";



export const updateProfileController = async (req, res) => {
  try {
    const userId = req.user.id;
    const { email, password } = req.body;

    const updatedUser = await updateProfile(userId, { email, password });
    res.status(200).json({ message: 'Perfil actualizado con éxito', user: updatedUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteProfileController = async (req, res) => {
  try {
    const userId = req.user.id;
    const result =await deleteProfile(userId);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
