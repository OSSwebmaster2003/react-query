import axios from "axios";
import { useEffect, useState } from "react";

function Superheroes_page(props) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/superheroes").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <h2>Loading ...</h2>;
  }
  return (
    <div>
      <h2>Super Hero Page</h2>
      {data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </div>
  );
}

export default Superheroes_page;
