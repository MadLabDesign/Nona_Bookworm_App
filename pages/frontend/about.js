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
                        About Enneagram
                    </Typography>
                    <Typography component="p">
                        Integrative Enneagram Solutions is a South African-based company providing individual, team and
                        organization development solutions. Our specialty is using the Enneagram as a structural
                        foundation and we are passionate about creating intelligent, intuitive and easy-to-use products.
                        As an innovative Enneagram company, we successfully combine technology, statistical science and
                        research with transformational psychology, coaching and OD.
                    </Typography>
                    <Typography component="p">
                        At the heart of this lies our Integrative Intelligent Questionnaire technology. Behind the
                        scenes, this leading-edge application delivers results that are accurate, powerful and
                        significantly meaningful to our clients worldwide. We continuously explore and unpack the
                        insights from the Enneagram to refine and perfect our core product, the iEQ9 Intelligent
                        Questionnaire and the Integrative individual and team reports.
                    </Typography>
                    <Typography component="p">
                        We represent the Enneagram authentically and aim to deliver insights in a professional,
                        meaningful, actionable and positive way. We do this through our range of reports which identify
                        the Enneagram profile, Centre of Expression, 27 Instinctual Subtypes, Levels of Integration and
                        the Six Dimensions of Stress and Strain within an individual or team.
                    </Typography>
                    <Typography component="p">
                        Integrative Enneagram Solutions has trained over 800 practitioners globally. Our questionnaire
                        and reports have been translated into Danish, Dutch, Finnish, French, German, Italian,
                        Portuguese, Russian and Spanish.
                    </Typography>
                </PaperContainer>
            </Paper>

        </Grid>

    </BaseLayout>

export default withMaterial(page)