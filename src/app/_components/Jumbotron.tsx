const Jumbotron = () => {
  return (
    <section className="bg-cover bg-no-repeat bg-[url('/img.avif')] bg-gray-700 bg-blend-multiply">
      <div className="px-8 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-5xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Circuit Code
        </h1>
        <p className="mb-8 text-2xl font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Your destination for in-depth Formula 1 analysis, exploring the
          technology, strategy, and passion that drive the sport.
        </p>
      </div>
    </section>
  );
};

export default Jumbotron;
