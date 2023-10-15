import { Link } from "react-router-dom";

function Tour({ tour }) {
  return (
    <li className="ais-Hits-item">
      <article className="hit">
        <header className="hit-image-container">
          <img src={tour.image_url} alt="" />
        </header>
        <div className="hit-info-container">
          <p className="hit-category">{tour.category_name}</p>
          <Link to={`/order/tour/${tour.id}`}>
            <h1>
              <span className="ais-Hightlight">{tour.name}</span>
            </h1>
          </Link>
          <p className="hit-description">
            <span className="ais-Snippet">{tour.description}</span>
          </p>
        </div>
        <footer>
          <p>
            <span className="hit-em">$ </span>
            <strong>{tour.cost}</strong>
            <span className="hit-em hit-rating">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#e2a400"
                  fillRule="evenodd"
                  d="M10.472 5.008L16 5.816l-4 3.896.944 5.504L8 12.616l-4.944 2.6L4 9.712 0 5.816l5.528-.808L8 0z"
                ></path>
              </svg>
              {tour.average_rate}
            </span>
          </p>
        </footer>
      </article>
    </li>
  );
}

export default Tour;
