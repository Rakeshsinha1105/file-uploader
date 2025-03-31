import React, { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [filter, setFilter] = useState("all");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const fileType = selectedFile.type;
      if (
        (filter === "images" && !fileType.startsWith("image/")) ||
        (filter === "documents" && !fileType.startsWith("application/"))
      ) {
        alert("Selected file type does not match the filter");
        return;
      }
      setFile(selectedFile);
    }
  };

  const handleUpload = () => {
    if (!file) {
      alert("No file selected for upload.");
      return;
    }
    alert(`File ready for upload: ${file.name}`);
  };

  return (
    <div className="flex flex-col items-center p-4 border rounded-lg shadow-md w-96 mx-auto mt-10">
      <div className="mb-4">
        <label className="mr-2 text-gray-700">Filter:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="all">All</option>
          <option value="images">Images</option>
          <option value="documents">Documents</option>
        </select>
      </div>
      <input
        type="file"
        onChange={handleFileChange}
        className="mb-2 border p-2 rounded"
      />
      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Upload
      </button>
      {file && <p className="mt-2 text-gray-700">Selected: {file.name}</p>}
    </div>
  );
};

export default FileUpload;
