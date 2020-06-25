import React from 'react'
import './Talks.css'

const Talks = () => {

    return (
        <section className="talks">
            <h2>Talks</h2>
            <section className="talk-card">
                <h3>Selling the JAMstack</h3>
                <iframe title="jamstack-video" width="560" height="315" src="https://www.youtube.com/embed/eYk0GmyEbcs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>Selling the JAMstack is a presentation I gave at the JAMstack Denver meetup in June of 2020. The presentation combines my past experience in sales with my new experience as a developer in order to give tools and techniques for selling the JAMstack technologies. It is designed to help bridge the knowledge gap with the JAMstack and effectively communicate the benefits of the JAMstack.</p>
            </section>
            {/* <section className="talk-card">
                <h3>Supercomputers vs Evil</h3>
                
                <p>Super Computers vs Evil is a presentation I gave as part of Turing's Lightning Talks. It was then voted on and selected as one of a handful to be included in Turing's Top Talks which showcased the best of the Lightning Talks. The presentation focuses on IBM's Summit supercomputer and how it is being used to help analyze medical data. Cancer and Covid-19 are highlighted as areas that Summit is being utilized to help with scientific research.</p>
            </section> */}

        </section>
    )
}

export default Talks