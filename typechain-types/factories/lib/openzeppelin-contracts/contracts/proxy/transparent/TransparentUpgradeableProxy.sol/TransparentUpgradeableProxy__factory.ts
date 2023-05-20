/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BytesLike,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../../common";
import type {
  TransparentUpgradeableProxy,
  TransparentUpgradeableProxyInterface,
} from "../../../../../../../lib/openzeppelin-contracts/contracts/proxy/transparent/TransparentUpgradeableProxy.sol/TransparentUpgradeableProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_logic",
        type: "address",
      },
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405260405162000fca38038062000fca83398101604081905262000026916200049d565b828162000036828260006200004d565b50620000449050826200008a565b505050620005d0565b6200005883620000e5565b600082511180620000665750805b1562000085576200008383836200012760201b620002111760201c565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f620000b562000156565b604080516001600160a01b03928316815291841660208301520160405180910390a1620000e2816200018f565b50565b620000f08162000244565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606200014f838360405180606001604052806027815260200162000fa360279139620002f8565b9392505050565b60006200018060008051602062000f8383398151915260001b6200037760201b6200023d1760201c565b546001600160a01b0316919050565b6001600160a01b038116620001fa5760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b806200022360008051602062000f8383398151915260001b6200037760201b6200023d1760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b6200025a816200037a60201b620002401760201c565b620002be5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401620001f1565b80620002237f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b6200037760201b6200023d1760201c565b6060600080856001600160a01b0316856040516200031791906200057d565b600060405180830381855af49150503d806000811462000354576040519150601f19603f3d011682016040523d82523d6000602084013e62000359565b606091505b5090925090506200036d8683838762000389565b9695505050505050565b90565b6001600160a01b03163b151590565b60608315620003fa578251620003f2576001600160a01b0385163b620003f25760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401620001f1565b508162000406565b6200040683836200040e565b949350505050565b8151156200041f5781518083602001fd5b8060405162461bcd60e51b8152600401620001f191906200059b565b80516001600160a01b03811681146200045357600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156200048b57818101518382015260200162000471565b83811115620000835750506000910152565b600080600060608486031215620004b357600080fd5b620004be846200043b565b9250620004ce602085016200043b565b60408501519092506001600160401b0380821115620004ec57600080fd5b818601915086601f8301126200050157600080fd5b81518181111562000516576200051662000458565b604051601f8201601f19908116603f0116810190838211818310171562000541576200054162000458565b816040528281528960208487010111156200055b57600080fd5b6200056e8360208301602088016200046e565b80955050505050509250925092565b60008251620005918184602087016200046e565b9190910192915050565b6020815260008251806020840152620005bc8160408501602087016200046e565b601f01601f19169190910160400192915050565b6109a380620005e06000396000f3fe60806040523661001357610011610017565b005b6100115b61001f61024f565b6001600160a01b0316336001600160a01b031614156102075760606001600160e01b0319600035167f3659cfe60000000000000000000000000000000000000000000000000000000081141561007e57610077610282565b91506101ff565b6001600160e01b031981167f4f1ef2860000000000000000000000000000000000000000000000000000000014156100b8576100776102d9565b6001600160e01b031981167f8f2839700000000000000000000000000000000000000000000000000000000014156100f25761007761031f565b6001600160e01b031981167ff851a44000000000000000000000000000000000000000000000000000000000141561012c57610077610350565b6001600160e01b031981167f5c60da1b00000000000000000000000000000000000000000000000000000000141561016657610077610390565b60405162461bcd60e51b815260206004820152604260248201527f5472616e73706172656e745570677261646561626c6550726f78793a2061646d60448201527f696e2063616e6e6f742066616c6c6261636b20746f2070726f7879207461726760648201527f6574000000000000000000000000000000000000000000000000000000000000608482015260a4015b60405180910390fd5b815160208301f35b61020f6103a4565b565b60606102368383604051806060016040528060278152602001610947602791396103b4565b9392505050565b90565b6001600160a01b03163b151590565b60007fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035b546001600160a01b0316919050565b606061028c61042c565b600061029b3660048184610779565b8101906102a891906107bf565b90506102c581604051806020016040528060008152506000610437565b505060408051602081019091526000815290565b60606000806102eb3660048184610779565b8101906102f89190610809565b9150915061030882826001610437565b604051806020016040528060008152509250505090565b606061032961042c565b60006103383660048184610779565b81019061034591906107bf565b90506102c581610463565b606061035a61042c565b600061036461024f565b604080516001600160a01b03831660208201529192500160405160208183030381529060405291505090565b606061039a61042c565b60006103646104ba565b61020f6103af6104ba565b6104c9565b6060600080856001600160a01b0316856040516103d191906108f7565b600060405180830381855af49150503d806000811461040c576040519150601f19603f3d011682016040523d82523d6000602084013e610411565b606091505b5091509150610422868383876104ed565b9695505050505050565b341561020f57600080fd5b6104408361056b565b60008251118061044d5750805b1561045e5761045c8383610211565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f61048c61024f565b604080516001600160a01b03928316815291841660208301520160405180910390a16104b7816105ab565b50565b60006104c4610683565b905090565b3660008037600080366000845af43d6000803e8080156104e8573d6000f35b3d6000fd5b60608315610559578251610552576001600160a01b0385163b6105525760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016101f6565b5081610563565b61056383836106ab565b949350505050565b610574816106d5565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6001600160a01b0381166106275760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016101f6565b807fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035b80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b039290921691909117905550565b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc610273565b8151156106bb5781518083602001fd5b8060405162461bcd60e51b81526004016101f69190610913565b6001600160a01b0381163b6107525760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e74726163740000000000000000000000000000000000000060648201526084016101f6565b807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc61064a565b6000808585111561078957600080fd5b8386111561079657600080fd5b5050820193919092039150565b80356001600160a01b03811681146107ba57600080fd5b919050565b6000602082840312156107d157600080fd5b610236826107a3565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000806040838503121561081c57600080fd5b610825836107a3565b9150602083013567ffffffffffffffff8082111561084257600080fd5b818501915085601f83011261085657600080fd5b813581811115610868576108686107da565b604051601f8201601f19908116603f01168101908382118183101715610890576108906107da565b816040528281528860208487010111156108a957600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60005b838110156108e65781810151838201526020016108ce565b8381111561045c5750506000910152565b600082516109098184602087016108cb565b9190910192915050565b60208152600082518060208401526109328160408501602087016108cb565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220acf9f57604ede4e11e434fd785745774904ed9d30212a0ba2711d16c2eeaf57564736f6c63430008090033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";

type TransparentUpgradeableProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TransparentUpgradeableProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TransparentUpgradeableProxy__factory extends ContractFactory {
  constructor(...args: TransparentUpgradeableProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _logic: PromiseOrValue<string>,
    admin_: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<TransparentUpgradeableProxy> {
    return super.deploy(
      _logic,
      admin_,
      _data,
      overrides || {}
    ) as Promise<TransparentUpgradeableProxy>;
  }
  override getDeployTransaction(
    _logic: PromiseOrValue<string>,
    admin_: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_logic, admin_, _data, overrides || {});
  }
  override attach(address: string): TransparentUpgradeableProxy {
    return super.attach(address) as TransparentUpgradeableProxy;
  }
  override connect(signer: Signer): TransparentUpgradeableProxy__factory {
    return super.connect(signer) as TransparentUpgradeableProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TransparentUpgradeableProxyInterface {
    return new utils.Interface(_abi) as TransparentUpgradeableProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TransparentUpgradeableProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TransparentUpgradeableProxy;
  }
}
