import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactCard = (props) => {
  // const [data, setData] = useState({
  //   id: "1t4",
  //   title: " How to pass state in react-router-dom",
  //   tag: ["reactjs", "react-router-dom"],
  // }); // first example
  // const [data, setData] = useState(false);
  console.log(props);
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
        {/* <Link to={`/contact/${id}`} state={{ data: data }} className="link">
          Apple
        </Link> */}
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHander(id)}
      ></i>
      <Link to="/edit" state={{ contact: props.contact }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default ContactCard;
