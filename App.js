import React, { Component } from "react";
import { Actions, Router, Scene } from "react-native-router-flux";
import LoginView from "./src/LoginView";
import HomeView from "./src/HomeView";
import ArtistDetailView from "./src/ArtistDetailView";

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={LoginView} initial={true} hideNavBar />
    <Scene key="home" component={HomeView} />
    <Scene key="artistDetail" component={ArtistDetailView} />
  </Scene>
);

export default class App extends Component<Props> {
  render() {
    return <Router scenes={scenes} />;
  }
}
