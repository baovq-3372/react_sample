import Tour from '../Tour/Tour'

function TourList({tours}) {
  return (
    <div>
      {tours.length > 0 ? (
        <div className="ais-Hits">
          <ol className="ais-Hits-list">
            {tours.map((tour) => (
              <Tour key={tour.id} tour={tour} />
            ))}
          </ol>
        </div>
      ) : (
        <div>No tour dectected</div>
      )}
    </div>
  );
}

export default TourList;
