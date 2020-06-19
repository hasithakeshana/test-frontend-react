import React,{useState} from "react";
import Modal from "react-bootstrap/Modal";
import { useHistory } from "react-router-dom";



function RatingModal(props) {
    const history = useHistory();
    if(props.redirect){
    (function () {
        setTimeout(function () {
            props.onHide();
            history.push('/');
        }, 2000);
    })();
}
    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body><span style={{color: "red"}}>Please add rating with comment!</span>
            </Modal.Body>

        </Modal>

    );
}

export default (RatingModal);
