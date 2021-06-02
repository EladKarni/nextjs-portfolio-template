import React, { useState, useEffect } from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import { info } from '../../content'

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
            <SectionTitle>CONTACT</SectionTitle>
            {success && (
                <p style={{ color: "green" }}>Thanks for your message! </p>
            )}
            <div className={Styles.FormCard}>
                <form 
                    name="ContactMe" 
                    method="POST"
                    data-netlify="true" 
                    action="/success"
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <p>
                        <label>Your Name: <input type="text" name="name"/></label>
                    </p>
                    <p>
                        <label>Your Email: <input type="email" name="email"/></label>
                    </p>
                    <p>
                        <label>Message: <textarea name="message" name="message"></textarea></label>
                    </p>
                    <span>
                        <button>Send</button>
                    </span>
                </form>
            </div>
        </div>
    );
}

export default Contact
