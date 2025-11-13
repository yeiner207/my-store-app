import React, { useEffect, useState } from "react";
import axios from "axios"
export const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const testApi = async () => {
      try {
        const response = await axios.get("http://localhost:3001/");
        setData(response.data)
      } catch (error) {
        console.error(error);
      }

    };
  })
  return (
    <div className="flex justify-center items-center h.screen bg-gray-500">
      {data && <code>{JSON.stringify(data.message)}</code>}
    </div>
  );
}   