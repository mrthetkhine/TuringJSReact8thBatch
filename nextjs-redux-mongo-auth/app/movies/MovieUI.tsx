import styles from "./movie.module.css";
import {Movie} from "@/lib/features/movies/movieApi";

export default function MovieUI({ movie }: {  movie: Movie  })
{
    console.log('Movie styles ',styles.movieContainer);
    return (<div className={styles.movieContainer}>
        <div>Title {movie.title}</div>
    </div>);
}