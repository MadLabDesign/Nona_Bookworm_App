import React from "react";
import {
    Button, Card, CardContent, Divider, Grid, Icon, ListItem, ListItemIcon, Paper,
    Typography
} from "material-ui";

import BaseLayout from "../../../components/Layout/BaseLayout";
import withMaterial from "../../../lib/withMaterial";
import styled from "styled-components";
import Link from "../../../components/Link";
import ArrowBack from 'material-ui-icons/ArrowBack';


const PaperContainer = styled(Paper)`
   && {  
        padding: 10px;
        margin-bottom: 16px;
      }
      
    h3 {
      margin: 10px 0;
      }
`

const page = () =>

    <BaseLayout>


        <Grid item xs={6} md={10}>
            <Link href="/frontend/explore">
                <ArrowBack/>
            </Link>
        </Grid>
        <Grid item xs={6} md={2}>
            <Button variant="raised" color="primary" href="../getYourType/getYourType">
                Get Your Type
            </Button>
        </Grid>

        <Grid item xs={12}>
            <Paper elevation={4}>
                <PaperContainer>
                    <Typography variant="headline" component="h3">
                        1 strict perfectionist
                    </Typography>
                    <Typography component="p">
                        Enneagram Ones value principles and integrity and are driven by the motivational need to be good
                        and
                        right . Their name comes from their striving for perfection and self-control. Integrity and
                        quality
                        will also be important to them. Ones tend to appreciate standards, principles and structure.
                    </Typography>
                    <br/>
                    <Divider light/>

                    <Typography variant="headline" component="h3">
                        Potential
                    </Typography>
                    <Typography component="p">
                        At their best, Ones are tolerant, self-accepting and serene, offering dignity and discernment to
                        themselves and the world around them. Less-healthy type Ones tend to be judgmental,
                        uncompromising and pedantic, driven by a critical gaze and an acute awareness of their own
                        imperfections and sense of not being good enough.
                    </Typography>

                </PaperContainer>
            </Paper>
            <div>
                <Card>
                    <CardContent>
                        <Typography variant="headline" component="h4">
                            Self-Talk
                        </Typography>
                        <Typography component="p">
                            “The world is imperfect and I must work towards improving it. I must be good/right/perfect
                            and avoid mistakes. I must distinguish between right and wrong and apply myself diligently
                            to make the world better ”
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </Grid>
    </BaseLayout>

export default withMaterial(page)