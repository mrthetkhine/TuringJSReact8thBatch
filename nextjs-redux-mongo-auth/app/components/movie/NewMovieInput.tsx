'use client';
import {useState} from "react";
import {Button, Modal,Form as BForm} from "react-bootstrap";
import MovieForm from "@/app/components/movie/MovieForm";

export default function NewMovieInput()
{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return(<div>
        <button type={"button"} className={"btn btn-primary"}
                onClick={handleShow}>New Movie</button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>New Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <MovieForm/>
            </Modal.Body>

        </Modal>
    </div>)
}