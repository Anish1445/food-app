import React from 'react'
import ReactDom from 'react-dom';
import './MyCartModal.css';

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    width: '60%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '12px',
    backgroundColor: '#FFF',
    padding:'50px',
    zIndex: 1000,
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1000,
}

// {open, children, onClose}
export default function MyCartModal({open, children, onClose}) {

    if(!open) return null

    return ReactDom.createPortal(
        <>
            <div className='section1' style={OVERLAY_STYLES} />
            <div className='section2' style={MODAL_STYLES}>
                {children}

                <button onClick={onClose} className="button-close"> Close </button>
            </div>

        </>, document.getElementById('portal')
    )
}