import { useState, useEffect, DetailedHTMLProps, AnchorHTMLAttributes } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import styles from "../styles/Modal.module.css";

interface Props {
    show: boolean;
    onClose(): any,
    children: any,
    card: any
}

const Modal = ({show, onClose, children, card}: Props) => {
    const [isBrowser, setIsBrowser] = useState(false)

    useEffect(() => {
        setIsBrowser(true);
    },[])

    const handleClose = (e: any) => {
        e.preventDefault();
        onClose();
    }

    const modalContent = show ? (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <a href="#" onClick={handleClose}>
                        <button className="btn">Close</button>
                    </a>
                </div>
                <div className={styles.body}>{children}</div>
            </div>
        </div>
    ) : null;

    if(isBrowser) {
        return createPortal(
            modalContent,
            document.getElementById("modal-root") as HTMLElement
        )
    } else {
        return null
    }

}

export default Modal