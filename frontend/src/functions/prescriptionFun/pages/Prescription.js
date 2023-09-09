import React, { Fragment, useEffect, useState } from "react";
import AddPrescription from "./AddPrescription";
import axios from "axios";
import "./Prescription.css";
import Card from "./Card";
import back2 from "./Add a New Prescription.png";
import ViewPrescription from "./ViewPrescription";
import Layout from "../../../components/Layout";

export const Prescription = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8000/prescriptionFun/");
      setCardData(res.data);
    };
    fetchData();
    console.log(cardData);
  }, []);

  // Parse the ISO date string and create a Date object
  const parsedPresDate = new Date(cardData.presDate);
  const parsedExpDate = new Date(cardData.expDate);

  // Format the dates as needed (e.g., "MM/DD/YYYY" or "September 20, 2023")
  const formattedPresDate = parsedPresDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedExpDate = parsedExpDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // ----------------- for View Modal ------------------
  const [selectedPrescription, setSelectedPrescription] = useState(null);
  const [viewModal, setViewModal] = useState(false);

  const handleViewMore = (prescriptionData) => {
    setSelectedPrescription(prescriptionData);
    setViewModal(true);
  };

  // ---------------- for Add Model ---------------------
  const [showModal, setShowModal] = useState(false);
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [contact, setContact] = useState("");
  const [birthOfDate, setBirthOfDate] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [presDate, setPresDate] = useState("");
  const [expDate, setExpDate] = useState("");
  const [leftSpehere, setLeftSpehere] = useState("");
  const [rightSpehere, setRightSpehere] = useState("");
  const [leftCylinder, setLeftCylinder] = useState("");
  const [rightCylinder, setRightCylinder] = useState("");
  const [leftAxis, setLeftAxis] = useState("");
  const [rightAxis, setRightAxis] = useState("");
  const [leftAdd, setLeftAdd] = useState("");
  const [rightAdd, setRightAdd] = useState("");
  const [leftPrism, setLeftPrism] = useState("");
  const [rightPrism, setRightPrism] = useState("");
  const [pd, setPd] = useState("");
  const [bvd, setBvd] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newPrescription = {
      fName,
      lName,
      contact,
      birthOfDate,
      doctorName,
      hospitalName,
      presDate,
      expDate,
      leftSpehere,
      rightSpehere,
      leftCylinder,
      rightCylinder,
      leftAxis,
      rightAxis,
      leftAdd,
      rightAdd,
      leftPrism,
      rightPrism,
      pd,
      bvd,
      additionalInfo,
    };

    axios
      .post("http://localhost:5000/prescriptionFun/add", newPrescription)
      .then(() => {
        alert("Prescription Added");
        setfName("");
        setlName("");
      })
      .catch((err) => {
        alert(err);
      });
  }
  return (
    <Layout>
      <Fragment>
        {/* <script
        src="https://kit.fontawesome.com/11df75e725.js"
        crossorigin="anonymous"
      ></script> */}

        <div
          className="prescription-header"
          style={{
            height: "500px",
            backgroundColor: "dodgerblue",
            backgroundImage: 'url("../images/back2.jpg")',
          }}
        >
          <h1
            style={{
              textAlign: "center",
              paddingTop: "180px",
              fontFamily: "Monaco",
              fontWeight: "bold",
              fontSize: "35px",
            }}
          >
            Your Prescriptions
          </h1>
          <button
            onClick={() => {
              setShowModal(true);
            }}
            className="px-2 py-1 font-bold text-blue-600 bg-white border-2 border-blue-500 cursor-pointer rounded-xl hover:text-blue-900 hover:bg-blue-100"
          >
            Add New Prescription
          </button>
        </div>

        <br />
        <br />

        <div
          className="cardMain"
          style={{
            display: "grid",
            justifyContent: "center",
            placeItems: "center",
            gridGap: "90px",
            gridTemplateColumns: "repeat(3, 300px)",
          }}
        >
          {cardData &&
            cardData.map((cardData) => (
              <Card
                key={cardData.id}
                doctorName={cardData.doctorName}
                hospitalName={cardData.hospitalName}
                presDate={"2020.05.24"}
                expDate={"2024.09.23"}
                onCardClick={() => handleViewMore(cardData)}
              />
            ))}
        </div>

        {/* ---------------------------- View prescription model render -------------------------- */}
        {viewModal && (
          <ViewPrescription
            isOpen={viewModal}
            closeModal={() => setViewModal(false)}
            prescriptionData={selectedPrescription}
          />
        )}

        {/* ---------------------------- Add prescription model render -------------------------- */}
        <AddPrescription
          isVisible={showModal}
          onClose={() => {
            setShowModal(false);
          }}
        >
          <div>
            <img src={back2} style={{ height: "200px", width: "600px" }}></img>
            {/* <h3
            className="py-2 mx-2 text-2xl font-extrabold text-blue-500"
            style={{
              borderBottom: "3px solid #4287ff",
              margineft: "10px",
              marginRight: "5px",
              fontWeight: "bold",
            }}
          >
            Add a New Prescription
          </h3> */}
          </div>

          <div
            className="h-[45vh] overflow-y-auto my-1"
            style={{ maxHeight: "100vh", overflowY: "auto" }}
          >
            <form className="flex flex-col px-6 py-4 lg:px-8 justify-items-center">
              <div className="patient-info">
                {/* <i className="text-black fa-solid fa-bars"></i> */}
                <h2
                  style={{
                    borderBottom: "2px solid #898b8f",
                    width: "180px",
                    paddingBottom: "5px",
                    fontWeight: "bold",
                  }}
                >
                  Patient Details
                </h2>
                {/* 1st row */}
                <div className="flex flex-row my-3">
                  <label className="relative flex-1">
                    <span
                      className=""
                      style={{
                        marginLeft: "10px",
                        fontFamily: "Verdana",
                        fontSize: "13px",
                      }}
                    >
                      First Name :
                    </span>
                    <input
                      type="text"
                      id="input1"
                      onChange={(e) => {
                        setfName(e.target.value);
                      }}
                      //placeholder="First Name"
                      className="w-11/12 h-8 px-4 my-0.5 mx-2 text-sm text-black bg-gray-300 bg-opacity-25 border-2 border-gray-400 border-opacity-50 rounded-lg "
                    />
                  </label>

                  <label className="relative flex-1">
                    <span
                      className=""
                      style={{
                        marginLeft: "10px",
                        fontFamily: "Verdana",
                        fontSize: "13px",
                      }}
                    >
                      Last Name :
                    </span>
                    <input
                      type="text"
                      id="input2"
                      onChange={(e) => {
                        setlName(e.target.value);
                      }}
                      //placeholder="Last Name"
                      className="w-11/12 h-8 px-4 my-0.5 mx-2 text-sm text-black bg-gray-300 bg-opacity-25 border-2 border-gray-400 border-opacity-50 rounded-lg "
                    />
                  </label>
                </div>

                {/* 2nd row */}
                <div className="flex flex-row my-3">
                  <label className="relative flex-1">
                    <span
                      className=""
                      style={{
                        marginLeft: "10px",
                        fontFamily: "Verdana",
                        fontSize: "13px",
                      }}
                    >
                      Contact Number :
                    </span>
                    <input
                      type="text"
                      id="input3"
                      onChange={(e) => {
                        setContact(e.target.value);
                      }}
                      className="w-11/12 h-8 px-4 mx-2 my-0.5 text-sm text-black bg-gray-300 bg-opacity-25 border-2 border-gray-400 border-opacity-50 rounded-lg "
                    />
                  </label>

                  <label className="relative flex-1">
                    <span
                      className=""
                      style={{
                        marginLeft: "10px",
                        fontFamily: "Verdana",
                        fontSize: "13px",
                      }}
                    >
                      Date of Birth :
                    </span>
                    <input
                      type="date"
                      id="input4"
                      onChange={(e) => {
                        setBirthOfDate(e.target.value);
                      }}
                      className="w-11/12 h-8 px-4 mx-2 my-0.5 text-sm text-black bg-gray-300 bg-opacity-25 border-2 border-gray-400 border-opacity-50 rounded-lg "
                    />
                  </label>
                </div>
              </div>

              {/* Doctor details */}
              <div className="doctor-info">
                <h2
                  style={{
                    borderBottom: "2px solid #898b8f",
                    width: "180px",
                    paddingBottom: "5px",
                    fontWeight: "bold",
                  }}
                >
                  Doctor Details
                </h2>
                {/* 1st row */}
                <div className="flex flex-row my-3">
                  <label className="relative flex-1">
                    <span
                      className=""
                      style={{
                        marginLeft: "10px",
                        fontFamily: "Verdana",
                        fontSize: "13px",
                      }}
                    >
                      Doctor Name :
                    </span>
                    <input
                      type="text"
                      id="input5"
                      onChange={(e) => {
                        setDoctorName(e.target.value);
                      }}
                      className="w-11/12 h-8 px-4 mx-2 my-0.5 text-sm text-black bg-gray-300 bg-opacity-25 border-2 border-gray-400 border-opacity-50 rounded-lg "
                    />
                  </label>

                  <label className="relative flex-1">
                    <span
                      className=""
                      style={{
                        marginLeft: "10px",
                        fontFamily: "Verdana",
                        fontSize: "13px",
                      }}
                    >
                      Hospital Name :
                    </span>
                    <input
                      type="text"
                      id="input6"
                      onChange={(e) => {
                        setHospitalName(e.target.value);
                      }}
                      className="w-11/12 h-8 px-4 mx-2 my-0.5 text-sm text-black bg-gray-300 bg-opacity-25 border-2 border-gray-400 border-opacity-50 rounded-lg "
                    />
                  </label>
                </div>
              </div>

              {/* Prescription details */}
              <div className="prescription-info">
                <h2
                  style={{
                    borderBottom: "2px solid #898b8f",
                    width: "180px",
                    paddingBottom: "5px",
                    fontWeight: "bold",
                  }}
                >
                  Prescription Details
                </h2>
                {/* 1st row */}
                <div className="flex flex-row my-3">
                  <label className="relative flex-1">
                    <span
                      className=""
                      style={{
                        marginLeft: "10px",
                        fontFamily: "Verdana",
                        fontSize: "13px",
                      }}
                    >
                      Date of Prescription :
                    </span>
                    <input
                      type="date"
                      id="input7"
                      onChange={(e) => {
                        setPresDate(e.target.value);
                      }}
                      className="w-11/12 h-8 px-4 mx-2 my-0.5 text-sm text-black bg-gray-300 bg-opacity-25 border-2 border-gray-400 border-opacity-50 rounded-lg "
                    />
                  </label>

                  <label className="relative flex-1">
                    <span
                      className=""
                      style={{
                        marginLeft: "10px",
                        fontFamily: "Verdana",
                        fontSize: "13px",
                      }}
                    >
                      Date of Expiration :
                    </span>
                    <input
                      type="date"
                      id="input8"
                      onChange={(e) => {
                        setExpDate(e.target.value);
                      }}
                      className="w-11/12 h-8 px-4 mx-2 my-0.5 text-sm text-black bg-gray-300 bg-opacity-25 border-2 border-gray-400 border-opacity-50 rounded-lg "
                    />
                  </label>
                </div>

                {/* Table */}
                <div
                  className="flex flex-col px-4 py-3 mx-2 my-6 border-2 border-blue-400 rounded-lg"
                  style={{ marginRight: "15px" }}
                >
                  {/* Topic */}
                  <div className="flex flex-row text-sm font-semibold text-center title">
                    <div
                      className="flex-1 leftEye"
                      style={{
                        marginLeft: "90px",
                      }}
                    >
                      <h3>Left Eye</h3>
                    </div>

                    <div
                      className="flex-1 RightEye"
                      style={{
                        paddingRight: "80px",
                      }}
                    >
                      <h3>Right Eye</h3>
                    </div>
                  </div>
                  {/* Spehere */}
                  <div className="flex flex-row my-3 text-center">
                    <div className="flex-3 Spehere">
                      <h2 className="text-base ">Spehere</h2>
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
                        type="number"
                        onChange={(e) => {
                          setLeftSpehere(e.target.value);
                        }}
                        className="w-1/2 text-sm text-center"
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
                        type="number"
                        onChange={(e) => {
                          setRightSpehere(e.target.value);
                        }}
                        className="w-1/2 text-sm text-center"
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
                      <h2 className="text-base ">Cylinder</h2>
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
                        type="number"
                        onChange={(e) => {
                          setLeftCylinder(e.target.value);
                        }}
                        className="w-1/2 text-sm text-center"
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
                        type="number"
                        onChange={(e) => {
                          setRightCylinder(e.target.value);
                        }}
                        className="w-1/2 text-sm text-center"
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
                      <h2 className="text-base ">Axis</h2>
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
                        type="number"
                        onChange={(e) => {
                          setLeftAxis(e.target.value);
                        }}
                        className="w-1/2 text-sm text-center"
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
                        type="number"
                        onChange={(e) => {
                          setRightAxis(e.target.value);
                        }}
                        className="w-1/2 text-sm text-center"
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
                      <h2 className="text-base ">Add</h2>
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
                        type="number"
                        onChange={(e) => {
                          setLeftAdd(e.target.value);
                        }}
                        className="w-1/2 text-sm text-center"
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
                        type="number"
                        onChange={(e) => {
                          setRightAdd(e.target.value);
                        }}
                        className="w-1/2 text-sm text-center"
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
                      <h2 className="text-base ">Prism</h2>
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
                        type="text"
                        onChange={(e) => {
                          setLeftPrism(e.target.value);
                        }}
                        className="w-1/2 text-sm text-center"
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
                        type="text"
                        onChange={(e) => {
                          setRightPrism(e.target.value);
                        }}
                        className="w-1/2 text-sm text-center"
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
                        type="text"
                        onChange={(e) => {
                          setPd(e.target.value);
                        }}
                        className="w-11/12 h-7 px-4 my-0.5  text-sm text-black bg-gray-200 bg-opacity-25 border-2 border-gray-400 border-opacity-50 rounded-lg "
                      />
                    </label>

                    <label className="relative flex-1">
                      BVD :
                      <input
                        type="text"
                        onChange={(e) => {
                          setBvd(e.target.value);
                        }}
                        className="w-11/12 h-7 px-4 my-0.5  text-sm text-black bg-gray-200 bg-opacity-25 border-2 border-gray-400 border-opacity-50 rounded-lg "
                      />
                    </label>
                  </div>

                  {/* Additional Information */}
                  <h3 className="my-2 text-sm font-semibold">
                    Additional Information
                  </h3>
                  <textarea
                    className="h-8 h-20 bg-gray-100 border-2 border-gray"
                    onChange={(e) => {
                      setAdditionalInfo(e.target.value);
                    }}
                  />
                </div>
              </div>
            </form>
          </div>
          <div
            className="mx-8 btn-div"
            style={{ marginRight: "5px", marginLeft: "5px" }}
          >
            <button
              onClick={sendData}
              className="w-full px-3 py-2 text-sm text-white rounded-lg bg-blue-950"
            >
              Submit
            </button>
          </div>
        </AddPrescription>
      </Fragment>
    </Layout>
  );
};

export default Prescription;
