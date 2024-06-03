import React, { useContext } from "react";
import { InputContext } from "../App";
import { saveAs } from "file-saver";
import Swal from "sweetalert2";
import Loading from "./Loading";

const QRcode = () => {
  const { response, loading, setLoading } = useContext(InputContext);

  const downloadIMG = () => {
    saveAs(response, "qrCode.png");
    setTimeout(() => {
      Swal.fire({
        title: "Good job!!",
        text: "You Downloaded you QR Code!!",
        icon: "success",
      });
    }, 3000);
  };
  return (
    <div className="bg-gray-100 rounded-r-md flex flex-col items-center justify-center">
      <div>
        {loading ? <Loading /> : <img className="w-48" src={response} alt="" />}

        <button
          onClick={downloadIMG}
          className="bg-blue-400 text-white mt-2 px-4 py-1 w-full "
        >
          Download QR
        </button>
      </div>
    </div>
  );
};

export default QRcode;
