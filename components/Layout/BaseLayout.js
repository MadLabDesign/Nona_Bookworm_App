import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';
import MailIcon from 'material-ui-icons/Mail';
import StoreIcon from 'material-ui-icons/ShoppingCart';
import DraftsIcon from 'material-ui-icons/Drafts';
import DonutIcon from 'material-ui-icons/DonutLarge';
import SupportIcon from 'material-ui-icons/HelpOutline';
import AccountIcon from 'material-ui-icons/Fingerprint';
import styled from 'styled-components';
import {Avatar, Badge, Button, Grid} from "material-ui";
import Link from "../Link";


const drawerWidth = 220;


const Root = styled.div`
        width: 100%;
        height: 100vh;
        z-index: 1;
        overflow: visible;
`
const AppFrame = styled.div`
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
`


const StyledAppBar = styled(AppBar)`
        && {
        background-color: #fff;
        position: fixed;
        left: ${drawerWidth}px;
        top: 0;
        display: flex;
        flex-direction: row;
        box-shadow: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        
        @media (max-width: 961px) {
        left: 0;
        }
        }
        
      
            
`

const imageContainer = styled(Typography)`
      height: 40px;
      display: block;
`

const StyledIconButton = styled(IconButton)`
        
        && {
        color: #2B4866;
        }
        &&{
          @media screen and (min-width: 961px) {
display: none;
}
}


`
const StyledDrawer = styled(Drawer)`
width: 250px;

`

const DrawerContainer = styled.div`
    background-color:  #2B4866;;
    height: 100%;
    color: #fff;
`


const DrawerHeader = styled.div`
    min-height: 64px;
    left: ${drawerWidth}px;
`

const Content = styled.main`
        width: 100%;
        height: 225px;
        margin-top: 80px;
        padding:0 10px;
        
         @media (min-width: 962px) {
          padding:0 16px 0 0;
        }
        
`




const mailFolderListItems = (
    <div>
        <Link href="/frontend/store">
            <ListItem button>
                <ListItemIcon>
                    <StoreIcon/>
                </ListItemIcon>
                <ListItemText primary="Store"/>
            </ListItem>
        </Link>

        <Link href="/frontend/about">
            <ListItem button>
                <ListItemIcon>
                    <DonutIcon/>
                </ListItemIcon>
                <ListItemText primary="About Enneagram"/>
            </ListItem>
        </Link>
        <Link href="/frontend/support">
            <ListItem button>
                <ListItemIcon>
                    <SupportIcon/>
                </ListItemIcon>
                <ListItemText primary="Support"/>
            </ListItem>
        </Link>
        <Link href="/frontend/feedback">
            <ListItem button>
                <ListItemIcon>
                    <DraftsIcon/>
                </ListItemIcon>
                <ListItemText primary="Feedback"/>
            </ListItem>
        </Link>
    </div>
);

const otherMailFolderListItems = (
    <div>
        <Link href="/frontend/account-settings">
            <ListItem button>
                <ListItemIcon>
                    <AccountIcon/>
                </ListItemIcon>
                <ListItemText primary="Edit my Account"/>
            </ListItem>
        </Link>
        <Divider/>
        <ListItem>
        <Button variant="raised" color="primary">Book a Coach</Button>
        </ListItem>
    </div>
);

class BaseLayout extends React.Component {
    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState({mobileOpen: !this.state.mobileOpen});
    };

    render() {
        const {children} = this.props;
        const drawer = (

            <div>
                <DrawerHeader>
                    <Avatar alt="Remy Sharp" src="/static/images/profile.jpg"/>
                </DrawerHeader>
                <Divider/>
                <List>{mailFolderListItems}</List>
                <Divider/>
                <List>{otherMailFolderListItems}</List>

            </div>

        );

        return <Root>
            <AppFrame>

                <StyledAppBar>
                    <Toolbar>
                        <StyledIconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerToggle}
                        >
                            <MenuIcon/>
                        </StyledIconButton>

                            <Typography>
                                <Hidden smDown>
                                    <Link href="/frontend/index"><img src="/static/images/logo_full_dark.png"/></Link>
                                </Hidden>
                                <Hidden mdUp>
                                    <Link href="/frontend/index"><img src="/static/images/icon_nine_dark.png"/></Link>
                                </Hidden>
                                <Link button href="/frontend/explore">Explore</Link>
                                <Link button href="/frontend/know">Know</Link>
                                <Link button href="/frontend/grow">Grow</Link>
                            </Typography>
                    </Toolbar>
                </StyledAppBar>
                <Hidden mdUp>
                    <StyledDrawer
                        variant="temporary"
                        anchor={'left'}
                        open={this.state.mobileOpen}
                        onClose={this.handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </StyledDrawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <StyledDrawer
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </StyledDrawer>
                </Hidden>
                <Content>
                    <Grid container spacing={16}>
                        {children}
                    </Grid>
                </Content>
            </AppFrame>
        </Root>
    }
}

BaseLayout.propTypes = {};

export default BaseLayout