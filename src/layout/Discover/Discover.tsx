// Constants
import podiumData from "lib/constants/data";

// Components
import LayoutHeader from "components/UI/LayoutHeader/LayoutHeader";
import VaultStats from "components/UI/VaultStats/VaultStats";
import SearchVaults from "components/Discover/SearchVaults/SearchVaults";
import Podium from "components/Podium";

//hooks
import { useGetAllData } from "hooks";

const Discover = () => {
  const winners = [...podiumData]
    .sort((a, b) => a.rank! - b.rank!)
    .map((winner, place) => ({ ...winner, place }));

  const data = useGetAllData();

  return (
    <div className="page-container gap-6">
      <LayoutHeader
        title="Discover"
        description="Get exposure to a wide variety of community-generated yield
        opportunities, including passive and active strategies, thematic
        indices, and more."
      />

      <Podium winners={winners} />

      <VaultStats vaultStats={[]} />

      <SearchVaults vaultData={data} />
    </div>
  );
};

export default Discover;
