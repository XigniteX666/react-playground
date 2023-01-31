import { useParams } from "react-router-dom";

export const SerieDetail = () => {
    const {id} = useParams()
  return (
    <>
      <h1>Serie {id}</h1>
    </>
  );
};
