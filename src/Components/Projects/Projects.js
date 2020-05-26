import React from 'react'
import './Projects.css'

const Projects = () => {

    const vradImage = '/images/vrad.PNG'
    const overlookImage = '/images/overlook.PNG'
    const whatsNewImage = '/images/whats-new.PNG'
    const checkYoSelfImage = '/images/check-yo-self.PNG'

    return (
        <section className="projects">
            <h2>projects</h2>
            
            <h3>VRAD - Vacation Rentals Around Denver</h3>
            <a href="https://github.com/pernstrong/VRAD">GitHub Repository</a>
            <img src={`${vradImage}`} alt="screenshot of vrad application home screen" />


            <h3>Overlook</h3>
            <a href="https://github.com/pernstrong/overlook">GitHub Repository</a>
            <img src={`${overlookImage}`} alt="screenshot of overlook application home screen" />

            <h3>What's New</h3>
            <a href="https://github.com/pernstrong/whats-new">GitHub Repository</a>
            <img src={`${whatsNewImage}`} alt="screenshot of whats new application home screen" />


            <h3>Check Yo Self</h3>
            <a href="https://github.com/pernstrong/Check-Yo-Self">GitHub Repository</a>
            <img src={`${checkYoSelfImage}`} alt="screenshot of check yo self application home screen" />

        </section>
    )
}

export default Projects