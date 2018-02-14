import { Component } from 'react';
import React from "react";
import withDefaults from "../../lib/withDefaults";
import CoreType from "../../components/KnowConatiners/CoreType";


class KnowTypes extends Component {
    render() {
        return (
         <CoreType></CoreType>
        );
    }
}

export default withDefaults(KnowTypes)
