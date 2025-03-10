import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddMovie = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    director: "",
    genre: "",
    year: "",
    synopsis: "",
    poster: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Add a New Movie</h2>
      <form>
        <input type="text" name="title" placeholder="Title" onChange={handleChange} />
        <input type="text" name="director" placeholder="Director" onChange={handleChange} />
        <select name="genre" onChange={handleChange}>
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
        </select>
        <input type="number" name="year" placeholder="Release Year" onChange={handleChange} />
        <textarea name="synopsis" placeholder="Synopsis" onChange={handleChange}></textarea>
        <input type="url" name="poster" placeholder="Poster Image URL" onChange={handleChange} />
        <button type="submit">Submit</button>
        <button type="button" onClick={() => navigate("/")}>Cancel</button>
      </form>
    </div>
  );
};

export default AddMovie;
