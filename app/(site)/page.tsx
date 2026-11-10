import {client} from "../../sanity/lib/client";
import {homepageQuery} from "../../sanity/queries";
import type {HomepageContent} from "../../sanity/types";

export const revalidate = 60;

export default async function HomePage() {
  const homepage = await client.fetch<HomepageContent | null>(homepageQuery);

  return (
    <main className="page-content">
      <h1>Home</h1>
      {homepage ? (
        <div className="statement-grid">
          {homepage.missionStatement && (
            <section className="statement-card">
              <h2>Our mission</h2>
              <p>{homepage.missionStatement}</p>
            </section>
          )}
          {homepage.visionStatement && (
            <section className="statement-card">
              <h2>Our vision</h2>
              <p>{homepage.visionStatement}</p>
            </section>
          )}
          {homepage.valuesStatement && (
            <section className="statement-card">
              <h2>Our values</h2>
              <p>{homepage.valuesStatement}</p>
            </section>
          )}
        </div>
      ) : (
        <p className="empty-state">Homepage content has not been published yet.</p>
      )}
    </main>
  );
}
