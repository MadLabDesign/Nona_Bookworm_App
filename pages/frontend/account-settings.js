import BaseLayout from "../../components/Layout/BaseLayout";
import withMaterial from "../../lib/withMaterial";
import {Grid, Paper, Typography} from "material-ui";

import styled from "styled-components";

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
                    <Typography variant="headline" component="h3">
                        Account Settings
                    </Typography>
                    <Typography component="p">
                        Paper can be used to build surface or other elements for your application.
                    </Typography>
                </PaperContainer>
            </Paper>

        </Grid>

    </BaseLayout>

export default withMaterial(page)