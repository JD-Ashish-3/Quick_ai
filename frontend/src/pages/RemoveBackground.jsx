import { Eraser, Sparkles } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const RemoveBackground = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");

  const { getToken } = useAuth();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("image", input);
      const { data } = await axios.post(
        "/api/ai/remove-background",
          formData,  
          {       
          headers: {
            Authorization: `Bearer ${await getToken()}`,
          },
        }
      );
      console.log(data);
      if (data.success) {
        setContent(data.content);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="h-full overflow-y-scroll p-6 flex flex-col lg:flex-row items-start gap-4 text-slate-700">
      {/* Left column (form) */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full lg:w-1/2 p-4 bg-white rounded-lg border border-gray-200"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#FF4938]" />
          <h1 className="text-xl font-semibold">Background Removal</h1>
        </div>

        <p className="mt-6 text-sm font-medium">Upload Image</p>
        <input
          onChange={(e) => setInput(e.target.files[0])}
          type="file"
          accept="image/*"
          className="text-gray-600 w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
          required
        />

        <p className="text-cs text-gray-500 font-light mt-1">Supports JPG , PNG , and other image formats</p>

        <button
        disabled={loading}
          type="submit"
          className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#F6AB41] to-[#FF4938] text-white px-4 py-2 mt-6 text-sm rounded-lg"
        >
          {
            loading ? 
            <span className="w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin"></span>
            :
            <Eraser className="w-5" />
          }
          Remove Background
        </button>
      </form>

      {/* Right column (output) */}
      <div className="w-full lg:w-1/2 p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96">
        <div className="flex items-center gap-3">
          <Eraser className="w-5 h-5 text-[#FF4938]" />
          <h1 className="text-xl font-semibold">Processed Image</h1>
        </div>

        {
          !content ? (<div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400 text-center">
            <Eraser className="w-9 h-9" />
            <p>Upload an image and click "remove background" to get started</p>
          </div>
        </div>):(<img src={content} alt="image" className="mt-3 w-full h-full"/>)
        }

        {/* Placeholder content */}
        
      </div>
    </div>
  );
};

export default RemoveBackground;
