import { createContext, useState } from "react";
import InputForm from "./Components/InputForm";
import QRcode from "./Components/QRcode";
import axios from "axios";

export const InputContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState({
    url: "",
    color: "",
  });
  console.log(inputValue);

  const [response, setResponse] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const config = {
    headers: { Authorization: "Bearer d0d2d8f0-1ece-11ef-bff1-a71dc4037a46" },
  };
  const bodyParameters = {
    colorDark: inputValue.color,
    qrCategory: "url",
    text: inputValue.url,
  };
  const getQrCode = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        "https://qrtiger.com/api/qr/static",
        bodyParameters,
        config
      );
      setResponse(res.data.url);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    inputValue,
    setInputValue,
    getQrCode,
    loading,
    response,
    error,
  };
  return (
    <div className="bg-blue-500 h-screen pt-32 px-2 ">
      <h1 className="flex  justify-center -mt-10 text-4xl font-semibold text-white ">
        Generador de QR
      </h1>

      <div className="container mx-auto max-w-4xl bg-white rounded-md shadow mt-10">
        <div className="md:grid md:grid-cols-3">
          <InputContext.Provider value={value}>
            <InputForm />
            <QRcode />
          </InputContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
