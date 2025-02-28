import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";
import { useState } from "react";

const Dashboard = () => {
  const navigate = useNavigate();

  // Sample movie list
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "HI PAPA",
      director: "Shouryuv",
      genre: "ROMANCE",
      year: 2023,
      synopsis: "The well-known photographer and single father Viraj keeps his daughter Mahii from knowing the truth about her mother. But the delicate relationship is in danger of breaking as Mahii's curiosity takes off.",
      poster : "https://timesofindia.indiatimes.com/photo/msid-101821743,imgsize-138620.cms",
    },
    {
      id: 2,
      title: "The Dark Knight",
      director: "Christopher Nolan",
      genre: "Action",
      year: 2008,
      synopsis: "Batman battles the Joker in Gotham City.",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjculOGAmicgPJAx0-OgmnOQS9oPGgqvtRDA&s",
    },
  ]);

  return (
    <div>
      <h1>Movie Collection</h1>
      <button onClick={() => navigate("/add-movie")}>Add Movie</button>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>No movies available. Add one!</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
