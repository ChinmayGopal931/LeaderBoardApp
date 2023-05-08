export interface Asset {
  name: string;
  symbol: string;
  icon: string;
  address: string;
  amount: string;
  decimals: string;
  ratio: string;
}

export interface Params {
  equalWeight: boolean;
  marketCapWeight: boolean;
  frequency: string;
}

export interface Permissions {
  vaultPrivacy: boolean;
  vaultModification: boolean;
  managers: string[];
  strategists: string[];
}

export interface Fees {
  managementFee: number;
  performanceFee: number;
  sharedFee: number;
}

export interface VaultInfo {
  name: string;
  symbol: string;
  icon: string;
  creatorName: string;
  creatorAddress: string;
  description: string;
}

export interface AssetsAndParams {
  assets: Asset[];
  params: Params;
}

export interface PermissionsAndFees {
  permissions: Permissions;
  fees: Fees;
}

export interface VaultForm {
  vaultInfo: VaultInfo;
  assetsAndParams: AssetsAndParams;
  permissionsAndFees: PermissionsAndFees;
}
