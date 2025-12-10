// optimizado/src/App.tsx
import { useHotels } from "./hooks/useHotels";
import { Link } from "react-router-dom";
import "./App.css";
import { getOptimizedImage } from "./utils/optimizationHelpers";

function App() {
  const { data: hotels, isLoading, error } = useHotels();

  const width = window.innerWidth < 600 ? 350 : 800;

  if (error) return <div>Error...</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <main className="container">
      <h1>eBooking (React optimized)</h1>
      <div className="hotels-grid">
        {hotels?.map((hotel, index) => (
          <Link to={`/hotel/${hotel.id}`} key={hotel.id} className="hotel-card">
            <img
              src={getOptimizedImage(hotel.image,width)}
              alt={hotel.name}
              style={{ width: "100%", height: "auto" }}
              fetchPriority={index === 0 ? "high" : "auto"}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
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
