import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngTuple } from "leaflet";
import { useLocation } from "react-router-dom";

// const defaultCenter: LatLngTuple = [38.9072, -77.0369];
const defaultCenter: LatLngTuple = [-6.8841, 107.5413];
const defaultZoom = 8;

const Detail = () => {
  const mapRef = useRef<any>(null);
  const location = useLocation();
  const [current, setCurrent] = useState<number[]>([]);

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
    const path = location.pathname.split("/")[1];
    const selectedKabupaten = kabupaten.find((kab) => kab.name === path);
    if (selectedKabupaten) {
      setCurrent(selectedKabupaten.koordinat);
    } else {
      setCurrent([]);
    }
  }, [location.pathname]);

  return (
    <div className="h-screen flex flex-col justify-center items-center z-0">
      {" "}
      <MapContainer
        className="h-full md:h-4/6 w-full md:w-3/4 overflow-hidden z-0 md:-mt-20"
        center={defaultCenter}
        zoom={defaultZoom}
        ref={mapRef}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Circle
          center={[current[0], current[1]]}
          radius={9000}
          fillOpacity={0.5}
        ></Circle>
      </MapContainer>
      <div className="mt-10">
        {current.length > 0 ? (
          <p className="font-bold">{`Coordinates Details: ${current[0]}, ${current[1]}`}</p>
        ) : null}
      </div>
    </div>
  );
};

export default Detail;
