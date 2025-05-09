import React, { useEffect, useState } from "react";
import { getCards } from "../../api/getCards";
import { style } from "./CardLayout.style";
import { Card } from "../Card/Card";

export const CardLayout = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [sortName, setSortName] = useState(true);

  useEffect(() => {
    getCards()
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message));
  }, []);

  const sortUsersByName = (data, ascending) => {
    return [...data].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return ascending
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });
  };

  const handleSortToggle = () => {
    const newOrder = !sortName;
    const sorted = sortUsersByName(users, newOrder);
    setUsers(sorted);
    setSortName(newOrder);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(users);

  return (
    <main>
      <section style={style.mainContainer}>
        <div style={style.buttonWrapper}>
          <button onClick={handleSortToggle} style={style.button}>
            Sort by Name {sortName ? "↓ (A-Z)" : "↑ (Z-A)"}
          </button>
        </div>
        <div style={style.cardContainer}>
          {users.length > 0 ? (
            users.map((user) => <Card key={user.id} {...user} />)
          ) : (
            <p>No Users</p>
          )}
        </div>
      </section>
    </main>
  );
};
