import React from "react";

const AddPrescription = ({ isVisible, onClose, children }) => {
  if (!isVisible) {
    return null;
  }

  // const handleClose = (e) => {
  //   if (e.target.id == "wrapper") onClose();
  // };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center backdrop-blur-sm"
      style={{
        backgroundImage: `url("../images/back4.jpg")`,
        backgroundColor: "#b1c8de",
      }}
      id="wrapper"
    >
      {/* Model content */}
      <div className="w-[600px] flex flex-col">
        <button
          className="text-xl text-white place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>

        {/* form content */}
        <div className="p-2 bg-white rounded-lg ">{children}</div>
      </div>
    </div>
  );
};

export default AddPrescription;
