import { useQuery } from "@tanstack/react-query";
import { userData } from "lib/constants/types";

const fetchData = async () => {
  const response = await fetch("http://localhost:8000/api/data");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const useGetAllData = () => {
  const { data, isLoading, error } = useQuery(["data"], fetchData);

  return data;
};
