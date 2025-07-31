
import UserModel from "../models/userModel.js";

export const getUserCreations = async (req, res) => {
  try {
    const { userId } = req.auth();
    const creations = await UserModel.find({ user_id: userId }).sort({
      created_at: -1,
    });
    res.json({ success: true, creations });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export const getPublishedCreations = async (req, res) => {
  try {
const creations = await UserModel.find({ publish:true }).sort({
      created_at: -1,
    });
    res.json({ success: true, creations });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export const toggleLikeCreation = async (req, res) => {
  try {
    const { userId } = req.auth();
    const { id } = req.body;
    console.log("toggleLikeCreation => Received ID:", id);

    const creation = await UserModel.findById(id);
    if (!creation) {
      return res.json({ success: false, message: "Creation not found" });
    }

    const userIdStr = userId.toString();
    let message;

    if (creation.likes.includes(userIdStr)) {
      creation.likes = creation.likes.filter((uid) => uid !== userIdStr);
      message = "Creation Unliked";
    } else {
      creation.likes.push(userIdStr);
      message = "Creation Liked";
    }

    await creation.save();

    res.json({ success: true, message });
  } catch (error) {
    console.error(error.message);
    res.json({ success: false, message: error.message });
  }
};

