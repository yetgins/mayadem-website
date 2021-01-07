import React from 'react'
import Concept from '../Concept/Concept'
import ImageSlider from '../ImageSlider/ImageSlider'
import { SliderData } from '../ImageSlider/SliderData'
import Intro from '../Intro/Intro'

const Home = () => {
    return (
        <div>
            <ImageSlider slides={SliderData} />
            <Intro />
            <Concept />
        </div>
    )
}

export default Home
