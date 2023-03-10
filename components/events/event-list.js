import Link from "next/link";
import React from "react";
import EventItem from "./event-item";
import classes from "./event-list.module.css";
const EventList = (props) => {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem key={event.id} data={event} />
      ))}
    </ul>
  );
};

export default EventList;
