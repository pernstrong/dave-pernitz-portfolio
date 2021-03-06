import React from 'react'
import './Contact.css'

const Contact = () => {

    return (
        <section className="contact">
            <h2 className="contact-header">contact</h2>
                <p className="contact-info">Email: pernitz@uwalumni.com</p>
                <a href="https://www.linkedin.com/in/dave-pernitz/" className="contact-info" target="blank">LinkedIn</a>
                <a href="https://twitter.com/dave_pernitz" className="contact-info" target="blank">Twitter</a>
                <a href="https://github.com/pernstrong" className="contact-info" target="blank">GitHub</a>
        </section>
    )
}

export default Contact