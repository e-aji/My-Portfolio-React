export default function PortfolioItem({ item }) {
    return (
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <a href={item.link} className="btn btn-primary">View Project</a>
          </div>
        </div>
      </div>
    );
  }