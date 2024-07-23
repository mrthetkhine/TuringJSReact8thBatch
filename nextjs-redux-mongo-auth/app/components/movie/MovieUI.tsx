'use client';
import * as styles from "./movie.module.css";
import {Movie} from "@/lib/features/movies/movieApi";
import {useRouter} from "next/navigation";
import ConfirmModal from "@/app/components/common/ConfirmModal";
import {useState} from "react";

export default function MovieUI({ movie }: {  movie: Movie  })
{

    const router = useRouter();
    const btnDetailHandler = ()=>{
        router.push(`/movies/${movie._id}`);
    };
    const [showConfirm,setShowConfirm] = useState(false);

    const handleClose=()=>{
        setShowConfirm(false);
    }
    const btnDeleteHandler = ()=>{
        setShowConfirm(true);
    };
    const handleYes= ()=>{
      console.log('Yes Delete');
      handleClose();
    };
    const handleNo=()=>{
        console.log('No ');
        handleClose();
    };
    return (<div className={styles['movie-container']}>
        <div>
            Title {movie.title}
            <ConfirmModal show={showConfirm}
                          handleClose={handleClose}
                        render={()=>(<div>
                            <h3>Are you sure you want to delete?</h3>
                            <button type={"button"}
                                    className={"btn btn-danger"}
                                    onClick={handleYes}
                            >Yes</button>
                            <button type={"button"}
                                    className={"btn btn-primary"}
                                    onClick={handleNo}
                            >No</button>
                        </div>)}/>
            &nbsp;
            <button type={"button"}
                    className={"btn btn-danger"}
                    onClick={btnDeleteHandler}>
                Delete
            </button>
            &nbsp;
            <button type={"button"}
                    className={"btn btn-primary"}
                    onClick={btnDetailHandler}
            >Details</button>
        </div>
    </div>);
}