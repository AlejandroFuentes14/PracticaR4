import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";

import { FlatList } from "react-native"; // Usamos FlatList en lugar de ListView
import ArtistBox from "./ArtistBox";

export default class ArtistList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [], // Cambiamos el estado inicial para usar un array en lugar de ListView.DataSource
    };
  }

  updateDataSource = (data) => {
    this.setState({
      dataSource: data,
    });
  };

  handlePress(artist) {
    Actions.artistDetail({ artist });
  }

  render() {
    return (
      <FlatList
        data={this.state.dataSource}
        renderItem={({ item: artist }) => (
          <TouchableOpacity onPress={() => this.handlePress(artist)}>
            <ArtistBox artist={artist} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()} // Reemplazamos 'id' con la clave de tus artistas
        enableEmptySections={true}
      />
    );
  }

  componentDidMount() {
    this.updateDataSource(this.props.artists);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.artists !== this.props.artists) {
      this.updateDataSource(this.props.artists);
    }
  }
}
