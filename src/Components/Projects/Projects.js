import React from 'react'
import './Projects.css'

const Projects = () => {

    const vradImage = '/dave-pernitz-portfolio/images/vrad.png'
    const beersImage = '/dave-pernitz-portfolio/images/beers.png'
    const overlookImage = '/dave-pernitz-portfolio/images/overlook.png'
    const whatsNewImage = '/dave-pernitz-portfolio/images/whats-new.png'
    const checkYoSelfImage = '/dave-pernitz-portfolio/images/check-yo-self.png'

    return (
        <section className="projects">
            <h2>projects</h2>
            
            <section className="project-card">
                <section className="column-one">
                    <h3>Beers</h3>
                    <a href="https://github.com/pernstrong/beers">GitHub Repository</a>
                    <a href="https://stark-ocean-21174.herokuapp.com/">Deployed Site</a>
                    <img src={`${beersImage}`} alt="screenshot of beers application home screen" />
                </section>
                <section className="column-two">
                    <p>Key Technologies</p>
                    <ul>
                        <li>React with Hooks</li>
                        <li>TypeScript</li>
                        <li>Jest / React Testing Library</li>
                        <li>React Router</li>
                        <li>Network Requests / API</li>
                        <li>Local Storage</li>
                    </ul>
                </section>
            </section>
            
            <section className="project-card">
                <section className="column-one">
                    <h3>VRAD - Vacation Rentals Around Denver</h3>
                    <a href="https://github.com/pernstrong/VRAD">GitHub Repository</a>
                    <a href="https://pernstrong.github.io/VRAD">Deployed Site</a>
                    <img src={`${vradImage}`} alt="screenshot of vrad application home screen" />
                </section>
                <section className="column-two">
                    <p>Key Technologies</p>
                    <ul>
                        <li>Network Requests / API</li>
                        <li>React</li>
                        <li>Jest / React Testing Library</li>
                        <li>React Router</li>
                        <li>React lifecycle methods</li>
                        <li>PropTypes</li>
                    </ul>
                </section>
            </section>
            
            <section className="project-card">
                <section className="column-one">
                    <h3>What's New</h3>
                    <a href="https://github.com/pernstrong/whats-new">GitHub Repository</a>
                    <a href="https://pernstrong.github.io/whats-new">Deployed Site</a>
                    <img src={`${whatsNewImage}`} alt="screenshot of whats new application home screen" />
                </section>
                <section className="column-two">
                    <p>Key Technologies</p>
                    <ul>
                        <li>React</li>
                        <li>Network Requests / API</li>
                        <li>Jest / React Testing Library</li>
                        <li>PropTypes</li>
                    </ul>
                </section>
            </section>

            <section className="project-card">
                <section className="column-one">
                    <h3>Overlook</h3>
                    <a href="https://github.com/pernstrong/overlook">GitHub Repository</a>
                    <img src={`${overlookImage}`} alt="screenshot of overlook application home screen" />
                </section>
                <section className="column-two">
                <section className="column-two">
                    <p>Key Technologies</p>
                    <ul>
                        <li>jQuery</li>
                        <li>Sass</li>
                        <li>Network Requests / API</li>
                        <li>Testing with Mocha, Chai and Chai Spies</li>
                    </ul>
                </section>
                </section>
            </section>

        </section>
    )
}

export default Projects