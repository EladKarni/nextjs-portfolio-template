import React, { useState, useEffect } from 'react'

function Contact() {
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if ( window.location.search.includes('success=true') ) {
        setSuccess(true);
        }
    }, []);

    return (
        <div maxWidth="sm">
            <h2>CONTACT</h2>
            {success && (
                <p style={{ color: "green" }}>Thanks for your message! </p>
            )}
            <div>
                <form 
                    name="contact" 
                    method="POST" 
                    action="/contact/?success=true"
                    data-netlify="true" 
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <p>
                        <label>Name <input type="text" name="name" /></label>
                    </p>
                    <p>
                        <label>Email <input type="email" name="email" /></label>
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
