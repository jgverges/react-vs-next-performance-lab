import { useHotels } from "./hooks/useHotels";
import { Link } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";

function App() {
  const { data: hotels, isLoading, error } = useHotels();


useEffect(() => {
  const start = performance.now();
  while (performance.now() - start < 50) {
    console.log('delay emulating JS initiation')
  } // bloquea 50ms
}, []);

  
  if (error) return <div>Error...</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <main className="container">
      <h1>eBooking (React unoptimized)</h1>
      <div className="hotels-grid">
        {hotels?.map((hotel) => (
          <Link to={`/hotel/${hotel.id}`} key={hotel.id} className="hotel-card">
            <img
              src={hotel.image}
              alt={hotel.name}
              style={{ width: "100%", height: "auto" }}
            />
            <h3>{hotel.name}</h3>
            <p>{hotel.location}</p>
            <p>${hotel?.price ? hotel.price.toFixed(2) : ""}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default App;
