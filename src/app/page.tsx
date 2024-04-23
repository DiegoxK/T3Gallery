import { desc } from "drizzle-orm";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model) => desc(model.id),
  });

  return (
    <main>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {[...images, ...images, ...images].map((image) => (
          <div key={image.id}>
            <img src={image.url} alt="Image" />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
