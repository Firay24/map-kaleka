import { tentang, visi } from "../../util/data";

const Tentang = () => {
  return (
    <div className="flex flex-col px-10">
      <div className="absolute inset-0 flex justify-center top-20 mt-4 md:mt-20 max-w-custom">
        <h1 className="font-semibold text-3xl md:text-5xl text-white">
          Tentang Kami
        </h1>
      </div>
      <p className="text-xl mt-5">{tentang[0]}</p>
      <p className="text-xl mt-2">{tentang[1]}</p>
      <div className="mt-5 flex flex-col gap-y-4">
        <div>
          <p className="font-bold underline text-xl">Vision</p>
          <p className="text-xl mt-2">{visi.visi}</p>
        </div>
        <div>
          <p className="font-bold underline text-xl">Mission</p>
          <p className="text-xl mt-2">{visi.misi}</p>
        </div>
        <div>
          <p className="font-bold underline text-xl">Purpose</p>
          <p className="text-xl mt-2">{visi.purpose}</p>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
