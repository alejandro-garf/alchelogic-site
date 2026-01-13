const partners = [
  { name: 'SentinelOne' },
  { name: 'StellarCyber' },
  { name: 'Coda' },
  { name: 'PDQ' },
];

export default function TrustBar() {
  return (
    <section className="relative z-10 py-16 px-4 border-t border-b border-gray-800/50">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-wider text-gray-500 text-center mb-8">
          Powered By Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="text-gray-500 opacity-50 hover:opacity-100 transition-opacity duration-300 text-lg md:text-xl font-semibold tracking-wide"
            >
              {partner.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
