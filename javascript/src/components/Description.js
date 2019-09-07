import React, { Component } from 'react';
import { Avatar, Icon, PageHeader, Skeleton } from 'antd';
import { getFromId } from '../api/query';


function pad(num) {
  var s = "00" + num;
  return s.substr(s.length - 2);
}

const formatDate = (date) => {
  return `${date.getFullYear()}-${pad(date.getMonth()+1)}-${pad(date.getDate())}`
}

export class Description extends Component{

  constructor(props) {
    super(props);
    this.state = {  };
  }

  componentDidMount() {
    getFromId(this.props.match.params.id).then(res => this.setState({description: res[0]}))
  }

  render() {
    return (
      <div style={{minHeight: "100vh", backgroundColor:"#282c34"}}>
        <PageHeader
          style={{
            backgroundColor: "black",
            color: "white",
            paddingTop: "1em",
            paddingBottom: "1em",
          }}
          title={this.state.description && <div style={{color: "white"}}>{this.state.description.title}</div>}
          subTitle={this.state.description && <div style={{color: "white"}}>{`${this.state.description.days} days`}</div>}
          onBack={() => this.props.history.goBack()}
          backIcon={<Icon style={{color: "white"}} type="arrow-left" />}
          />
          {
            this.state.description
            ? <div style={{backgroundColor:"#282c34", color:"white"}}>
              <Avatar size={128} src={this.state.description.image} />
              <p>Birth : {formatDate(this.state.description.birthDate)}</p>
              <p>Death : {formatDate(this.state.description.deathDate)}</p>
              {this.state.description.description && <p>{this.state.description.description}</p>}
            </div>
            : <Skeleton/>
          }
      </div>
    )
  }
}