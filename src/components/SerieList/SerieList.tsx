import Serie from "../../model/Serie";

type SerieListProps = {
  series: Array<Serie>;
};

export const SerieList = ({ series }: SerieListProps) => {
  return (
    <>
      <h1>SerieList</h1>
      {series &&
        series.map((serie: Serie, index: number) => <li key={index}>{serie.title}</li>)}
    </>
  );
};
