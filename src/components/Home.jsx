import React, { createRef, PureComponent } from 'react'
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';

export default class Home extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            activeTab: ''
        }
        this.homeRef = createRef();
        this.skillRef = createRef();
        this.projectRef = createRef();
        this.educationRef = createRef();
        this.contactRef = createRef();
    }

    onMenuClicked = (menu) => {
        if (this[menu].current) {
            this[menu].current.scrollIntoView();
        }
    }

    render() {
        return (
            <>
                <div className="App-header">
                    <div className="header-menu">
                        <ul className="menu-container">
                            <span
                                onClick={ () => this.onMenuClicked('homeRef')}
                                key="Home_1"
                                className="menu-item"
                            >
                                Home
                            </span>
                            <span
                                onClick={ () => this.onMenuClicked('skillRef')}
                                key="Skills_2"
                                className="menu-item"
                            >
                                Skills
                            </span>
                            <span
                                onClick={ () => this.onMenuClicked('projectRef')}
                                key="Projects_3"
                                className="menu-item"
                            >
                                Projects
                            </span>
                            <span
                                onClick={ () => this.onMenuClicked('educationRef')}
                                key="Education_4"
                                className="menu-item"
                            >
                                Education
                            </span>
                            <span
                                onClick={ () => this.onMenuClicked('contactRef')}
                                key="Contact_5"
                                className="menu-item"
                            >
                                Contact
                            </span>
                        </ul>
                    </div> 
                </div>
                <div className="mt-20 mb-20"></div>
                <div className="image-container homes" ref={this.homeRef}>
                    <img className="home-image" src='images/home.jpg' alt="Home page"/>
                </div>
                <div className="mt-20 mb-20"></div>
                <div className="skills" ref={this.skillRef}>
                    <Skills />
                </div>
                <div className="mt-20 mb-20"></div>
                <div
                    className="projects"
                    ref={this.projectRef}
                >
                    <Projects />
                </div>
                <div className="mt-20 mb-20"></div>
                <div
                    className="educations"
                    ref={this.educationRef}
                >
                    <Education />
                </div>
                <div className="mt-20 mb-20"></div>
                <div className="contacts" ref={this.contactRef}>
                    <Contact />
                </div>
            </>
        )
    }
}
