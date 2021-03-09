import React, { PureComponent } from 'react';

import investment from '../assets/images/investment.jpg';
import datascience from '../assets/images/datascience.jpg';
import healthcare from '../assets/images/healthcare.jpg';
import mobileapp from '../assets/images/mobileapp.jpg';

export default class Projects extends PureComponent {
    render() {
        const tileData = [
            {
                img: investment,
                title: 'Investment',
                author: 'author',
                cols: 2,
            },
            {
                img: datascience,
                title: 'Datascience',
                author: 'author',
                cols: 2,
            },
            {
                img: healthcare,
                title: 'Healthcare',
                author: 'author',
                cols: 2,
            },
            {
                img: mobileapp,
                title: 'MobileApp',
                author: 'author',
                cols: 2,
            },
        ];
        return (
            <div className="projects-container">
                <h2>
                    Domains I worked On
                </h2>
                <div className="gridList">
                    {tileData.map((tile) => (
                        <img key={tile.title} className="projects-img" src={tile.img} alt={tile.title} />
                    ))}
                </div>
            </div>
        )
    }
}
