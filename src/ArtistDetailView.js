import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { Actions } from "react-native-router-flux";

export default class ArtistDetailView extends Component<Props> {
  static navigationOptions = {
    headerTitle: () => (
      <Text style={styles.headerTop}>Detalles del Artista</Text>
    ),
  };

  render() {
    const { artist } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: artist.image }} />
        <Text style={styles.artistName}>{artist.name}</Text>
        <Text style={styles.artistId}>{artist.id}</Text>
        <View style={styles.boxOtherInfo}>
          <Text style={styles.otherInfoText}>Listener: {artist.listener}</Text>
          <Text style={styles.otherInfoText}>Streamable: {artist.streamable}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderWidth: 5,
    borderColor: "#6C3483",
    marginTop: 20,
    marginBottom: 20,
  },
  artistName: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#6C3483",
    textAlign: "center",
  },
  artistId: {
    fontSize: 18,
    fontFamily: "sans-serif-light",
    marginBottom: 10,
    color: "#6C3483",
    textAlign: "center",
  },
  boxOtherInfo: {
    alignItems: "center",
    marginTop: 15,
    backgroundColor: "#EAECEE",
    padding: 10,
    borderRadius: 5,
  },
  otherInfoText: {
    fontSize: 18,
    color: "#6C3483",
    marginBottom: 5,
  },
  headerTop: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#6C3483",
  },
});
