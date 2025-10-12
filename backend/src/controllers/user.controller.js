
import { updateProfile, deleteProfile } from "../services/user.service.js";
import { handleSuccess, handleErrorClient, handleErrorServer } from "../Handlers/responseHandlers.js";
import { authValidation } from "../validations/auth.validations.js";

export const updateProfileController = async (req, res) => {
  try {

    const userId = req.user.sub;
    const { email, password } = req.body;

    const { error } = authValidation.validate(req.body);
    if (error) {
      return handleErrorClient(res, 400, error.details[0].message);
    }

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
