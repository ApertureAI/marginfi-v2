import { AnchorProvider, BN, Program } from "@project-serum/anchor";
import { SignerWalletAdapter } from "@solana/wallet-adapter-base";
import {
  ConfirmOptions,
  Keypair,
  PublicKey,
  SendOptions,
  TransactionInstruction,
} from "@solana/web3.js";
import BigNumber from "bignumber.js";
import { Marginfi } from "./idl/marginfi-types";

export type MarginfiProgram = Omit<Program<Marginfi>, "provider"> & {
  provider: AnchorProvider;
};
export type MarginfiReadonlyProgram = Program<Marginfi>;

export type UiAmount = BigNumber | number | string;

export type Wallet = Pick<
  SignerWalletAdapter,
  "signAllTransactions" | "signTransaction"
> & {
  publicKey: PublicKey;
};

export interface TransactionOptions extends ConfirmOptions {
  dryRun?: boolean;
}

/**
 * Supported config environments.
 */
export type Environment = "devnet1";

export interface InstructionsWrapper {
  instructions: TransactionInstruction[];
  keys: Keypair[];
}

/**
 * Marginfi bank vault type
 */
export enum BankVaultType {
  LiquidityVault,
  InsuranceVault,
  FeeVault,
}

export interface MarginfiAccountData {
  group: PublicKey;
  authority: PublicKey;
}

export interface MarginfiConfig {
  environment: Environment;
  cluster: string;
  programId: PublicKey;
  groupPk: PublicKey;
  banks: BankConfig[];
}

export interface BankConfig {
  label: string;
  mint: PublicKey;
  oracle: PublicKey;
  address: PublicKey;
}

export interface InstructionsWrapper {
  instructions: TransactionInstruction[];
  keys: Keypair[];
}

// --- On-chain account structs

export enum AccountType {
  MarginfiGroup = "marginfiGroup",
  MarginfiAccount = "marginfiAccount",
}

export interface WrappedI8048F {
  bits: BN;
}

export interface MarginfiGroupData {
  admin: PublicKey;
  reservedSpace: BN[];
}

export interface BankData {}
