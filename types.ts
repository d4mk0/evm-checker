export enum Network {
  ARBITRUM = "arbitrum",
  ARBITRUM_NOVA = "arbitrum-nova",
  BASE = "base",
  BLAST = "blast",
  BNB = "bnb",
  ETHEREUM = "ethereum",
  FANTOM = "fantom",
  LINEA = "linea",
  OPTIMISM = "optimism",
  POLYGON = "polygon",
  SCROLL = "scroll",
  ZKSYNC = "zksync",
  ZORA = "zora",
}

export type Config = {
  [key in Network]: {
    RPC_URL: string;
    COLUMNS: string[];
    MULTICALL3_CONTRACT?: string;
  };
};
