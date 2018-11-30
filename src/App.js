import React, { Component } from "react";
import ProviderCard from "./components/ProviderCard";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      providers: []
    };
  }

  componentDidMount() {
    let reqUrl =
      "https://provider.stvincent.org/API/fullAPI?mode=ProviderResults&OrgUnits=20&sortDirection=Asc&dataFormat=json";

    const request = url => {
      return fetch(url).then(response => response.json());
    };

    request(reqUrl)
      .then(data => {
        const {
          ProviderInformation: { Provider }
        } = data;
        const ids = Provider.map(provider => provider.ID);
        return ids;
      })
      .then(ids => {
        let individualDocs = [];
        ids.map(id =>
          individualDocs.push(
            `https://provider.stvincent.org/API/fullAPI?mode=ProviderDetails&providerID=${id}&dataFormat=json`
          )
        );
        let promises = individualDocs.map(url =>
          fetch(url).then(response => response.json())
        );
        Promise.all(promises).then(results => {
          this.setState({
            providers: results
          });
        });
      });
  }

  render() {
    return (
      <div className="container">
        {this.state.providers.map(function(provider, index) {
          let info = provider.ProviderInformation.Provider;
          return (
            <ProviderCard
              key={index}
              bio={info.Bio}
              name={info.FirstName + " " + info.LastName}
              id={info.ID}
              photoURL={info.PhotoURL}
              specialty={info.Specialty[0].Name}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
