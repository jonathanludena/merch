import { useState, useEffect } from "react";
import axios from "axios";

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${String(
    process.env.API_KEY_GMAP
  )}`;

  useEffect(async () => {
    if (address) {
      try {
        const response = await axios.get(API);
        setMap(response.data.results[0].geometry.location);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  return map;
};

export default useGoogleAddress;
