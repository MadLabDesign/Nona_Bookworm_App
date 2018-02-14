import {Card, Divider, Grid, Paper, Typography} from "material-ui";

import BaseLayout from "../../components/Layout/BaseLayout";
import withMaterial from "../../lib/withMaterial";
import styled from "styled-components";
import Link from "../../components/Link";




const PaperContainer = styled(Paper)`
   && {  
        padding: 10px;
      }
      
    h3 {
        margin: 10px 0;
      }
`

const EnneagramWheel = styled.div`
    &&{
       position: absolute;
       max-width: 80%;
       overflow: hidden;
    }

`

const page = () =>
    <BaseLayout>
        <Grid item xs={12}>
            <Typography variant="headline" component="h1">
                Explore
            </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
            <EnneagramWheel>
                <div>
                <img src="../../static/images/wheel_only.png"/>
                </div>
            </EnneagramWheel>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Paper elevation={4}>
                <PaperContainer>
                    <Typography variant="headline" component="h3">
                        <h3>Explore</h3>
                    </Typography>
                    <Typography component="p">
                        Paper can be used to build surface or other elements for your application.
                    </Typography>
                    <Divider light />
                    <Link button variant="raised" color="primary" href="../explore/exploreBase">Learn More</Link>
                </PaperContainer>
            </Paper>
        </Grid>
    </BaseLayout>

export default withMaterial(page)