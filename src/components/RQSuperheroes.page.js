import { UseSuperHeroesData } from "../hooks/UseSuperHeroesData";

function RQSuperheroes_page(props) {
  const onSuccess = () => {
    console.log("Perform side effect after data fetching");
  };

  const onError = () => {
    console.log("Perform side effect after data encountering error");
  };

  const { isLoading, data, isError, error, refetch } = UseSuperHeroesData(
    onSuccess,
    onError
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
      <button onClick={refetch}>fetch heroes</button>
      {/* {data?.data.map((hero) => {
        return <h2 key={hero.name}>{hero.name}</h2>;
      })} */}
      {data.map((heroName) => {
        return <div key={heroName}>{heroName}</div>;
      })}
    </div>
  );
}

export default RQSuperheroes_page;
