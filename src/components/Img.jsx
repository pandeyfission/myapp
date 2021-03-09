import React, { PureComponent } from 'react'

import forestSmall from '../assets/images/forest-path-small-640x960.jpg';
import forestMedium from '../assets/images/forest-path-medium-1820x2880.jpg';
import forestLarge from '../assets/images/forest-path-large-2400x3600.jpg';
import ForestXLarge from '../assets/images/forest-path-Xlarge-4160x6240.jpg';

const small = 'https://accelerated.atoms.crystallize.digital/snowball/images/PalmaSpeedJusterteBilder-15/_resized_300.jpg';
const medium = 'https://accelerated.atoms.crystallize.digital/snowball/images/PalmaSpeedJusterteBilder-15/_resized_768.jpg';
const large = 'https://accelerated.atoms.crystallize.digital/snowball/images/PalmaSpeedJusterteBilder-15/_resized_1280.jpg';
const xlarge = 'https://accelerated.atoms.crystallize.digital/snowball/images/PalmaSpeedJusterteBilder-15/_resized_3200.jpg';


export default class Img extends PureComponent {

    state = { currentSrc: '' };

    onLoad = (event) => {
        this.setState({
          currentSrc: event.target.currentSrc
        });
    }

    render() {
        return (
                <div>
                    {/* <img className="home-image" src={this.props.forestSmall} srcSet={`${this.props.forestSmall} 300w, ${this.props.forestMedium} 768w, ${this.props.forestLarge} 1280w, ${this.props.ForestXLarge} 3200w`} onLoad={this.onLoad} /> */}
                    <img className="home-image" src={forestSmall} srcSet={`${forestSmall} 300w, ${forestMedium} 768w, ${forestLarge} 1280w, ${ForestXLarge} 3200w`} onLoad={this.onLoad} />
                    {/* <div>Current image: <br />{this.state.currentSrc}</div> */}
                </div>
        )
    }
}
