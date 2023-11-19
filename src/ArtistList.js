import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";

import { FlatList } from "react-native"; // Replace deprecated ListView with FlatList
import ArtistBox from "./ArtistBox";

export default class ArtistList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: this.prepareDataSource(props.artists || []),
    };
  }

  prepareDataSource = (data) => {
    return data.map((item, index) => ({
      ...item,
      key: `${index}`, // Assign a unique key for FlatList
    }));
  };

  handlePress = (artist) => {
    if (artist && artist.id) {
      Actions.artistDetail({ artist });
    } else {
      console.error("No se pudo encontrar información del artista");
    }
  };

  renderArtist = ({ item }) => (
    <TouchableOpacity onPress={() => this.handlePress(item)}>
      <ArtistBox artist={item} />
    </TouchableOpacity>
  );

  componentDidUpdate(prevProps) {
    if (prevProps.artists !== this.props.artists) {
      this.setState({
        dataSource: this.prepareDataSource(this.props.artists),
      });
    }
  }

  render() {
    return (
      <FlatList
        data={this.state.dataSource}
        renderItem={this.renderArtist}
        keyExtractor={(item) => item.key}
        enableEmptySections={true}
      />
    );
  }
}
