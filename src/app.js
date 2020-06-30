"use strict";

import Search from "./Components/search";
import React, { Component } from "react";
import UserInfo from "./Components/userinfo";
import Actions from "./Components/actions";
import Repos from "./Components/repos";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Search />
        <UserInfo />
        <Actions />
        <Repos
          className="repos"
          title="Repositorios"
          repos={[
            {
              name: "Nome do repositório",
              link: "#",
            },
          ]}
        />

        <Repos
          className="starred"
          title="Favoritos"
          repos={[
            {
              name: "Nome do repositório",
              link: "#",
            },
          ]}
        />
      </div>
    );
  }
}
export default App;
