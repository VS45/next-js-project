import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { getEventById } from "dummy-data";
import EventLogistics from "components/event-detail/event-logistics";
import EventSummary from "components/event-detail/event-summary";
import EventContent from "components/event-detail/event-content";

const EventDetail = () => {
  const router = useRouter();
  const id = router.query.eventId;
  const event = getEventById(id);
  if (!event) {
    return <p>No Event found</p>;
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>{event.description}</EventContent>
    </Fragment>
  );
};

export default EventDetail;
