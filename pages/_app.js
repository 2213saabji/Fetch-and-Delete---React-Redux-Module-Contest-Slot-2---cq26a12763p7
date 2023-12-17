import "@/styles/globals.css";
import React, { useEffect, useState, useContext } from "react";
export const AuthContext = React.createContext();

export default function App({ Component, pageProps }) {
  const [data, setData] = useState([]);
  const [msg, setMsg] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const API = "https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses";

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const contextValue = {
    data,
    setData,
    msg,
    setMsg,
    isDeleting,
    setIsDeleting,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}
