'use client';
import {Movie} from "@/lib/features/movies/movieApi";
import {useRouter} from "next/navigation";
import styles from './movie.module.css';
import {useState} from "react";
import {Modal} from "react-bootstrap";
import MovieForm from "@/app/components/movie/MovieForm";
export default function MovieDetailsUI({movie}:{movie:Movie})
{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const router = useRouter();
    const btnBackHandler = ()=>{
        router.push(`/movies`);
    };
    return(<div>
        <div className={styles['movie-container']}>
            <div>Title {movie.title}</div>
            <div>Year {movie.year}</div>
            <div>Director {movie.director.name}</div>

            <button type={"button"} className={"btn btn-primary"}
                    onClick={handleShow}>Edit</button>
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <MovieForm movieToEdit={movie} closeModal={handleClose}/>
            </Modal.Body>

        </Modal>

    </div>);

}