import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

function RQSuperheroes_page(props) {
  const { isLoading, data, isError, error } = useQuery(
    "super-heroes",
    fetchSuperHeroes
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      <h2>RQ Super Heroes Page</h2>
      {data.data.map((hero) => {
        return <h2 key={hero.name}>{hero.name}</h2>;
      })}
    </div>
  );
}

export default RQSuperheroes_page;
