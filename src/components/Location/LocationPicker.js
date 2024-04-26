import { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

const LocationPicker = ({ text }) => {
  const [location, setLocation] = useState();

  useMapEvents({
    click: (event) => {
      const { lat, lng } = event.latlng;
      setLocation({ lat, lng });
    },
  });

  return location ? (
    <Marker position={[location.lat, location.lng]}>
      <Popup>{text}</Popup>
    </Marker>
  ) : (
    <></>
  );
};

export default LocationPicker;
