import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import LocationPicker from "./LocationPicker";





const UserMap = ({text}) => {
  return (
    <MapContainer
      center={[35.6892523, 51.3896004]}
      zoom={13}
      scrollWheelZoom={true}
      closePopupOnClick={() => {
        console.log("HI");
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationPicker text={text}/>
    </MapContainer>
  );
};

export default UserMap;
