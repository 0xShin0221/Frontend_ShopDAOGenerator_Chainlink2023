/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ConfirmedOwnerUpgradeable,
  ConfirmedOwnerUpgradeableInterface,
} from "../../../../../src/chainlink/dev/functions/ConfirmedOwnerUpgradeable";

const _abi = [
  {
    inputs: [],
    name: "CannotSelfTransfer",
    type: "error",
  },
  {
    inputs: [],
    name: "NotProposedOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyCallableByOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnerMustBeSet",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506102cd806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806379ba5097146100465780638da5cb5b14610050578063f2fde38b1461007e575b600080fd5b61004e610091565b005b6000546201000090046001600160a01b03166040516001600160a01b03909116815260200160405180910390f35b61004e61008c366004610267565b61015f565b6001546001600160a01b031633146100d5576040517f0f22ca5f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805433620100008181027fffffffffffffffffffff0000000000000000000000000000000000000000ffff84161784556001805473ffffffffffffffffffffffffffffffffffffffff191690556040516001600160a01b03919093041692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a350565b610167610173565b610170816101bf565b50565b6000546201000090046001600160a01b031633146101bd576040517f2b5c74de00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b6001600160a01b038116331415610202576040517f282010c300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b038381169182179092556000805460405192936201000090910416917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b60006020828403121561027957600080fd5b81356001600160a01b038116811461029057600080fd5b939250505056fea26469706673582212204f116a287717a417634d9406bd9bed2c42358ee357741e0996bbd54f8974eed164736f6c63430008090033";

type ConfirmedOwnerUpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConfirmedOwnerUpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConfirmedOwnerUpgradeable__factory extends ContractFactory {
  constructor(...args: ConfirmedOwnerUpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ConfirmedOwnerUpgradeable> {
    return super.deploy(overrides || {}) as Promise<ConfirmedOwnerUpgradeable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ConfirmedOwnerUpgradeable {
    return super.attach(address) as ConfirmedOwnerUpgradeable;
  }
  override connect(signer: Signer): ConfirmedOwnerUpgradeable__factory {
    return super.connect(signer) as ConfirmedOwnerUpgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConfirmedOwnerUpgradeableInterface {
    return new utils.Interface(_abi) as ConfirmedOwnerUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConfirmedOwnerUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ConfirmedOwnerUpgradeable;
  }
}
