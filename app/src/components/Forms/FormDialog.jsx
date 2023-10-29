import React, { Component } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextInput } from "./index";

export default class FormDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      description: "",
    };

    this.inputName = this.inputName.bind(this.inputName);
    this.inputEmail = this.inputEmail.bind(this.inputEmail);
    this.inputDescription = this.inputDescription.bind(this.inputDescription);
  }

  inputName = (event) => {
    this.setState({ name: event.target.value });
  };

  inputEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  inputDescription = (event) => {
    this.setState({ description: event.target.value });
  };

  submitForm = () => {
    const name = this.state.name;
    const email = this.state.email;
    const description = this.state.description;

    const payload = {
      text:
        "お問い合わせがありました\n" +
        "お名前：" +
        name +
        "\n" +
        "Email:" +
        email +
        "\n" +
        "お問い合わせ内容：\n" +
        description,
    };

    // Webhook(Slack)
    const url = "https://hooks.slack.com/services/<AAA>/<BBB>>";

    fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
    }).then(() => {
      alert("送信が完了しました。追ってご連絡します！");
      this.setState({
        name: "",
        email: "",
        description: "",
      });
      return this.open.props.handleClose();
    });
  };

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"お問い合わせフォーム"}
        </DialogTitle>
        <DialogContent>
          <div>
            <TextInput
              label={"お名前(必須)"}
              multiline={false}
              rows={1}
              value={this.state.name}
              type={"text"}
              onChange={this.inputName}
            />
            <TextInput
              label={"メールアドレス(必須)"}
              multiline={false}
              rows={1}
              value={this.state.email}
              type={"email"}
              onChange={this.inputEmail}
            />
            <TextInput
              label={"お問い合わせ内容(必須)"}
              multiline={true}
              rows={5}
              value={this.state.description}
              type={"text"}
              onChange={this.inputDescription}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose}>キャンセル</Button>
          <Button onClick={this.submitForm} autoFocus>
            送信する
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}