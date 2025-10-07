
import { updateProfile, deleteProfile } from "../services/user.service.js";



export const updateProfileController = async (req, res) => {
  try {

    console.log("Payload del token:", req.user);

    const userId = req.user.sub;
    const { email, password } = req.body;

    const updatedUser = await updateProfile(userId, { email, password });
    res.status(200).json({ message: 'Perfil actualizado con éxito', user: updatedUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteProfileController = async (req, res) => {
  try {
    const userId = req.user.sub;
    const result = await deleteProfile(userId);
    res.status(200).json({ message: 'Perfil eliminado con éxito' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
