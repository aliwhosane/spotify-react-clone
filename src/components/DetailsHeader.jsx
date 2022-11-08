import { Link } from "react-router-dom";

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const arData = artistData?.artists[artistsId]?.attributes;

  return (
    <div className="relative w-full flex flex-col mb-4">
      <div className="w-full bg-gradient-to-1 from-transparent to-black sm:h-48 h-28">
        <div className="absolute inset-0 flex items-center">
          <img
            className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
            src={
              artistId
                ? arData?.artwork?.url
                    .replace("{w}", "500")
                    .replace("{h}", "500")
                : songData?.images?.coverart
            }
            alt=""
          />
          <div className="ml-5">
            <p className="font-bold  sm:text-3xl text-xl text-white">
              {artistId ? arData.name : songData?.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
