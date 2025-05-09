import React from "react";
import { style } from "./Card.style";

export const Card = ({
  id,
  name,
  username,
  email,
  address: { street, suite, city, zipcode },
}) => {
  return (
    <article style={style.cardWrapper} id={id}>
      <h3>name: {name}</h3>
      <p>user name: {username}</p>
      <p>Email: {email}</p>
      <p>
        Address: {suite}, {street}, {city}, {zipcode}
      </p>
    </article>
  );
};
