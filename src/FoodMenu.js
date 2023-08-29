import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function FoodMenu({ snacks, drinks }) {
  // New function to sort items alphabetically. 
  // Helps in displaying items in a sorted order.
  function sortItemsAlphabetically(data) {
    return [...data].sort((a, b) => a.name.localeCompare(b.name));
  }

  // Generalized "snacks" to "items", which could be either snacks or drinks.
  // Decides which data to use based on the provided props.
  let items = sortItemsAlphabetically(snacks || drinks);

  // Determines the route to use for the Link based on provided data.
  let routePath = snacks ? "snacks" : "drinks"; 

  // New check: if there are no items to display.
  if (!items || items.length === 0) {
    return <h2>No items found.</h2>;
  }

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          // Dynamically sets the card title based on the provided data.
          <CardTitle className="font-weight-bold text-center">
            {snacks ? "Snacks" : "Drinks"} Menu
          </CardTitle>

          // Rest remains the same until the ListGroup.

          <ListGroup>
            // Generalized "snack" to "item" to map through and display the items.
            {items.map(item => (
              <Link to={`/${routePath}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>

          // New: Links to add a new snack or drink.
          {snacks ? 
            <Link to="/snacks/add">Add snack?</Link> 
            : 
            <Link to="/drinks/add">Add drink?</Link>}
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
