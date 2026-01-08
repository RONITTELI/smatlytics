import { useState } from "react";
import api from "../services/api";

export default function CSVUpload({ onUpload }) {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await api.post("/dataset/upload", formData);
    onUpload(res.data);
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload CSV</button>
    </div>
  );
}
