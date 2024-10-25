import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
} from "@mui/material";
import classes from "./UserSearch.module.css";

const UserSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    setSearchResults([]);

    try {
      const response = await fetch(
        `http://localhost:9090/api/v1/users/users/search?username=${searchTerm}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <Header />
      <div className={classes.container}>
        <h2>Search for Users</h2>
        <TextField
          label="Username"
          variant="outlined"
          value={searchTerm}
          onChange={handleInputChange}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          style={{ marginTop: "10px", width: "100%" }}
        >
          Search
        </Button>
        {loading && <CircularProgress style={{ marginTop: "10px" }} />}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <List>
          {searchResults.map((user) => (
            <ListItem
              component={Link}
              to={`/users/${user.id}`}
              key={user.id}
              button="true"
            >
              <ListItemText
                primary={`Username: ${user.username}`}
                secondary={`Email: ${user.email}`}
              />
            </ListItem>
          ))}
        </List>
        {searchResults.length === 0 && !loading && !error && (
          <p className={classes.erroText}>No users found..</p>
        )}
      </div>
      <Footer />
    </Fragment>
  );
};

export default UserSearch;
