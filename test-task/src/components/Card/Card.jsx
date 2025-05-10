import React from "react";
import { style } from "./Card.style";

export const Card = ({
  name,
  username,
  email,
  address: { street, suite, city, zipcode },
  phone,
  website,
  company,
}) => {
  return (
    <article style={style.cardWrapper} id={name}>
      <div style={style.cardLine}>
        <h3 style={style.cardLabel}>Name:</h3>
        <p>{name}</p>
      </div>
      <div style={style.cardLine}>
        <h5 style={style.cardLabel}>Username:</h5>
        <p>{username}</p>
      </div>
      <div style={style.cardLine}>
        <h5 style={style.cardLabel}>Email:</h5>
        <p>{email}</p>
      </div>
      <div style={style.cardLine}>
        <h5 style={style.cardLabel}>Address:</h5>
        <p>
          {suite}, {street}, {city}, {zipcode}
        </p>
      </div>
      <div style={style.cardLine}>
        <h5 style={style.cardLabel}>Phone:</h5>
        <p>{phone}</p>
      </div>
      <div style={style.cardLine}>
        <h5 style={style.cardLabel}>Website:</h5>
        <p>{website}</p>
      </div>
      <div style={style.cardLine}>
        <h5 style={style.cardLabel}>Company:</h5>
        <p>{company.name}</p>
      </div>
    </article>
  );
};
