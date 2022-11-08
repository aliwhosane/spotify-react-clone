import { loader } from "../assets";

const Loader = ({ title }) => (
  <div className="w-full flex justify-center items-center flex-col">
    <img src={loader} alt="" className="w-32 h-32 object-contain" />
    <h1 className="font-bold text-white mt-2 text-2xl">{title || "loading"}</h1>
  </div>
);

export default Loader;
