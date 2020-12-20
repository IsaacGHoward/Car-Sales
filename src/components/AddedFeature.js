import React from 'react';
import { connect } from 'react-redux';

import {removeFeature} from '../actions/actions'

const AddedFeature = props => {
  function removeFeature(featureID){
    props.removeFeature(featureID);
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => removeFeature(props.feature.id)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(
  null,
  {removeFeature}
)(AddedFeature)
//export default AddedFeature;
