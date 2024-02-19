import { useDispatch, useSelector } from "react-redux";
import { fetchCoordinate, mapSelectors } from "./mapSlice";
import { useEffect } from "react";

const Beranda = () => {
  const dispatch = useDispatch();
  const coordinates = useSelector(mapSelectors.selectAll);

  useEffect(() => {
    dispatch(fetchCoordinate() as any);
  }, []);
  return <div>Beranda</div>;
};

export default Beranda;
