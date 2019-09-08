import React from 'react';
import { Skeleton } from 'antd';
import {connect} from 'react-redux';
import {DescriptionBody} from './DescriptionBody';
import {DescriptionHeader} from './DescriptionHeader';

const DescriptionContent = (props) => (
  <div style={{minHeight: "100vh", backgroundColor:"#282c34"}}>
      <DescriptionHeader {...props}/>
      { props.description ? <DescriptionBody {...props} /> : <Skeleton/>}
  </div>
)

const mapStateToProps = (state, ownProps) => {
  const description = state.database.filter(p => p.id === ownProps.match.params.id)[0]
  return {description}
}

export const Description = connect(mapStateToProps)(DescriptionContent);