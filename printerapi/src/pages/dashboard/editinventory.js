import React, { PureComponent } from "react";
import style from "./index.module.scss";
import firebase from "../../database/firebase";
    this.state = {
      paper: [],
      newpaperid: "",
      PaperName: "",
      NewDescription: "",
      NewReams: 0,
      NewSheetsPerReam: 0,
      NewUses: [],
      NewWeight: 0,
    };
