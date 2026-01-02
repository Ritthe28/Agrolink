const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-[10vh] px-6 py-12">
      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
          About Our Platform
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          We are building a centralized digital marketplace that directly
          connects farmers with consumers, local sellers, and delivery partners
          — eliminating middlemen and ensuring fair prices for everyone.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mb-16">
        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to empower farmers by giving them direct access to
            markets, transparent pricing, and full control over their products.
            We aim to create a fair, efficient, and technology-driven
            agricultural ecosystem.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We envision a future where farmers, consumers, and delivery partners
            work together on a single digital platform that promotes trust,
            sustainability, and economic growth in the agricultural sector.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="font-semibold text-lg mb-2">👨‍🌾 Farmers</h3>
            <p className="text-gray-600">
              Farmers list their fresh produce, set prices, and manage orders
              directly from their dashboard.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="font-semibold text-lg mb-2">🛒 Customers</h3>
            <p className="text-gray-600">
              Customers browse products, add items to cart, place orders, and
              track deliveries in real time.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="font-semibold text-lg mb-2">🚚 Delivery Partners</h3>
            <p className="text-gray-600">
              Delivery partners accept delivery tasks, update order status, and
              ensure timely delivery of products.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <ul className="bg-white p-8 rounded-xl shadow space-y-4 text-gray-600">
            <li>✔ Direct farmer-to-customer connection</li>
            <li>✔ Transparent pricing</li>
            <li>✔ Secure authentication and role-based access</li>
            <li>✔ Real-time order and delivery tracking</li>
          </ul>

          <ul className="bg-white p-8 rounded-xl shadow space-y-4 text-gray-600">
            <li>✔ Fair income opportunities for farmers</li>
            <li>✔ Reliable delivery system</li>
            <li>✔ Scalable and modern technology stack</li>
            <li>✔ User-friendly dashboards</li>
          </ul>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <section className="max-w-6xl mx-auto text-center">
        <p className="text-gray-500">
          Built with ❤️ to support farmers and strengthen local agriculture.
        </p>
      </section>
    </div>
  );
};

export default About;
