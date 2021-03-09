import React, { PureComponent } from 'react'

import htmlcssIMG from '../assets/images/css3html55.png';
import js from '../assets/images/js2.png';
import jQuery from '../assets/images/jquery.png';
import react from '../assets/images/reactjs.png';
import reactNative from '../assets/images/reactnative.png';
import d3 from '../assets/images/d3js.png';

export default class Skills extends PureComponent {
    render() {
        console.log(htmlcssIMG);
        const tileData = [
            {
                img: htmlcssIMG,
                title: 'HTML5CSS3',
                author: 'author',
                cols: 2,
            },
            {
                img: js,
                title: 'Javascript',
                author: 'author',
                cols: 2,
            },
            {
                img: jQuery,
                title: 'Jquery',
                author: 'author',
                cols: 2,
            },
            {
                img: react,
                title: 'ReactJS',
                author: 'author',
                cols: 2,
            },
            {
                img: reactNative,
                title: 'ReactNative',
                author: 'author',
                cols: 2,
            },
            {
                img: d3,
                title: 'D3JS',
                author: 'author',
                cols: 2,
            },
        ];
        return (
                <div className="skills-container">
                    <h2>
                        Things I Know
                    </h2>
                    <div className="skills-img-container">
                        {tileData.map((tile) => (
                            <img key={tile.title} className="skills-img" src={tile.img} alt={tile.title} />
                        ))}
                    </div>
                </div>
        )
    }
}
