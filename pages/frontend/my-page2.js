import { Component } from 'react';
import AuthenticatedLanding from '../../components/AuthenticatedLanding';
import withDefaults from '../../lib/withDefaults';

class Index extends Component {
    render() {
        const {loggedInUser} = this.props;
        // console.log(this.props)
        if (!loggedInUser || !loggedInUser.id) return <div/>
        return <AuthenticatedLanding user={loggedInUser}/>
    }
}

export default withDefaults(Index)
