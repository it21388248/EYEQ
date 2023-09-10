// PrescriptionModal.js
import React, { useState } from "react";
import Modal from "react-modal";
import "./ViewPrescription.css";
import EditPrescription from "./EditPrescription";
import axios from "axios";

Modal.setAppElement("#root"); // Set root element for accessibility
const ViewPrescription = ({ isOpen, closeModal, prescriptionData }) => {
  const [EditModal, setEditModal] = useState(false);
  const id = prescriptionData._id;
  const [show, setshow] = useState(false);

  // handle close
  const handleClose = () => {
    setshow(false);
  };
  // Handele Delete function
  function handleDelete(id) {
    setshow(true);

    const confirm = window.confirm("Do you want to delete ");

    if (confirm) {
      axios
        .delete("/prescriptionFun/delete/" + id)
        .then((res) => {
          alert("Prescription has deleted sucessfully");

          //get updated list again after deletetion
          // axios
          //   .get("http://localhost:8000/prescriptionFun/")
          //   .then((res) => {
          //     // setEmployees(res.data);
          //   })
          //   .catch((err) => {
          //     alert(err.message);
          //   });

          // Reload the page to display updated cards
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Prescription Details"
    >
      <div className="mainHeader"></div>
      <div className="detailContainer">
        <div className="left">
          <div className="conHeader">
            <h1>
              Prescription Given By <br />
              {prescriptionData.doctorName}
            </h1>

            <div className="colDivs">
              <div className="colDiv-Item">
                <h4>Prescribed on </h4>
                <input disabled value={"2022-09-04"}></input>
              </div>

              <div className="colDiv-Item">
                <h4>Expire on</h4>
                <input disabled value={"2024-09-24"}></input>
              </div>
            </div>
          </div>
          <div className="conUp">
            <h2>Patient Details</h2>

            <div className="rowDivs">
              <div className="rowDiv-Item">
                <h3>First Name : </h3>
                <input disabled value={prescriptionData.fName}></input>
              </div>

              <div className="rowDiv-Item">
                <h3>Last Name :</h3>
                <input disabled value={prescriptionData.lName}></input>
              </div>

              <div className="rowDiv-Item">
                <h3>Contact Number : </h3>
                <input disabled value={prescriptionData.contact}></input>
              </div>

              <div className="rowDiv-Item">
                <h3>Date of Birth :</h3>
                <input disabled value={"2023-09-05"}></input>
              </div>
            </div>
          </div>

          <div className="conDown">
            <h2>Doctor Details</h2>

            <div className="rowDivs">
              <div className="rowDiv-Item">
                <h3>Doctor Name : </h3>
                <input disabled value={prescriptionData.doctorName}></input>
              </div>

              <div className="rowDiv-Item">
                <h3>Hospital Name :</h3>
                <input disabled value={prescriptionData.hospitalName}></input>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <h2 style={{ paddingRight: 0 }}>Prescription Details</h2>

          {/* ----- Table ------ */}
          <div
            className="flex flex-col px-8 py-3 mx-8 border-2 border-blue-400 rounded-lg"
            style={{ width: "70%", marginTop: "24px", marginBottom: 0 }}
          >
            {/* Topic */}
            <div className="flex flex-row text-sm font-semibold text-center title">
              <div
                className="flex-1 leftEye"
                style={{
                  width: "50%",
                  marginLeft: "110px",
                }}
              >
                <h4>Left Eye</h4>
              </div>

              <div
                className="flex-1 RightEye"
                style={{
                  width: "50%",
                  paddingRight: "42px",
                }}
              >
                <h4>Right Eye</h4>
              </div>
            </div>
            {/* Spehere */}
            <div className="flex flex-row my-3 text-center">
              <div className="flex-3 Spehere">
                <h5 className="text-base ">Spehere</h5>
              </div>

              <div
                className=" Spehere-left"
                style={{
                  display: "flex",
                  flex: 2,
                  marginLeft: "70px",
                }}
              >
                <input
                  disabled
                  value={prescriptionData.leftSpehere}
                  type="number"
                  // onChange={(e) => {
                  //   setLeftSpehere(e.target.value);
                  // }}
                  className="w-9/12 text-sm text-center "
                  style={{
                    border: "2px solid gray",
                    borderRadius: "5px",
                  }}
                />
              </div>

              <div
                className="flex-1 Spehere-right"
                style={{
                  display: "flex",
                  flex: 2,
                  paddingRight: "40px",
                }}
              >
                <input
                  disabled
                  value={prescriptionData.rightSpehere}
                  type="number"
                  // onChange={(e) => {
                  //   setRightSpehere(e.target.value);
                  // }}
                  className="w-9/12 text-sm text-center "
                  style={{
                    border: "2px solid gray",
                    borderRadius: "5px",
                  }}
                />
              </div>
            </div>
            {/* Cylinder */}
            <div className="flex flex-row my-3 text-center">
              <div className="flex-3 Cylinder">
                <h5 className="text-base ">Cylinder</h5>
              </div>

              <div
                className=" Cylinder-left"
                style={{
                  display: "flex",
                  flex: 2,
                  marginLeft: "70px",
                }}
              >
                <input
                  disabled
                  value={prescriptionData.leftCylinder}
                  type="number"
                  // onChange={(e) => {
                  //   setLeftCylinder(e.target.value);
                  // }}
                  className="w-9/12 text-sm text-center "
                  style={{
                    border: "2px solid gray",
                    borderRadius: "5px",
                  }}
                />
              </div>

              <div
                className="flex-1 Cylinder-right"
                style={{
                  display: "flex",
                  flex: 2,
                  paddingRight: "40px",
                }}
              >
                <input
                  disabled
                  value={prescriptionData.rightCylinder}
                  type="number"
                  // onChange={(e) => {
                  //   setRightCylinder(e.target.value);
                  // }}
                  className="w-9/12 text-sm text-center "
                  style={{
                    border: "2px solid gray",
                    borderRadius: "5px",
                  }}
                />
              </div>
            </div>
            {/* Axis */}
            <div className="flex flex-row my-3 text-center">
              <div className="flex-3 Axis">
                <h5 className="text-base ">Axis</h5>
              </div>

              <div
                className=" Axis-left"
                style={{
                  display: "flex",
                  flex: 2,
                  marginLeft: "100px",
                }}
              >
                <input
                  disabled
                  value={prescriptionData.leftAxis}
                  type="number"
                  // onChange={(e) => {
                  //   setLeftAxis(e.target.value);
                  // }}
                  className="w-9/12 text-sm text-center "
                  style={{
                    border: "2px solid gray",
                    borderRadius: "5px",
                  }}
                />
              </div>

              <div
                className="flex-1 Axis-right"
                style={{
                  display: "flex",
                  flex: 2,
                  paddingRight: "40px",
                }}
              >
                <input
                  disabled
                  value={prescriptionData.rightAxis}
                  type="number"
                  // onChange={(e) => {
                  //   setRightAxis(e.target.value);
                  // }}
                  className="w-9/12 text-sm text-center "
                  style={{
                    border: "2px solid gray",
                    borderRadius: "5px",
                  }}
                />
              </div>
            </div>
            {/* Add */}
            <div className="flex flex-row my-3 text-center">
              <div className="flex-3 Add">
                <h5 className="text-base ">Add</h5>
              </div>

              <div
                className=" Add-left"
                style={{
                  display: "flex",
                  flex: 2,
                  marginLeft: "100px",
                }}
              >
                <input
                  disabled
                  value={prescriptionData.leftAdd}
                  type="number"
                  // onChange={(e) => {
                  //   setLeftAdd(e.target.value);
                  // }}
                  className="w-9/12 text-sm text-center "
                  style={{
                    border: "2px solid gray",
                    borderRadius: "5px",
                  }}
                />
              </div>

              <div
                className="flex-1 Add-right"
                style={{
                  display: "flex",
                  flex: 2,
                  paddingRight: "40px",
                }}
              >
                <input
                  disabled
                  value={prescriptionData.rightAdd}
                  type="number"
                  // onChange={(e) => {
                  //   setRightAdd(e.target.value);
                  // }}
                  className="w-9/12 text-sm text-center "
                  style={{
                    border: "2px solid gray",
                    borderRadius: "5px",
                  }}
                />
              </div>
            </div>
            {/* Prism */}
            <div className="flex flex-row my-3 text-center">
              <div className="flex-3 Prism">
                <h5 className="text-base ">Prism</h5>
              </div>

              <div
                className=" Prism-left"
                style={{
                  display: "flex",
                  flex: 2,
                  marginLeft: "85px",
                }}
              >
                <input
                  disabled
                  value={prescriptionData.leftPrism}
                  type="text"
                  // onChange={(e) => {
                  //   setLeftPrism(e.target.value);
                  // }}
                  className="w-9/12 text-sm text-center "
                  style={{
                    border: "2px solid gray",
                    borderRadius: "5px",
                  }}
                />
              </div>

              <div
                className="flex-1 Prism-right"
                style={{
                  display: "flex",
                  flex: 2,
                  paddingRight: "40px",
                }}
              >
                <input
                  disabled
                  value={prescriptionData.rightPrism}
                  type="text"
                  // onChange={(e) => {
                  //   setRightPrism(e.target.value);
                  // }}
                  className="w-9/12 text-sm text-center "
                  style={{
                    border: "2px solid gray",
                    borderRadius: "5px",
                  }}
                />
              </div>
            </div>
            {/* 1st row */}
            <div className="flex flex-row my-2">
              <label className="relative flex-1">
                PD :
                <input
                  disabled
                  value={prescriptionData.pd}
                  type="text"
                  // onChange={(e) => {
                  //   setPd(e.target.value);
                  // }}
                  className="w-11/12 h-7 px-4 my-0.5  text-sm text-black bg-gray-200 bg-opacity-25 border-2 border-gray-400 border-opacity-50 rounded-lg "
                />
              </label>

              <label className="relative flex-1">
                BVD :
                <input
                  disabled
                  value={prescriptionData.bvd}
                  type="text"
                  // onChange={(e) => {
                  //   setBvd(e.target.value);
                  // }}
                  className="w-11/12 h-7 px-4 my-0.5  text-sm text-black bg-gray-200 bg-opacity-25 border-2 border-gray-400 border-opacity-50 rounded-lg "
                />
              </label>
            </div>

            {/* Additional Information */}
            <h4 className="my-2 text-sm font-semibold">
              Additional Information
            </h4>
            <textarea
              disabled
              value={prescriptionData.additionalInfo}
              className="h-10 bg-gray-100 border-2 border-gray"
              // onChange={(e) => {
              //   setAdditionalInfo(e.target.value);
              // }}
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="buttons">
        <div className="leftBtn">
          <button id="btnBack" onClick={closeModal}>
            Back
          </button>
        </div>
        <div className="rightBtn">
          <button
            id="btnEdit"
            onClick={() => {
              setEditModal(true);
            }}
          >
            Edit
          </button>
          <button id="btnDelete" onClick={(e) => handleDelete(id)}>
            Delete
          </button>
        </div>
      </div>

      <EditPrescription
        isVisible={EditModal}
        onClose={() => {
          setEditModal(false);
        }}
        editableId={id}
      ></EditPrescription>

      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Prescription Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure?</Modal.Body>
        <Modal.Footer>
          <button varient="secondary" onClick={handleClose}>
            Delete
          </button>
          <button varient="primary" onClick={handleClose}>
            Cancel
          </button>
        </Modal.Footer>
      </Modal> */}
    </Modal>
  );
};

export default ViewPrescription;
