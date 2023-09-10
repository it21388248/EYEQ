const router = require("express").Router();
let Prescription = require("../models/PrescriptionFormModel");

//http://localhost:3000/prescription/add
router.route("/add").post((req, res) => {
  const {
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
  } = req.body;

  const newPrescription = new Prescription({
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
  });

  newPrescription
    .save()
    .then(() => {
      res.json("Prescription Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//http://localhost:5000/prescription/
router.route("/").get((req, res) => {
  Prescription.find()
    .then((prescriptions) => {
      res.json(prescriptions);
    })
    .catch((err) => {
      console.log(err);
    });
});

// router.route("/").get((req, res) => {
//   Prescription.find((err, data) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(data);
//     }
//   });
// });

//http://localhost:5000/prescription/update/:id
router.route("/update/:id").put(async (req, res) => {
  let prescriptionId = req.params.id;

  const {
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
  } = req.body; // destructure method

  const updatePrescription = {
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

  const update = await Prescription.findByIdAndUpdate(
    prescriptionId,
    updatePrescription
  )
    .then(() => {
      res.status(200).send({ status: "Prescription Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message() });
    });
});

//http://localhost:5000/prescription/delete/:id
router.route("/delete/:id").delete(async (req, res) => {
  let prescriptionId = req.params.id;

  await Prescription.findByIdAndDelete(prescriptionId)
    .then(() => {
      res.status(200).send({ status: "Prescription deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete prescription", error: err.message });
      //500 internal server error
    });
});

// --------- Get data of a particular prescription----------
router.route("/get/:id").get(async (req, res) => {
  try {
    const prescriptionId = req.params.id;
    
    // Assuming 'Prescription' is a mongoose model
    const prescription = await Prescription.findById(prescriptionId);

    if (!prescription) {
      return res.status(404).send({ status: "Prescription not found" });
    }

    res.status(200).send({
      status: "Prescription successfully fetched",
      prescription: prescription,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ status: "Error with get prescription" });
  }
});

module.exports = router;

