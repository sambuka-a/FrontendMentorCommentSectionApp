import { useEffect, useRef } from 'react';
import RulesPortal from './RulesPortal';
import { CSSTransition } from "react-transition-group";

import styles from './modal.module.scss'

function Modal({ modalOpen, handleClose, handleConfirm }) {
    const nodeRef = useRef(null)
    useEffect(() => {
        const closeOnEsc = (e) => e.key === 'Escape' ? handleClose() : null;
        document.body.addEventListener('keydown', closeOnEsc)
        return () => {
            document.body.removeEventListener('keydown', closeOnEsc)
        }
    }, [handleClose])

    if (!modalOpen) return null;
  
    return (
        <RulesPortal wrapperId='react-portal-modal-container'>
            <CSSTransition
                in={modalOpen}
                timeout={{entry: 0, exit: 300}}
                unmountOnExit
                classNames={styles.modal}
                nodeRef={nodeRef}
            >
                <div className={styles.modal} ref={nodeRef}>
                    <div className={styles.wrapper}>
                        <h2>Delete comment</h2>
                        <p>Are you sure you want to delete your comment?</p>
                        <button
                            onClick={handleClose} 
                            
                        > No
                        </button>
                        <button
                            onClick={handleConfirm} 
                            className={styles.closeBtn}
                        > YES
                        </button>
                    </div>
                </div>
            </CSSTransition>
        </RulesPortal>
    );
  }
  export default Modal;