import React, { Component } from "react";
import ProviderCard from "./components/ProviderCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      LastName: "",
      Bio: "",
      PhotoURL: "",
      ID: 0,
      Specialty: ""
    };
  }

  componentDidMount() {
    fetch(
      "https://provider.stvincent.org/API/fullAPI?mode=ProviderDetails&providerID=185&dataFormat=json"
    )
      .then(response => response.json())
      .then(data => {
        let providerData = data.ProviderInformation.Provider;
        this.setState({
          FirstName: providerData.FirstName,
          LastName: providerData.LastName,
          Bio: providerData.Bio,
          PhotoURL: providerData.PhotoURL,
          ID: providerData.ID,
          Specialty: providerData.Specialty[0].Name
        });
      });
  }

  render() {
    return (
      <ProviderCard
        Name={this.state.FirstName + " " + this.state.LastName}
        Bio={this.state.Bio}
        PhotoURL={this.state.PhotoURL}
        ID={this.state.ID}
        Specialty={this.state.Specialty}
      />
    );
  }
}

export default App;
