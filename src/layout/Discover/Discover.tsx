// Components
import LayoutHeader from "components/UI/LayoutHeader/LayoutHeader";
import VaultStats from "components/UI/VaultStats/VaultStats";
import SearchVaults from "components/Discover/SearchVaults/SearchVaults";
import Podium from "components/Podium";

//hooks
import { useGetAllData, useGetAllStats } from "hooks";
import PlayerStats from "components/PlayerStats";

const Discover = () => {
  const podiumData = useGetAllData();

  const stats = useGetAllStats();

  let winners;
  if (podiumData)
    winners = [...podiumData?.data]
      .sort((a, b) => a.rank! - b.rank!)
      .map((winner, place) => ({ ...winner, place }));

  const playerStats = [
    {
      key: "Total Players",
      value: stats?.totalPlayers || 0,
      icon: "dollar",
    },
    {
      key: "Total Points",
      value: stats?.totalPoints || 0,
      icon: "dollar",
    },
    {
      key: "Max Points Scored",
      value: stats?.maxPoint || 0,
      icon: "flag",
    },
  ];

  return (
    <div className="page-container gap-6">
      <LayoutHeader
        title="Stats"
        description="Get exposure to a wide variety of community-generated yield
        opportunities, including passive and active strategies, thematic
        indices, and more."
      />
      <div className="flex flex-row">
        <PlayerStats vaultStats={playerStats} />
        {winners && <Podium winners={winners} />}
      </div>

      <VaultStats vaultStats={[]} />

      {podiumData && <SearchVaults vaultData={podiumData} />}
    </div>
  );
};

export default Discover;
