import React, { PureComponent } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default class Education extends PureComponent {
    render() {

        const education = [
            {
                title: 'Post Graduation',
                course: 'MCA',
                college: 'Jawaharlal Nehru Technological University (Hyderabad)',
                duration: '2013 - 2016',
            },
            {
                title: 'Graduation',
                course: 'BCA',
                college: 'Sikkim Manipal University (Gangtoke)',
                duration: '2009 - 2012',
            },
            {
                title: 'Intermediate',
                course: '',
                college: 'R. S. Lal Intermediate College, Khamaria (Uttar Pradesh)',
                duration: '2008',
            }
        ]
        return (
            <div className="education-container">
                <h2>
                    My Educational Background
                </h2>
                
                    {
                        education.map(item => {
                            return (
                                <Grid key={item.title} container spacing={3}>
                                    <Grid item xs={3}></Grid>
                                    <Grid item xs={6}>
                                        <Paper className="paper">
                                            <Typography variant="h6" gutterBottom>
                                            {item.title}
                                            </Typography>
                                            <Typography variant="subtitle1" gutterBottom>
                                            {item.course}
                                            </Typography>
                                            <Typography variant="subtitle1" gutterBottom>
                                            {item.college}
                                            </Typography>
                                            <Typography variant="subtitle1" gutterBottom>
                                            {item.duration}
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={3}></Grid>
                                </Grid>
                                
                            )
                        })
                    }
            </div>
        )
    }
}
