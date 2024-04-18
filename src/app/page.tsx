const mockUrls = [
  "https://utfs.io/f/02c6d10c-6f88-4d91-b490-48d1d6ed16f7-jk7jec.webp",
  "https://utfs.io/f/003eafa7-8e9c-4e65-a6d9-8996afb70091-4jltdg.webp",
];

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-8">
        {mockUrls.map((url, index) => (
          <img key={index} src={url} alt="mock" className="w-48" />
        ))}
      </div>
    </main>
  );
}
