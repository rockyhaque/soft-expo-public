const CategoryList = () => {
  return (
    <div>
      <h2 className="text-4xl text-center my-20">Conference Category List</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center">
        <div className="card w-72 bg-cyan-500 text-primary-content mb-5">
            <div className="card-body">
            <h2 className="card-title">All</h2>
            <p>You will found all cetegory here</p>
            <div className="card-actions justify-center">
                <button className="btn">Details</button>
            </div>
            </div>
        </div>
        <div className="card w-72 bg-cyan-500 text-primary-content mb-5">
            <div className="card-body">
            <h2 className="card-title">Online</h2>
            <p>You can apply from home</p>
            <div className="card-actions justify-center">
                <button className="btn">Details</button>
            </div>
            </div>
        </div>
        <div className="card w-72 bg-cyan-500 text-primary-content mb-5">
            <div className="card-body">
            <h2 className="card-title">Offline</h2>
            <p>You can easily join from exact location</p>
            <div className="card-actions justify-center">
                <button className="btn">Details</button>
            </div>
            </div>
        </div>

      </div>

    </div>
  );
};

export default CategoryList;
