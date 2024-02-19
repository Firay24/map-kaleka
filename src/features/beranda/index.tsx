import { useDispatch, useSelector } from "react-redux";
import { fetchCoordinate, mapSelectors } from "./mapSlice";
import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngTuple } from "leaflet";
import { useNavigate } from "react-router-dom";

// const defaultCenter: LatLngTuple = [38.9072, -77.0369];
const defaultCenter: LatLngTuple = [-6.8841, 107.5413];
const defaultZoom = 8;

const Beranda = () => {
  const dispatch = useDispatch();
  const mapRef = useRef<any>(null);
  const navigate = useNavigate();
  const coordinates = useSelector(mapSelectors.selectAll);

  const kabupaten = [
    {
      name: "bogor",
      koordinat: [-6.5971, 106.806],
    },
    {
      name: "bandung",
      koordinat: [-6.8841, 107.5413],
    },
    {
      name: "cirebon",
      koordinat: [-6.732, 108.5523],
    },
  ];

  useEffect(() => {
    dispatch(fetchCoordinate() as any);
  }, [dispatch]);

  return (
    <div className="h-screen flex flex-col items-center overflow-hidden z-0">
      <MapContainer
        className="h-full md:h-4/6 w-full md:w-3/4 overflow-hidden z-0 md:mt-10"
        center={defaultCenter}
        zoom={defaultZoom}
        ref={mapRef}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {kabupaten.map((kab: any, index: number) => (
          <Circle
            key={index}
            center={[kab.koordinat[0], kab.koordinat[1]]}
            radius={9000}
            fillOpacity={0.5}
          >
            <Popup>
              <div
                className="cursor-pointer text-red-600 font-semibold"
                onClick={() => navigate(kab.name)}
              >
                Lihat detail
              </div>
            </Popup>
          </Circle>
        ))}
      </MapContainer>
    </div>
  );
};

export default Beranda;
