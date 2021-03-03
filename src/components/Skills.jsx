import React, { PureComponent } from 'react'

export default class Skills extends PureComponent {
    render() {
        const tileData = [
            {
                img: 'images/css3html55.png',
                title: 'HTML5CSS3',
                author: 'author',
                cols: 2,
            },
            {
                img: 'images/js2.png',
                title: 'Javascript',
                author: 'author',
                cols: 2,
            },
            {
                img: 'images/jquery.png',
                title: 'Jquery',
                author: 'author',
                cols: 2,
            },
            {
                img: 'images/reactjs.png',
                title: 'ReactJS',
                author: 'author',
                cols: 2,
            },
            {
                img: 'images/reactnative.png',
                title: 'ReactNative',
                author: 'author',
                cols: 2,
            },
            {
                img: 'images/d3js.png',
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
