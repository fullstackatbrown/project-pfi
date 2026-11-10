import {client} from "../../../sanity/lib/client";
import {partnersQuery} from "../../../sanity/queries";
import type {Partner} from "../../../sanity/types";

export const revalidate = 60;

export default async function MapPage() {
  const partners = await client.fetch<Partner[]>(partnersQuery);

  return (
    <main className="page-content">
      <h1>Map</h1>
      {partners.length > 0 ? (
        <div className="location-list">
          {partners.map((partner) => (
            <article className="location-card" key={partner._id}>
              <h2>{partner.name}</h2>
              {partner.address && <p className="location-card__address">{partner.address}</p>}
              {partner.description && <p>{partner.description}</p>}
            </article>
          ))}
        </div>
      ) : (
        <p className="empty-state">No partner locations have been published yet.</p>
      )}
    </main>
  );
}
