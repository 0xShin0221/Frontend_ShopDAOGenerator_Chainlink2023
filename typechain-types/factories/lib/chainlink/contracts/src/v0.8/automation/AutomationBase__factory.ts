/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../../common";
import type {
  AutomationBase,
  AutomationBaseInterface,
} from "../../../../../../../lib/chainlink/contracts/src/v0.8/automation/AutomationBase";

const _abi = [
  {
    inputs: [],
    name: "OnlySimulatedBackend",
    type: "error",
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220cf4829349d4c75fe4e6538a8b99212a5ca5080eb4c087f19608d1dde9c0a91f464736f6c63430008090033";

type AutomationBaseConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AutomationBaseConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AutomationBase__factory extends ContractFactory {
  constructor(...args: AutomationBaseConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AutomationBase> {
    return super.deploy(overrides || {}) as Promise<AutomationBase>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AutomationBase {
    return super.attach(address) as AutomationBase;
  }
  override connect(signer: Signer): AutomationBase__factory {
    return super.connect(signer) as AutomationBase__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AutomationBaseInterface {
    return new utils.Interface(_abi) as AutomationBaseInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AutomationBase {
    return new Contract(address, _abi, signerOrProvider) as AutomationBase;
  }
}
