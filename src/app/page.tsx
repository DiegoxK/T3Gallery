import { desc } from "drizzle-orm";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model) => desc(model.id),
  });

  return (
    <main>
      <div className="flex flex-wrap gap-8">
        {[...images, ...images, ...images].map((image) => (
          <div key={image.id}>
            <img src={image.url} alt="mock" className="w-48" />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
