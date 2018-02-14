import {
    Avatar, Button, Card, CardActions, CardHeader, Divider, Grid, Paper,
    Typography, CardContent
} from "material-ui";

import BaseLayout from "../../components/Layout/BaseLayout";
import withMaterial from "../../lib/withMaterial";
import styled from "styled-components";
import Link from "../../components/Link";
import ArrowBack from 'material-ui-icons/ArrowBack';
import LockOutline from 'material-ui-icons/LockOutline';
import PropTypes from "prop-types";
import React from "react";
import ModalPopup from "../../components/ModalPopup";




const CardCenter = styled(Card)`
  && {
    text-align: center;
  }
`

const StyleCardActions = styled(Button)`
   && {  
       margin: 0 auto;
      
      }
`


const MyAvatar = styled(Avatar)`
   && {   
        background-color: ${p => p['background-color']};
      }
`


MyAvatar.propTypes = {
    backgroundColor: PropTypes.string,
};



const modalContent = {
    Center: <span>Unlock this <strong>Center</strong>Content</span>,
    Instincts: <span>Unlock this <strong>Instincts</strong>content</span>,
    SocialStyle: <span>Unlock this <strong>Core Type</strong>content</span>,
    ConflictStyle: <span>Unlock this <strong>Conflict Style</strong>content</span>,
    MeetingPlanner: <span>Unlock this <strong>Meeting Planner</strong>content</span>
    }
;


class KnowPage extends React.Component {
    state = {
        open: false,
        modalContent: {}
    }
    handleModalClose(){
        this.setState({open: false})
    };
    learnMoreClicked(type) {
        this.setState({
            open: true,
            modalContent: modalContent[type]
        })
    }

    render() {
        return (

            <BaseLayout>

                    <Grid item xs={6} md={10}>
                        <Link href="/frontend">
                            <ArrowBack/>
                        </Link>
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <Button variant="raised" color="primary" href="../getYourType/getYourType">
                            Get Your Type
                        </Button>
                    </Grid>

                <Grid item xs={12}>
                    <Typography variant="headline" component="h1">
                        Know
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={2} md={3}>
                    <Card>
                        <CardHeader title="Core Type"/>
                        <Divider light/>
                        <CardContent>
                            <Typography>
                                fghjk
                            </Typography>
                        </CardContent>
                        <Divider light/>
                        <CardActions>
                            <StyleCardActions>
                                <Button color="primary" href="../know/">
                                    Learn more
                                </Button>
                            </StyleCardActions>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={2} md={3} >
                    <Card>
                        <CardHeader title="Sub Type"/>
                        <Divider light/>
                        <CardContent>
                            <Typography>
                                fghjk
                            </Typography>
                        </CardContent>
                        <Divider light/>
                        <CardActions>
                            <Button color="primary" href="../know/">
                                Learn more
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={2} md={3}>
                    <Card>
                        <CardHeader title="Center"/>
                        <Divider light/>
                        <CardContent>
                            <Typography>
                                fghjk
                            </Typography>
                        </CardContent>
                        <Divider light/>
                        <CardActions>
                            <StyleCardActions>
                                <LockOutline onClick={() => this.learnMoreClicked("Center")} />
                            </StyleCardActions>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={2} md={3}>
                    <Card>
                        <CardHeader title="Instincts"/>
                        <Divider light/>
                        <CardContent>
                            <Typography>
                                fghjk
                            </Typography>
                        </CardContent>
                        <Divider light/>
                        <CardActions>
                            <StyleCardActions>
                                <LockOutline onClick={() => this.learnMoreClicked("Instincts")} />
                            </StyleCardActions>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={2} md={3}>
                    <Card>
                        <CardHeader title="Social Style"/>
                        <Divider light/>
                        <CardContent>
                            <Typography>
                                fghjk
                            </Typography>
                        </CardContent>
                        <Divider light/>
                        <CardActions>
                            <StyleCardActions>
                                <LockOutline onClick={() => this.learnMoreClicked("SocialStyle")} />
                            </StyleCardActions>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={2} md={3}>
                    <Card>
                        <CardHeader title="Conflict Style"/>
                        <Divider light/>
                        <CardContent>
                            <Typography>
                                fghjk
                            </Typography>
                        </CardContent>
                        <Divider light/>
                        <CardActions>
                            <StyleCardActions>
                                <LockOutline onClick={() => this.learnMoreClicked("ConflictStyle")} />
                            </StyleCardActions>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={2} md={3}>
                    <Card>
                        <CardHeader title="Meeting Planner"/>
                        <Divider light/>
                        <CardContent>
                            <Typography>
                                fghjk
                            </Typography>
                        </CardContent>
                        <Divider light/>
                        <CardActions>
                            <StyleCardActions>
                                <LockOutline onClick={() => this.learnMoreClicked("MeetingPlanner")} />
                            </StyleCardActions>
                        </CardActions>
                    </Card>
                </Grid>
                <ModalPopup onClose={() => this.handleModalClose()} content={this.state.modalContent} open={this.state.open}/>
            </BaseLayout>
        )
    }
}

export default withMaterial(KnowPage)