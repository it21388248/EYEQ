const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

dotenv.config();

//connect db
connectDB();
//rest obejct
const app = express();
app.use(cors());

//middlewares
app.use(express.json());
app.use(moragan("dev"));

//routes

app.use("/api/v1/user", require("./routes/userRoutes"));

//prescription fun
const prescriptionRouter = require("./routes/PrescriptionFormRouter");
app.use("/prescriptionFun", prescriptionRouter);

//OCR Controll
// const ocrRouter = require("./controllers/UploadController");
// app.use("/prescriptionFun/upload", ocrRouter);
const ocrRouter = require("./controllers/UploadController");
app.use("/api/ocr", ocrRouter);

//listen port

const port = process.env.PORT || 8000;

//listen port

app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
