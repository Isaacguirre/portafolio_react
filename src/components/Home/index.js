import { useEffect, useState } from 'react';
import Loader from 'react-loaders'
import { Link } from 'react-router-dom';
import Code from '../../assets/images/code.png'
import Logo from './Logo';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [' ', 'I', 's', 'a', 'a', 'c', ' ', 'A', 'g', 'u', 'i', 'r', 'r', 'e']
  const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'] // 30

  useEffect(() => {
    const setTimeOut = async () => {
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 9000)
    };
    setTimeOut();
  }, [])

  return (
    <>
      <div className=" container home-page">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass}`}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              index={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              index={30}
            />
            <img src={Code} alt="LogoTitle" />
          </h1>
          <h2>Python developer / JavaScript developer</h2>
          <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>
        <Logo></Logo>
      </div >
      <Loader type="ball-grid-pulse" />
    </>

  )
}

export default Home;
