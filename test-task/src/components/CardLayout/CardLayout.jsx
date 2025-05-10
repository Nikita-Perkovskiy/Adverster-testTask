import React, { useEffect, useState } from "react";
import { getCards } from "../../api/getCards";
import { style } from "./CardLayout.style";
import { Card } from "../Card/Card";

export const CardLayout = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [sortName, setSortName] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filterUsers = (users, val) => {
    if (!val) return users;

    const lowerTerm = val.toLowerCase();

    const checkValue = (value) => {
      if (typeof value === "string" || typeof value === "number") {
        return value.toString().toLowerCase().includes(lowerTerm);
      } else if (typeof value === "object" && value !== null) {
        return Object.values(value).some(checkValue);
      }
      return false;
    };

    return users.filter((user) => checkValue(user));
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main>
      <section style={style.mainContainer}>
        <div style={style.buttonWrapper}>
          <button onClick={handleSortToggle} style={style.button}>
            Sort by Name {sortName ? "↓ (A-Z)" : "↑ (Z-A)"}
          </button>
          <input
            type="text"
            placeholder="Search by any parameter..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={style.searchInput}
          />
        </div>
        <div style={style.cardContainer}>
          {filterUsers(users, searchTerm).length > 0 ? (
            filterUsers(users, searchTerm).map((user) => (
              <Card key={user.id} {...user} />
            ))
          ) : (
            <p>No Users</p>
          )}
        </div>
      </section>
    </main>
  );
};
