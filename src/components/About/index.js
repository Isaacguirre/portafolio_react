import { useEffect, useState } from 'react'
import {
    faPython,
    faDocker,
    faGitAlt,
    faCloudflare,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const effect = async () => {
            return setTimeout(() => {
                setLetterClass('text-animate-hover')
            }, 3000)
        }
        effect()
    }, [])

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                    Software engineer with experience in software development using different stack of technologies and working following agile methodologies for the development process.
                    Along my career I perform effectively activities like design software following specifications and standards, write scalable and testable code, focus on delivering with a high level of quality. Specialized in back-end development and solutions, building REST APIS and integrating different components, with a strong background on testing automation processes.
                    I have strong problem solving capabilities, analytical skills and ability to constant learn and adapt to newer technologies, following always the best practices. Known for being result-oriented team member and team-oriented focused on building relationships and promoting new technologies and self learning, collaboration, and improvement across team members.
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faPython} color="#FFD43B" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faCloudflare} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faDocker} color="#4b8bbe" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="ball-grid-pulse" />
        </>
    )
}

export default About
