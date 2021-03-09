import React, { PureComponent } from 'react'
import { Link, Events, animateScroll as scroll, scroller } from 'react-scroll'

import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';
import homeIMG from '../assets/images/home.jpg';
import myPic from '../assets/images/ashutosh.png';
import Img from './Img';
import forestSmall from '../assets/images/forest-path-small-640x960.jpg';
import forestMedium from '../assets/images/forest-path-medium-1820x2880.jpg';
import forestLarge from '../assets/images/forest-path-large-2400x3600.jpg';
import ForestXLarge from '../assets/images/forest-path-Xlarge-4160x6240.jpg';


export default class Home extends PureComponent {

    constructor(props) {
        super(props);
        // this.scrollToTop = this.scrollToTop.bind(this);

        this.state = {
            activeTab: ''
        }
    }

    componentDidMount() {
        Events.scrollEvent.register('begin', function () {
          console.log("begin", arguments);
        });
        Events.scrollEvent.register('end', function () {
          console.log("end", arguments);
        });
      }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    scrollTo() {
        scroller.scrollTo('scroll-to-element', {
          duration: 800,
          delay: 1000,
          smooth: 'easeInOutQuart'
        })
    }

    onMenuClicked = () => {
        this.scrollTo()
    }

    render() {
        return (
            <>
            {/* <Img /> */}
                <div className="App-header">
                    <img className="my-pic" src={myPic} alt="Home page"/>
                    <div className="header-menu">
                        <ul className="menu-container">
                            <span
                                onClick={ () => this.onMenuClicked('homeRef')}
                                key="Home_1"
                                className="menu-item"
                            >
                                <Link offset={-100} activeClass="active" className="test8" to="home_id" spy={true} smooth={true} duration={500}>Home</Link>
                            </span>
                            <span
                                onClick={ () => this.onMenuClicked('skillRef')}
                                key="Skills_2"
                                className="menu-item"
                            >
                                <Link offset={-100} activeClass="active" className="test8" to="skills_id" spy={true} smooth={true} duration={500}>Skills</Link>
                            </span>
                            <span
                                onClick={ () => this.onMenuClicked('projectRef')}
                                key="Projects_3"
                                className="menu-item"
                            >
                            <Link offset={-100} activeClass="active" className="test8" to="projects_id" spy={true} smooth={true} duration={500}>Projects</Link>
                            </span>
                            <span
                                onClick={ () => this.onMenuClicked('educationRef')}
                                key="Education_4"
                                className="menu-item"
                            >
                            <Link offset={-100} activeClass="active" className="test8" to="education_id" spy={true} smooth={true} duration={500}>Education</Link>
                            </span>
                            <span
                                onClick={ () => this.onMenuClicked('contactRef')}
                                key="Contact_5"
                                className="menu-item"
                            >
                                <Link offset={-100} activeClass="active" className="test8" to="contact_id" spy={true} smooth={true} duration={500}>Contact</Link>
                            </span>
                        </ul>
                    </div> 
                </div>
                <div className="mt-20 mb-20"></div>
                <div id="home_id" className="home-image-container homes">
                    <img className="home-image" src={homeIMG} alt="Home page"/>
                    {/* <Img forestSmall={forestSmall} forestMedium={forestMedium} forestLarge={forestLarge} ForestXLarge={ForestXLarge} /> */}
                </div>
                <div className="mt-20 mb-20"></div>
                <div id="skills_id" className="skills">
                    <Skills />
                </div>
                <div className="mt-20 mb-20"></div>
                <div id="projects_id" className="projects element">
                    <Projects />
                </div>
                <div className="mt-20 mb-20"></div>
                <div id="education_id" className="educations">
                    <Education />
                </div>
                <div className="mt-20 mb-20"></div>
                <div id="contact_id" className="contacts">
                    <Contact />
                </div>
            </>
        )
    }
}
