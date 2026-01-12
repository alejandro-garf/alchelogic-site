import MatrixBackground from '@/components/MatrixBackground';

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center">
      <MatrixBackground />
      <div className="z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Alchelogic
        </h1>
        <p className="text-xl md:text-2xl text-purple-300">
          Enterprise Security. Small Business Pricing.
        </p>
      </div>
    </main>
  );
}