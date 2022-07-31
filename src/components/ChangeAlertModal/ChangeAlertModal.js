import React from 'react';
import ReactDOM from 'react-dom';
import './ChangeAlertModal.css'
import useStorageListener from '../../hooks/useStorageListener';

const ChangeAlertModal = ({ syncronizeTodos }) => {

    const {synchronizedState, toggleSyncState} = useStorageListener(syncronizeTodos);

    if (synchronizedState) return null
    else {

        return ReactDOM.createPortal(

            <dialog className='change-alert-modal-container' open={!synchronizedState}>

                <div className='change-alert-modal'>

                    <p className='change-alert-modal__message'>Your <span>Tasks</span> are outdated!</p>
                    <button className='change-alert-modal__button' onClick={() => toggleSyncState(true)}>Refresh</button>

                </div>

            </dialog>,

            document.getElementById('modal')
        );
    }

}

export default ChangeAlertModal;
