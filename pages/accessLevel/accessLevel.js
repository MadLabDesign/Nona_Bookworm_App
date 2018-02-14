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
            <Typography>
                <h1>Access Level</h1>
            </Typography>
        </Grid>
    </BaseLayout>

export default withMaterial(page)