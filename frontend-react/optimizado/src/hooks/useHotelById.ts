import { useQuery } from "@tanstack/react-query";
import { URL } from "../constants/apiConstants";
import type { Hotel } from "../types/hotel";

const fetchHotelById = async (id:number): Promise<Hotel> => {
  await new Promise(resolve => setTimeout(resolve, 800));// delay
  const res = await fetch(`${URL}/${id}`);
  return res.json();
};
export const useHotelById = (id: number) =>
  useQuery<Hotel>({
    queryKey: ["hotel", id],
    queryFn: () => fetchHotelById(id),
    enabled:!!id
    },
  );
