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

const page = () =>
    <BaseLayout>
        <Grid item xs={12}>
            <Paper elevation={4}>
                <PaperContainer>
                    <Link button variant="raised" color="primary" href="exploreType/type1">Learn More</Link>
                </PaperContainer>
            </Paper>
        </Grid>
    </BaseLayout>

export default withMaterial(page)