import React, { Component } from 'react';
import { Avatar, PageHeader } from 'antd';
import { getFromId } from '../api/query';


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
      <div>
        {this.state.description &&
        <div>
          <PageHeader
            title={this.state.description.title}
            subTitle={`${this.state.description.days} days`}
            onBack={() => this.props.history.goBack()}
            />
          <Avatar size={128} src={this.state.description.image} />

        </div>}
        <p>{console.log(this.props)}</p>
      </div>
    )
  }
}