import EventList from "components/events/event-list";
import { getAllEvents } from "dummy-data";
import React, { Fragment } from "react";
import { useRouter } from "next/router";
import EventsSearch from "components/events/events-search";
const AllEvents = () => {
  const router = useRouter();
  const featuredEvents = getAllEvents();
  function findEventsHandler(year, month) {
    router.push(`/events/${year}/${month}`);
  }
  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={featuredEvents} />
    </Fragment>
  );
};

export default AllEvents;
