import { MapContainer, TileLayer } from "react-leaflet";
import LocationPicker from "./LocationPicker";

const UserMap = ({ location }) => {
  // dynamic init location #fix_later
  return (
    <MapContainer center={[35.6892523, 51.3896004]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationPicker location={location} />
    </MapContainer>
  );
};

export default UserMap;
