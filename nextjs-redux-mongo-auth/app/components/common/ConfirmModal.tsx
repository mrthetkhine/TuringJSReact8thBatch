import {Modal} from "react-bootstrap";
import ReviewForm from "@/app/components/review/ReviewForm";

export default function ConfirmModal(
    {handleClose,show,render}:{
        handleClose:()=>void,
        show:boolean,
        render:()=>any,
    })
{
    return(<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            {
                render()
            }
        </Modal.Body>

    </Modal>);

}