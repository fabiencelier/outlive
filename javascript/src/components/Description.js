import React from 'react';
import { Avatar, Icon, PageHeader, Skeleton } from 'antd';
import {connect} from 'react-redux';


function pad(num) {
  var s = "00" + num;
  return s.substr(s.length - 2);
}

const formatDate = (date) => {
  return `${date.getFullYear()}-${pad(date.getMonth()+1)}-${pad(date.getDate())}`
}

const DescriptionContent = (props) => (
  <div style={{minHeight: "100vh", backgroundColor:"#282c34"}}>
    <PageHeader
      style={{
        backgroundColor: "black",
        color: "white",
        paddingTop: "1em",
        paddingBottom: "1em",
      }}
      title={props.description && <div style={{color: "white"}}>{props.description.title}</div>}
      subTitle={props.description && <div style={{color: "white"}}>{`${props.description.days} days`}</div>}
      onBack={() => props.history.goBack()}
      backIcon={<Icon style={{color: "white"}} type="arrow-left" />}
      />
      {
        props.description
        ? <div style={{backgroundColor:"#282c34", color:"white"}}>
          <Avatar size={128} src={props.description.image} />
          <p>Birth : {formatDate(props.description.birthDate)}</p>
          <p>Death : {formatDate(props.description.deathDate)}</p>
          {props.description.description && <p>{props.description.description}</p>}
        </div>
        : <Skeleton/>
      }
  </div>
)

const mapStateToProps = (state, ownProps) => {
  const description = state.database.filter(p => p.id === ownProps.match.params.id)[0]
  console.log("description", description)
  console.log(state.database)
  console.log(ownProps)
  return {description}
}

export const Description = connect(mapStateToProps)(DescriptionContent);