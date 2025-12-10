import { useParams } from "react-router-dom";
import { useHotelById } from "../hooks/useHotelById";
import { useNavigate } from "react-router-dom";

export default function HotelDetail() {
  const { id } = useParams();
  const { data, isLoading, error } = useHotelById(Number(id));
  const navigate = useNavigate();

  if (error) return <div>Error...</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>Not found</div>;

  return (
    <main style={{ padding: "2rem" }}>
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Volver
      </button>

      <h1>{data.name}</h1>
      <img
        src={data.image}
        alt={data.name}
        style={{ width: "100%", borderRadius: "12px", marginTop: "1rem" }}
      />

      <p style={{ marginTop: "1rem" }}>{data.description}</p>
      <strong style={{ marginTop: "1rem", display: "block" }}>
        {data.price} €
      </strong>
    </main>
  );
}
