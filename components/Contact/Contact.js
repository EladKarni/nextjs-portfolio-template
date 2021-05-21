import React, { useState, useEffect } from 'react'
import Styles from './Contact.module.scss'

function Contact() {
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if ( window.location.search.includes('success=true') ) {
        setSuccess(true);
        }
    }, []);

    return (
        <div className={Styles.Contact}>
            <h2>CONTACT</h2>
            {success && (
                <p style={{ color: "green" }}>Thanks for your message! </p>
            )}
            <div>
                <form 
                    name="ContactMe" 
                    method="POST"
                    data-netlify="true" 
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <p>
                        <label>Your Name: <input type="text" name="name"/></label>
                    </p>
                    <p>
                        <label>Your Email: <input type="email" name="email"/></label>
                    </p>
                    <p>
                        <label>Message: <textarea name="message"></textarea></label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Contact
