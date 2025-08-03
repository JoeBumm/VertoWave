import React from 'react';
import './Message.css'; // optional, for styling

function Message({ text, onClose }) {
    return (
        <div className="popup-overlay">
            <div className="popup">
                <p>{text}</p>
                <button onClick={onClose}>OK</button>
            </div>
        </div>
    );
}

export default Message;
