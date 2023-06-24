import { useState } from "react";

const ServicesSelection = ({ data }) => {
  const [services, setServices] = useState(data);

  const handleClick = (e) => {
    setServices(data);
  };

  const uniqueTags = [
    ...new Set(
      data.map((item) => {
        return item.tag;
      })
    ),
  ];

  return (
    <div className="container-fluid px-4 my-4">
      <div className="mb-3">
        {uniqueTags.map((item, index) => {
          return (
            <button
              key={index}
              className={`me-2 btn btn-lg text-light ${
                item === "frontend" ? "bg-primary" : "bg-danger"
              }`}
              onClick={(e) =>
                setServices(
                  data.filter((service) => {
                    return service.tag === item;
                  })
                )
              }
            >
              {item}
            </button>
          );
        })}
        <button className="btn btn-lg btn-warning" onClick={handleClick}>
          Show All
        </button>
      </div>
      <div className="row row-cols-1 g-4">
        {services.map((item, index) => {
          return (
            <div className="col" key={index}>
              <div className="card">
                <div className="card-body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span
                    className={`text-small ${
                      item.tag === "frontend" ? "bg-primary" : "bg-danger"
                    } px-2 py-1 text-light border-round rounded-5`}
                  >
                    {item.tag}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ServicesSelection;
