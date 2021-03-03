import { Typography } from '@material-ui/core'
import React, { PureComponent } from 'react'

export default class Contact extends PureComponent {
    render() {
        return (
            <div className="contact-container">
                <h2>
                    Contact Me
                </h2>
                <div className="contact-content">
                    <Typography variant="subtitle1" gutterBottom>
                        Email : ashutoshk63[at]gmail.com
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Mobile : +91 9603064506
                    </Typography>
                </div>
            </div>
        )
    }
}
