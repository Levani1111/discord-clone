import React from "react";
import "./ChatHeader.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import EditLocationIcon from "@material-ui/icons/EditLocation";

function ChatHeader() {
  return (
    <div className="chatHeader">
      <h1>chatHeader</h1>
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">#</span>
          Test Channel Name
        </h3>
      </div>

      <div className="chatHeader__right">
        <NotificationsIcon />
        <EditLocationIcon />
        <PeopleAltIcon />
      </div>
    </div>
  );
}

export default ChatHeader;
