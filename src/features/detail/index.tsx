import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngTuple } from "leaflet";
import { useLocation } from "react-router-dom";
import { kabupaten } from "../../util/data";

// const defaultCenter: LatLngTuple = [38.9072, -77.0369];
const defaultCenter: LatLngTuple = [-6.8841, 107.5413];
const defaultZoom = 8;

const Detail = () => {
  const mapRef = useRef<any>(null);
  const location = useLocation();
  const [current, setCurrent] = useState<number[]>([]);

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
      <div className="absolute inset-0 flex justify-center top-20 mt-4 md:mt-20 max-w-custom">
        <h1 className="font-semibold text-3xl md:text-5xl text-white">
          Detail Coordinate
        </h1>
      </div>
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
          <p className="font-bold text-2xl">{`Coordinates Details: ${current[0]}, ${current[1]}`}</p>
        ) : null}
      </div>
    </div>
  );
};

export default Detail;
