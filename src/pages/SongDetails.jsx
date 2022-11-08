import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { useGetSongDetailsQuery } from "../redux/services/shazamCore";

const SongDetails = () => {
  const { songid } = useParams();
  const dispatch = useDispatch();
  const { data: songData, isFetching: isFetchingSongData } =
    useGetSongDetailsQuery({ songid });
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  console.log(songData?.sections[1].text);
  return (
    <div className="flex  flex-col">
      <DetailsHeader songData={songData} />
      <div className=" mb-12">
        <h2 className="text-white text-3xl  font-bold">Lyrics:</h2>
        <div className="mt-5">
          {songData?.sections[1].type == "LYRICS" ? (
            songData?.sections[1].text.map((line, i) => {
              return (
                <p className="text-base text-white" key={i}>
                  {line}
                </p>
              );
            })
          ) : (
            <p>No lyrics found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SongDetails;
