import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

import ArtistList from "./ArtistList";
import { getMusicData } from "./api-client";

export default class HomeView extends Component {
  state = {
    artists: null,
    error: null,
  };

  componentDidMount() {
    getMusicData()
      .then((data) => {
        if (data && data.length > 0) {
          this.setState({ artists: data });
        } else {
          throw new Error("No se encontraron datos de artistas");
        }
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  render() {
    const { artists, error } = this.state;

    if (error) {
      return (
        <View style={styles.container}>
          <Text>Error: {error}</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        {artists && <ArtistList artists={artists} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    paddingTop: 50,
  },
});
