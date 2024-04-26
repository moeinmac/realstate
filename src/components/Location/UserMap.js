import { MapContainer, TileLayer, Marker } from "react-leaflet";
import LocationPicker from "./LocationPicker";

const UserMap = ({ location, initLocation }) => {
  // dynamic init location #fix_later
  return (
    <MapContainer
      center={initLocation ? [initLocation.lat, initLocation.lng] : [35.6892523, 51.3896004]}
      zoom={16}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {!location && <Marker position={[initLocation.lat, initLocation.lng]}></Marker>}
      {location && <LocationPicker location={location} />}
    </MapContainer>
  );
};

export default UserMap;
