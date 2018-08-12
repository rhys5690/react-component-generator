import React, { Component } from 'react';
import './<%= name %>.css'

class <%= name %> extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: 'your state is ready'
    };
  };

  render() {
    return(
      <div class='<%= name %>'>
        <%= name %>
      </div>
    );
  }
}

export default <%= name %>;
