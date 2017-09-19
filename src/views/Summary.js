import React, { PropTypes, Component } from 'react';
import {connect} from 'react-redux';

function Summary({sum}) {
  return (
    <div>
      <span>total count: {sum}</span>
    </div>
  )
}
Summary.PropTypes = {
  sum: PropTypes.number
}

function mapStateToProps(state) {
  let initSum = 0
  for(let key in state) {
    if(state.hasOwnProperty(key)) {
      initSum += state[key]
    }
  }
  return {sum: initSum}
}

export default connect(mapStateToProps)(Summary)
