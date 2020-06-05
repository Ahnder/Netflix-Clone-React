import axios from 'axios';

const fetchMovieData = async (BASE_URL1, BASE_URL2, setResults) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${BASE_URL1}?api_key=7b2585c3179825537cb88b4d13b35e1c&${BASE_URL2}`,
    );
    setResults(response.data.results);
  } catch (err) {
    console.log(err);
  }
};

export default fetchMovieData;
