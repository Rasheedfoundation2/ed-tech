import React from "react";
import '../css/Chat.css'
const Chat = () => {
    
    return (
        <>
            <div className="chat-wrapper">
                <button className="back-btn"> ← </button>
                <div className="chat-container">
                    {/* Instead of demo replace it with user ka name */}
                    <div className="chat-header">Chat with Demo</div>

                    <div className="chat-message-list">
                        <div className="message received">Hey, how are you?</div>
                        <div className="message sent">I'm good! What about you?</div>
                        <div className="message received">Doing great. Ready for the meeting?</div>
                        <div className="message sent">Yes, almost. Just finishing this task.</div>
                    </div>

                    <div className="chat-footer">
                        <input type="text" className="chat-input"/>
                        <button className="chat-btn">Send</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Chat;