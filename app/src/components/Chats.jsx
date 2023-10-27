import React from "react";
import { Chat } from "./index";
import List from "@mui/material/List";

const Chats = (props) => {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 400,
        bgcolor: "background.paper",
        height: 400,
        padding: 0,
        overflow: "auto",
      }}
    >
      {props.chats.map((chat, index) => {
        return (
          <Chat text={chat.text} type={chat.type} key={index.toString()} />
        );
      })}
    </List>
  );
};

export default Chats;
