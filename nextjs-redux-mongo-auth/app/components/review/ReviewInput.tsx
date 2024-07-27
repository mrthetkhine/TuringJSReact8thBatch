import {Modal} from "react-bootstrap";
import MovieForm from "@/app/components/movie/MovieForm";
import {useState} from "react";
import ReviewForm from "@/app/components/review/ReviewForm";

export default function ReviewInput({movieId}:{movieId:string})
{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(<div>
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={handleShow}>New Review</button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>New Review</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ReviewForm movieId={movieId} handleClose={handleClose}/>
            </Modal.Body>

        </Modal>
    </div>);
}