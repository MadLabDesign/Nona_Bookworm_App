import { Component } from 'react';
import SigninLayout from './Layout/SigninLayout';
import A from './HTML/A';
import { logout } from '../lib/auth';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import Card, { CardHeader, CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button/Button';

const styles = theme => ({
    paper: {
        margin: theme.spacing.unit,
        padding: theme.spacing.unit * 4,
    },
});

class AuthenticatedLanding extends Component {

    render() {

        const { classes, user, ctx } = this.props;

        return (
            <SigninLayout>
                <Card style={{ width: 350 }}>
                    <CardHeader title="Welcome" subheader={`${user.firstName} ${user.lastName}`} />
                    <CardContent>
                        <Paper className={classes.paper} elevation={4}>
                            <Typography variant="headline" component="p">
                                IEQ9 completed? {user.ieqCompleted ? 'Yes' : 'No'}
                            </Typography>
                        </Paper>

                        <Paper className={classes.paper} elevation={4}>
                            <Typography variant="headline" component="p">
                                IEQ9 package? {user.ieqPackage}
                            </Typography>
                        </Paper>
                    </CardContent>

                    <CardActions>
                        <Button onClick={() => logout(ctx)}>Logout</Button>
                    </CardActions>
                </Card>

            </SigninLayout>
        )
    }

}

export default withStyles(styles)(AuthenticatedLanding);
