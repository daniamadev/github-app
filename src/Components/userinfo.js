"use strict";

import React from "react";

const UserInfo = () => (
  <div className="user-info">
    <img src="https://avatars2.githubusercontent.com/u/49914244?v=4" alt="" />
    <h1 className="username">
      <a href="https://github.com/daniamadev"> Daniela Amadeu</a>
    </h1>
    <ul className="repos-info">
      <li>- Repositórios: 21</li>
      <li>- Seguidores: 8</li>
      <li>- Seguindo: 16</li>
    </ul>
  </div>
);

export default UserInfo;
