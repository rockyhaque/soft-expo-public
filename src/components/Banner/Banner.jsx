const Banner = () => {
  return (
    <div>

      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/QNfDFnD/hero.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to BASIS SoftExpo 2023</h1>
            <p className="mb-5">
            BASIS SoftExpo is going to be held on 23-26 February 2023.
            </p>
            <button className="btn btn-info">Get Started</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Banner;
