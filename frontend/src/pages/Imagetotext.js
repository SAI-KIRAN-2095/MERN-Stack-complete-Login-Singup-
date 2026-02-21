import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyDR_qYBWTYFS4GdjFBzMheJmnMbUfecBok";
const genAI = new GoogleGenerativeAI(API_KEY);

function Imagetotext() {
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);
  const [userText, setUserText] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageFile(file);

    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile || !userText)
      return alert("Please provide image and prompt!");

    setLoading(true);
    setCaption("");

    const reader = new FileReader();
    reader.onloadend = async () => {
      try {
        const base64Image = reader.result.split(",")[1];

        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const result = await model.generateContent([
          {
            inlineData: {
              mimeType: imageFile.type,
              data: base64Image,
            },
          },
          { text: userText },
        ]);

        const text = result.response.text();

        const cleanParagraph = text
          .replace(/\*|•|·|●|-/g, "")
          .replace(/\n+/g, " ")
          .replace(/\s\s+/g, " ")
          .trim();

        setCaption(cleanParagraph);
      } catch (error) {
        console.error(error);
        setCaption("⚠️ Failed to generate caption.");
      } finally {
        setLoading(false);
      }
    };

    reader.readAsDataURL(imageFile);
  };

return (
  <div className="container-fluid vh-100 bg-dark text-white d-flex align-items-center">
    <div className="row w-100">

      {/* LEFT SIDE — FORM */}
      <div className="col-lg-6 d-flex justify-content-center">
        <div className="card bg-secondary p-4 shadow-lg" style={{ width: "90%", borderRadius: "15px" }}>
          <h3 className="text-center mb-3"> Image To Text AI</h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="file"
                className="form-control"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>

            <div className="mb-3">
              <textarea
                className="form-control"
                rows="4"
                placeholder="Enter your prompt..."
                value={userText}
                onChange={(e) => setUserText(e.target.value)}
              />
            </div>

            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? "Generating..." : "Generate Text"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* RIGHT SIDE — IMAGE + OUTPUT */}
      <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">

        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="img-fluid rounded shadow mb-4"
            style={{ maxHeight: "300px" }}
          />
        )}

        {caption && (
          <div className="card bg-light text-dark p-3 shadow" style={{ width: "80%" }}>
            <h6>Generated Output:</h6>
            <p className="mb-0">{loading ? "Processing..." : caption}</p>
          </div>
        )}

      </div>

    </div>
  </div>
);
}

export default Imagetotext;