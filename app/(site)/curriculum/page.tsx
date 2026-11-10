import {client} from "../../../sanity/lib/client";
import {eventsQuery} from "../../../sanity/queries";
import type {Event} from "../../../sanity/types";

export const revalidate = 60;

function formatDate(value: string) {
  return new Date(`${value}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default async function CurriculumPage() {
  const events = await client.fetch<Event[]>(eventsQuery);

  return (
    <main className="page-content">
      <h1>Curriculum</h1>
      <section aria-labelledby="events-heading" className="content-section">
        <h2 id="events-heading">Workshops &amp; events</h2>
        {events.length > 0 ? (
          <div className="event-list">
            {events.map((event) => (
              <article className="event-card" key={event._id}>
                <p className="event-card__date">{formatDate(event.eventDate)}</p>
                <h3>{event.eventName}</h3>
                {event.topic && <p className="event-card__topic">{event.topic}</p>}
                {event.eventDescription && <p>{event.eventDescription}</p>}
              </article>
            ))}
          </div>
        ) : (
          <p className="empty-state">No workshops or events have been published yet.</p>
        )}
      </section>
    </main>
  );
}
