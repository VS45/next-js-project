import AddressIcon from "components/icons/address-icon";
import ArrowRightIcon from "components/icons/arrow-right-icon";
import DateIcon from "components/icons/date-icon";
import Button from "components/ui/button";
import Link from "next/link";
import React from "react";
import classes from "./event-item.module.css";
const EventItem = (props) => {
  const { data } = props;
  const humanReadableDate = new Date(data.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = data.location.replace(", ", "\n");
  const exploreEvent = `/events/${data.id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + data.image} alt={data.title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{data.title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.action}>
          <Button link={exploreEvent}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
