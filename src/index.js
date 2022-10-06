import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';


import './Componets/Styles/Intro.css';
import './Componets/Styles/index.css';
import Main from './Componets/Main';
import Projects from './Componets/Projects';
import logo from './Componets/Images/logo.png';
import instagramlogo from './Componets/Images/icons/instagram.png';
import facebooklogo from './Componets/Images/icons/facebook.png';
import linkedinlogo from './Componets/Images/icons/linkedin.png';
import Services from './Componets/Serives';
import About from './Componets/About';


const App = () => {
    const [displaysplash, setDisplaySplash] = useState('');

    const [classValue, setClassValue] = useState('hidden');



    useEffect(() => {

        setTimeout(() => {
            setDisplaySplash('display-none')
        }, 2000)
    }, [])

    const onmenuclick = () => {
        if (classValue === 'hidden') {
            setClassValue('visible')
        }
        else {
            setClassValue('hidden');
        }
    }

    return (
        <div className='display'>
            <div className={`splash ${displaysplash}`}>
                <img className='fade-in' src={logo}></img>
            </div>
            <header>
                <img className='header-logo' src={logo}></img>
                <nav id='navigation' ><Link to='/'>Home</Link> <Link to='/projects'>Projects</Link> <Link to='/services'>Services</Link> <Link to='/about'>About</Link></nav><div id='menu' onClick={onmenuclick}>&#9776;</div>
            </header>
            <div className={`navbind ${classValue}`}><nav id='navclop'><Link to='/'>Home</Link> <Link to='/projects'>Projects</Link> <Link to='/services'>Services</Link> <Link to='/about'>About</Link></nav></div>
            <main>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/services' element={<Services />}></Route>
                    <Route path='/about' element={<About />}></Route>

                </Routes>
            </main>
            <footer><div>Connect with me </div> <div><span><a href='https://www.instagram.com/atharellahi' target='_blank'><img width='30px' src={instagramlogo} alt='Instagram' ></img></a></span> <span> <a href='https://www.facebook.com/atharellahii' target='_blank'><img width='30px' src={facebooklogo} alt='Facebook'></img></a></span> <span> <a href='https://www.linkedin.com/in/atharellahi/' target='_blank'><img width='30px' src={linkedinlogo} alt='Linked In'></img></a></span></div></footer>
        </div>

    )
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.querySelector('#root'));