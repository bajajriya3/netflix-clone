import React,{ useState, useEffect} from "react";
import "./Row.css";
import axios from "./axios";

function Row({title, fetchUrl, isLargeRow = false}) {
    const baseUrl = "https://image.tmdb.org/t/p/original/";
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])
    
    return (
        <div className="row">
            <h3>{title}</h3>
            <div className="row_posters">
                {movies.map(movie => (
                    <img 
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        key={movie.id}
                        src={`${baseUrl}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`} 
                        alt=""
                    />
                ))}
            </div>
        </div>
    )
}

export default Row;
