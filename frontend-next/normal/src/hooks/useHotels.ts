import { useQuery } from "@tanstack/react-query";

export interface Hotel {
  id: number;
  name: string;
  location: string;
  image: string;
  price?: number;
  rating?: number;
  description?: string;
}

const URL = "http://localhost:3001/hotels";

const fetchHotels = async (): Promise<Hotel[]> => {
  const res = await fetch(URL);
  return res.json();
};

export const useHotels = () =>
  useQuery<Hotel[]>({
    queryKey: ["hotels"],
    queryFn: fetchHotels,
  });
