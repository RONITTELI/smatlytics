// src/services/api.js

export const uploadAndClean = async (file) => {
  if (!file) {
    throw new Error("No file selected");
  }

  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("http://localhost:5000/upload-clean", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    let errorMessage = "Failed to upload or clean file";
    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorMessage;
    } catch (err) {}
    throw new Error(errorMessage);
  }

  return response;
};
