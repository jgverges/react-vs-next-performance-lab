import { useQuery } from "@tanstack/react-query";
import type { Hotel } from "../types/hotel";
import { URL} from '../constants/apiConstants'

const fetchHotels = async (): Promise<Hotel[]> => {
  await new Promise(resolve => setTimeout(resolve, 800));// delay
  const res = await fetch(URL);
  return res.json();
};

export const useHotels = () =>
  useQuery<Hotel[]>({
    queryKey: ["hotels"],
    queryFn: fetchHotels,
  });
