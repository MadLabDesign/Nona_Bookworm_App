import {Button, Card, CardActions, CardContent, CardHeader, Divider, Grid,Typography} from "material-ui";

import BaseLayout from "../../components/Layout/BaseLayout";
import withMaterial from "../../lib/withMaterial";



const page = () =>
    <BaseLayout>
        <Grid item xs={12}>
            <Typography variant="headline" component="h1">
                Grow
            </Typography>
        </Grid>
        <Grid item xs={12} sm={2} md={3}>
            <Card>
                <CardHeader title="Core Type"/>
                <Divider light />
                <CardContent>
                    <Typography>
                        fghjk
                    </Typography>
                </CardContent>
                <Divider light />
                <CardActions>
                    <Button variant="raised"  color="primary" href="../containers/grow/">
                        Primary
                    </Button>
                </CardActions>
            </Card>
        </Grid>
        <Grid item xs={12} sm={2} md={3}>
            <Card>
                <CardHeader title="Sub Type"/>
                <Divider light />
                <CardContent>
                    <Typography>
                        fghjk
                    </Typography>
                </CardContent>
                <Divider light />
                <CardActions>
                    <Button variant="raised"  color="primary" href="../containers/grow/">
                        Primary
                    </Button>
                </CardActions>
            </Card>
        </Grid>
        <Grid item xs={12} sm={2} md={3}>
            <Card>
                <CardHeader title="Center"/>
                <Divider light />
                <CardContent>
                    <Typography>
                        fghjk
                    </Typography>
                </CardContent>
                <Divider light />
                <CardActions>
                    <Button variant="raised"  color="primary" href="../containers/grow/">
                        Primary
                    </Button>
                </CardActions>
            </Card>
        </Grid>
        <Grid item xs={12} sm={2} md={3}>
            <Card>
                <CardHeader title="Instincts">
                    <h2>Instincts</h2>
                </CardHeader>
                <Divider light />
                <CardContent>
                    <Typography>
                        fghjk
                    </Typography>
                </CardContent>
                <Divider light />
                <CardActions>
                    <Button variant="raised"  color="primary" href="../containers/grow/">
                        Primary
                    </Button>
                </CardActions>
            </Card>
        </Grid>
        <Grid item xs={12} sm={2} md={3}>
            <Card>
                <CardHeader title="Social Styles"/>
                <Divider light />
                <CardContent>
                    <Typography>
                        fghjk
                    </Typography>
                </CardContent>
                <Divider light />
                <CardActions>
                    <Button variant="raised"  color="primary" href="../containers/grow/">
                        Primary
                    </Button>
                </CardActions>
            </Card>
        </Grid>
        <Grid item xs={12} sm={2} md={3}>
            <Card>
                <CardHeader title="Conflict Styles"/>
                <Divider light />
                <CardContent>
                    <Typography>
                        fghjk
                    </Typography>
                </CardContent>
                <Divider light />
                <CardActions>
                    <Button color="primary" href="../containers/grow/">
                        Primary
                    </Button>
                </CardActions>
            </Card>
        </Grid>


    </BaseLayout>

export default withMaterial(page)