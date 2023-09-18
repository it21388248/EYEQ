import axios from "axios";
import React, { useState } from "react";
import { json } from "react-router-dom";

const Upload = ({ onDataExtracted }) => {
  const [imagePath, setImagePath] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setImagePath(selectedFile);
      console.log("Image Changed " + selectedFile.name);

      setImageURL(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", imagePath);
    console.log("Upload and Extract button clicked");

    axios
      .post("/api/ocr/extract", formData)
      .then(function (res) {
        console.log("Image uploaded successfully: " + res.message);

        // Call the function from props and pass the extracted data
        // props.onDataExtracted(extractedData);
      })
      .catch(function (error) {
        console.log("Error uploading image: " + error.message);
      });
  };

  const handleDataExtraction = (extractedData) => {
    // Call the onDataExtracted function to pass the extracted data to the parent component (Prescription.js)
    onDataExtracted(extractedData);
    console.log("handleDataExtraction method called with extractedData : ");
    for (const key in extractedData) {
      if (Object.hasOwnProperty.call(extractedData, key)) {
        console.log(`${key}: ${extractedData[key]}`);
      }
    }
  };

  const handleFormFill = async () => {
    try {
      const response = await fetch("/api/ocr/getExtractedData");

      if (response.ok) {
        const data = await response.json();
        // console.log("Extracted data from backend:", data);
        // console.log(typeof data);
        handleDataExtraction(data);
      } else {
        console.error(
          "Error retrieving data from the server:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
    }
  };

  return (
    <div>
      <form id="upload-form" encType="multipart/form-data">
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleChange}
        />
        <button
          type="button"
          //   id="upload-button"
          onClick={handleUpload} // Use the handleUpload function directly
          style={{
            border: "1px solid black",
            backgroundColor: "yellow",
            padding: "5px",
          }}
        >
          Upload
        </button>

        <button
          type="button"
          onClick={handleFormFill}
          style={{
            border: "1px solid black",
            backgroundColor: "yellow",
            padding: "5px",
          }}
        >
          Fill Form
        </button>
      </form>
      {/* <div id="response"></div> */}
      <div className="imageDisplay">
        <img src={imageURL} style={{ width: "150px" }} alt="Uploaded" />
      </div>
    </div>
  );
};

export default Upload;
