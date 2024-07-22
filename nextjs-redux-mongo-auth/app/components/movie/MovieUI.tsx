'use client';
import * as styles from "./movie.module.css";
import {Movie} from "@/lib/features/movies/movieApi";
import {useRouter} from "next/navigation";

export default function MovieUI({ movie }: {  movie: Movie  })
{
    console.log('Movie styles ',styles.movieContainer);
    const router = useRouter();
    const btnDetailHandler = ()=>{
        router.push(`/movies/${movie._id}`);
    };
    return (<div className={styles['movie-container']}>
        <div>
            Title {movie.title}
            &nbsp;
            <button type={"button"}
                    className={"btn btn-primary"}
                    onClick={btnDetailHandler}
            >Details</button>
        </div>
    </div>);
}