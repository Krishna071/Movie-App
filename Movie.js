import React from "react";

const IMG_API="https://image.tmdb.org/t/p/w1280";

const Movie=({title,poster_path,overview,release_date,vote_average})=>(
     <div className="movie">
         <img src={IMG_API+ poster_path 
      
        }alt={title}/>
         <div className="movie-info">
             <h3>{release_date}</h3>
                <h3>{vote_average}</h3>
         </div>

        <div
            className="movie-over">
                <h2>Overview :</h2>
                <p>{overview}</p>
        </div>

     </div>
)

export default Movie;
