import React, { PureComponent } from "react";
import style from "./index.module.scss";
import firebase from "../../database/firebase";

export default class EditInventory extends PureComponent {
  constructor(props) {
    super(props);
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
