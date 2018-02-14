import {Avatar, Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, Typography} from "material-ui";
import PropTypes from 'prop-types'
import styled from "styled-components";
import Link from "./Link";




const MyAvatar = styled(Avatar)`
   && {   
        background-color: ${p => p['background-color']};
      }
`


MyAvatar.propTypes = {
    backgroundColor: PropTypes.string,
};

export default ({children, headerTitle, color, buttonLink}) =>


    <Grid item xs={12} sm={12} md={4}>
        <Card>
            <CardHeader avatar={
                <MyAvatar background-color={color}>{headerTitle[0]}</MyAvatar>
            } title={headerTitle}>

            </CardHeader>
            <Divider light />
            <CardContent>
                <Typography>
                    {children}
                </Typography>
            </CardContent>
            <Divider light />
            <CardActions>
                <Link button href={buttonLink}>Learn More</Link>
            </CardActions>
        </Card>
    </Grid>





