'use client';
import {Movie} from "@/lib/features/movies/movieApi";
import {useRouter} from "next/navigation";
import styles from './movie.module.css';
export default function MovieDetailsUI({movie}:{movie:Movie})
{
    const router = useRouter();
    const btnBackHandler = ()=>{
        router.push(`/movies`);
    };
    return(<div>
        <div className={styles['movie-container']}>
            <div>Title {movie.title}</div>
            <div>Year {movie.year}</div>
            <div>Director {movie.director.name}</div>
        </div>
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={btnBackHandler}>
            Back
        </button>
    </div>);

}