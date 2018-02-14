import React from 'react';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden/Hidden';
import Typography from 'material-ui/Typography';
import styled from 'styled-components';
import Link from '../Link';

const HeroArea = styled.div`
    background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("/static/images/hero.jpg");
    background-size: cover;
    width: 100%;
    height: 100vh;
`;

const SigninLayout = ({children}) => (
    <div>
        <Grid container spacing={0}>
            <Grid item md={7}>
                <Hidden only={['xs', 'sm']}>

                    <HeroArea/>

                </Hidden>
            </Grid>
            <Grid item xs={12} sm={12} md={5}>

                <Grid container style={{ height: '100vh' }} justify="center" alignItems="center" direction="column" spacing={0}>
                    <Grid item xs/>

                    <Grid item xs >
                        <Link href="/">
                            <img style={{width: '100%', maxWidth: '200px'}} src="../static/images/logo_full_dark.svg"
                                 alt=""/>
                        </Link>

                        {children}

                        <Typography variant="button">
                            Privacy Statement / Disclaimers / Legal Stuff
                        </Typography>

                    </Grid>
                    
                    <Grid item xs></Grid>
                </Grid>
            </Grid>
        </Grid>

    </div>
)


export default SigninLayout;
