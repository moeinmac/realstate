import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const UserMap = () => {
  return (
    <MapContainer center={[35.6892523, 51.3896004]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[35.6892523, 51.3896004]}>
        {/* <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup> */}
      </Marker>
    </MapContainer>
  );
};

export default UserMap;
