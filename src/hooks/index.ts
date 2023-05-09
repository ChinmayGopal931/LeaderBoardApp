import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  //this is not a hook and should be ideally kept server side in an api folder
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

export const useGetAllStats = () => {
  const podiumData = useGetAllData();

  const totalPlayers = podiumData?.data.length;
  let totalPoints = 0;
  let maxPoint = 0;
  podiumData?.data.map((dataItem: any) => {
    totalPoints += dataItem?.points;
    if (dataItem?.points > maxPoint) maxPoint = dataItem?.points;
  });

  return {
    totalPlayers: totalPlayers,
    totalPoints: totalPoints,
    maxPoint: maxPoint,
  };
};
