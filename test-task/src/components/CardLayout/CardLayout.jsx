import React, { useEffect, useState } from "react";
import { getCards } from "../../api/getCards";
import { style } from "./CardLayout.style";
import { Card } from "../Card/Card";

export const CardLayout = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [sortName, setSortName] = useState(true);
  const [sortUserName, setSortUserName] = useState(true);
  const [companyName, setCompanyName] = useState(true);
  const [emailName, setEmailName] = useState(true);
  const [address, setAddress] = useState(true);

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

  const sortUsersByUserName = (data, ascending) => {
    return [...data].sort((a, b) => {
      const nameA = a.username.toLowerCase();
      const nameB = b.username.toLowerCase();
      return ascending
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });
  };

  const sortByCompanyName = (data, ascending) => {
    return [...data].sort((a, b) => {
      const nameA = a.company.name.toLowerCase();
      const nameB = b.company.name.toLowerCase();
      return ascending
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });
  };

  const sortByEmailName = (data, ascending) => {
    return [...data].sort((a, b) => {
      const nameA = a.email.toLowerCase();
      const nameB = b.email.toLowerCase();
      return ascending
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });
  };

  const sortByAddress = (data, ascending) => {
    return [...data].sort((a, b) => {
      const nameA = a.address.city.toLowerCase();
      const nameB = b.address.city.toLowerCase();
      return ascending
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });
  };

  const handleSortByAddressToggle = () => {
    const newOrder = !address;
    const sorted = sortByAddress(users, newOrder);
    setUsers(sorted);
    setAddress(newOrder);
  };

  const handleSortByEmailNameToggle = () => {
    const newOrder = !emailName;
    const sorted = sortByEmailName(users, newOrder);
    setUsers(sorted);
    setEmailName(newOrder);
  };

  const handleSortByCompanyNameToggle = () => {
    const newOrder = !companyName;
    const sorted = sortByCompanyName(users, newOrder);
    setUsers(sorted);
    setCompanyName(newOrder);
  };

  const handleSortByUserNameToggle = () => {
    const newOrder = !sortUserName;
    const sorted = sortUsersByUserName(users, newOrder);
    setUsers(sorted);
    setSortUserName(newOrder);
  };

  const handleSortByNameToggle = () => {
    const newOrder = !sortName;
    const sorted = sortUsersByName(users, newOrder);
    setUsers(sorted);
    setSortName(newOrder);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main>
      <section style={style.mainContainer}>
        <div style={style.buttonWrapper}>
          <button onClick={handleSortByNameToggle} style={style.button}>
            Sort by Name {sortName ? "↓ (A-Z)" : "↑ (Z-A)"}
          </button>
          <button onClick={handleSortByUserNameToggle} style={style.button}>
            Sort by UserName {sortUserName ? "↓ (A-Z)" : "↑ (Z-A)"}
          </button>
          <button onClick={handleSortByCompanyNameToggle} style={style.button}>
            Sort by CompanyName {companyName ? "↓ (A-Z)" : "↑ (Z-A)"}
          </button>
          <button onClick={handleSortByEmailNameToggle} style={style.button}>
            Sort by EmailName {emailName ? "↓ (A-Z)" : "↑ (Z-A)"}
          </button>
          <button onClick={handleSortByAddressToggle} style={style.button}>
            Sort by City Name {address ? "↓ (A-Z)" : "↑ (Z-A)"}
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
