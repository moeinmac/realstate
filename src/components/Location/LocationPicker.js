import { Marker, Popup, useMapEvents } from "react-leaflet";

const LocationPicker = ({ location }) => {
  useMapEvents({
    click: (event) => {
      const { lat, lng } = event.latlng;
      location.setdata({ lat, lng });
    },
  });

  return location.data ? (
    <Marker position={[location.data.lat, location.data.lng]}>
      <Popup>{location.text}</Popup>
    </Marker>
  ) : (
    <></>
  );
};

export default LocationPicker;
