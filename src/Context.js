import React, { Component } from 'react';

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    room: [],
    featured: [],
    loading: [],
  };
  render() {
    return (
      <RoomContext.Provider value="Hello">
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
