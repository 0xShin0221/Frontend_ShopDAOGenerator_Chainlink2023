/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace Functions {
  export type RequestStruct = {
    codeLocation: PromiseOrValue<BigNumberish>;
    secretsLocation: PromiseOrValue<BigNumberish>;
    language: PromiseOrValue<BigNumberish>;
    source: PromiseOrValue<string>;
    secrets: PromiseOrValue<BytesLike>;
    args: PromiseOrValue<string>[];
  };

  export type RequestStructOutput = [
    number,
    number,
    number,
    string,
    string,
    string[]
  ] & {
    codeLocation: number;
    secretsLocation: number;
    language: number;
    source: string;
    secrets: string;
    args: string[];
  };
}

export interface SalesDistributorClientInterface extends utils.Interface {
  functions: {
    "acceptOwnership()": FunctionFragment;
    "checkUpkeep(bytes)": FunctionFragment;
    "estimateCost((uint8,uint8,uint8,string,bytes,string[]),uint64,uint32,uint256)": FunctionFragment;
    "fulfillGasLimit()": FunctionFragment;
    "generateRequest(string,bytes,string[])": FunctionFragment;
    "getDONPublicKey()": FunctionFragment;
    "handleOracleFulfillment(bytes32,bytes,bytes)": FunctionFragment;
    "lastUpkeepTimeStamp()": FunctionFragment;
    "latestError()": FunctionFragment;
    "latestRequestId()": FunctionFragment;
    "latestResponse()": FunctionFragment;
    "owner()": FunctionFragment;
    "performUpkeep(bytes)": FunctionFragment;
    "requestCBOR()": FunctionFragment;
    "responseCounter()": FunctionFragment;
    "setRequest(uint64,uint32,uint256,bytes)": FunctionFragment;
    "subscriptionId()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateInterval()": FunctionFragment;
    "updateOracleAddress(address)": FunctionFragment;
    "upkeepCounter()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "acceptOwnership"
      | "checkUpkeep"
      | "estimateCost"
      | "fulfillGasLimit"
      | "generateRequest"
      | "getDONPublicKey"
      | "handleOracleFulfillment"
      | "lastUpkeepTimeStamp"
      | "latestError"
      | "latestRequestId"
      | "latestResponse"
      | "owner"
      | "performUpkeep"
      | "requestCBOR"
      | "responseCounter"
      | "setRequest"
      | "subscriptionId"
      | "transferOwnership"
      | "updateInterval"
      | "updateOracleAddress"
      | "upkeepCounter"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "checkUpkeep",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "estimateCost",
    values: [
      Functions.RequestStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "fulfillGasLimit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "generateRequest",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getDONPublicKey",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "handleOracleFulfillment",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "lastUpkeepTimeStamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestError",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestRequestId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestResponse",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "performUpkeep",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "requestCBOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "responseCounter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setRequest",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "subscriptionId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateInterval",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateOracleAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "upkeepCounter",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkUpkeep",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "estimateCost",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fulfillGasLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "generateRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDONPublicKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "handleOracleFulfillment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastUpkeepTimeStamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestError",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestRequestId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestResponse",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "performUpkeep",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestCBOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "responseCounter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setRequest", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "subscriptionId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateInterval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateOracleAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upkeepCounter",
    data: BytesLike
  ): Result;

  events: {
    "OCRResponse(bytes32,bytes,bytes)": EventFragment;
    "OwnershipTransferRequested(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RequestFulfilled(bytes32)": EventFragment;
    "RequestSent(bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OCRResponse"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferRequested"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RequestFulfilled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RequestSent"): EventFragment;
}

export interface OCRResponseEventObject {
  requestId: string;
  result: string;
  err: string;
}
export type OCRResponseEvent = TypedEvent<
  [string, string, string],
  OCRResponseEventObject
>;

export type OCRResponseEventFilter = TypedEventFilter<OCRResponseEvent>;

export interface OwnershipTransferRequestedEventObject {
  from: string;
  to: string;
}
export type OwnershipTransferRequestedEvent = TypedEvent<
  [string, string],
  OwnershipTransferRequestedEventObject
>;

export type OwnershipTransferRequestedEventFilter =
  TypedEventFilter<OwnershipTransferRequestedEvent>;

export interface OwnershipTransferredEventObject {
  from: string;
  to: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface RequestFulfilledEventObject {
  id: string;
}
export type RequestFulfilledEvent = TypedEvent<
  [string],
  RequestFulfilledEventObject
>;

export type RequestFulfilledEventFilter =
  TypedEventFilter<RequestFulfilledEvent>;

export interface RequestSentEventObject {
  id: string;
}
export type RequestSentEvent = TypedEvent<[string], RequestSentEventObject>;

export type RequestSentEventFilter = TypedEventFilter<RequestSentEvent>;

export interface SalesDistributorClient extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SalesDistributorClientInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    checkUpkeep(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { upkeepNeeded: boolean }>;

    estimateCost(
      req: Functions.RequestStruct,
      subscriptionId: PromiseOrValue<BigNumberish>,
      gasLimit: PromiseOrValue<BigNumberish>,
      gasPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    fulfillGasLimit(overrides?: CallOverrides): Promise<[number]>;

    generateRequest(
      source: PromiseOrValue<string>,
      secrets: PromiseOrValue<BytesLike>,
      args: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<[string]>;

    getDONPublicKey(overrides?: CallOverrides): Promise<[string]>;

    handleOracleFulfillment(
      requestId: PromiseOrValue<BytesLike>,
      response: PromiseOrValue<BytesLike>,
      err: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    lastUpkeepTimeStamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    latestError(overrides?: CallOverrides): Promise<[string]>;

    latestRequestId(overrides?: CallOverrides): Promise<[string]>;

    latestResponse(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    performUpkeep(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    requestCBOR(overrides?: CallOverrides): Promise<[string]>;

    responseCounter(overrides?: CallOverrides): Promise<[BigNumber]>;

    setRequest(
      _subscriptionId: PromiseOrValue<BigNumberish>,
      _fulfillGasLimit: PromiseOrValue<BigNumberish>,
      _updateInterval: PromiseOrValue<BigNumberish>,
      newRequestCBOR: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    subscriptionId(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateInterval(overrides?: CallOverrides): Promise<[BigNumber]>;

    updateOracleAddress(
      oracle: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    upkeepCounter(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  acceptOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  checkUpkeep(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<[boolean, string] & { upkeepNeeded: boolean }>;

  estimateCost(
    req: Functions.RequestStruct,
    subscriptionId: PromiseOrValue<BigNumberish>,
    gasLimit: PromiseOrValue<BigNumberish>,
    gasPrice: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  fulfillGasLimit(overrides?: CallOverrides): Promise<number>;

  generateRequest(
    source: PromiseOrValue<string>,
    secrets: PromiseOrValue<BytesLike>,
    args: PromiseOrValue<string>[],
    overrides?: CallOverrides
  ): Promise<string>;

  getDONPublicKey(overrides?: CallOverrides): Promise<string>;

  handleOracleFulfillment(
    requestId: PromiseOrValue<BytesLike>,
    response: PromiseOrValue<BytesLike>,
    err: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  lastUpkeepTimeStamp(overrides?: CallOverrides): Promise<BigNumber>;

  latestError(overrides?: CallOverrides): Promise<string>;

  latestRequestId(overrides?: CallOverrides): Promise<string>;

  latestResponse(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  performUpkeep(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  requestCBOR(overrides?: CallOverrides): Promise<string>;

  responseCounter(overrides?: CallOverrides): Promise<BigNumber>;

  setRequest(
    _subscriptionId: PromiseOrValue<BigNumberish>,
    _fulfillGasLimit: PromiseOrValue<BigNumberish>,
    _updateInterval: PromiseOrValue<BigNumberish>,
    newRequestCBOR: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  subscriptionId(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateInterval(overrides?: CallOverrides): Promise<BigNumber>;

  updateOracleAddress(
    oracle: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  upkeepCounter(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    checkUpkeep(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { upkeepNeeded: boolean }>;

    estimateCost(
      req: Functions.RequestStruct,
      subscriptionId: PromiseOrValue<BigNumberish>,
      gasLimit: PromiseOrValue<BigNumberish>,
      gasPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fulfillGasLimit(overrides?: CallOverrides): Promise<number>;

    generateRequest(
      source: PromiseOrValue<string>,
      secrets: PromiseOrValue<BytesLike>,
      args: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<string>;

    getDONPublicKey(overrides?: CallOverrides): Promise<string>;

    handleOracleFulfillment(
      requestId: PromiseOrValue<BytesLike>,
      response: PromiseOrValue<BytesLike>,
      err: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    lastUpkeepTimeStamp(overrides?: CallOverrides): Promise<BigNumber>;

    latestError(overrides?: CallOverrides): Promise<string>;

    latestRequestId(overrides?: CallOverrides): Promise<string>;

    latestResponse(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    performUpkeep(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    requestCBOR(overrides?: CallOverrides): Promise<string>;

    responseCounter(overrides?: CallOverrides): Promise<BigNumber>;

    setRequest(
      _subscriptionId: PromiseOrValue<BigNumberish>,
      _fulfillGasLimit: PromiseOrValue<BigNumberish>,
      _updateInterval: PromiseOrValue<BigNumberish>,
      newRequestCBOR: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    subscriptionId(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateInterval(overrides?: CallOverrides): Promise<BigNumber>;

    updateOracleAddress(
      oracle: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    upkeepCounter(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "OCRResponse(bytes32,bytes,bytes)"(
      requestId?: PromiseOrValue<BytesLike> | null,
      result?: null,
      err?: null
    ): OCRResponseEventFilter;
    OCRResponse(
      requestId?: PromiseOrValue<BytesLike> | null,
      result?: null,
      err?: null
    ): OCRResponseEventFilter;

    "OwnershipTransferRequested(address,address)"(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null
    ): OwnershipTransferRequestedEventFilter;
    OwnershipTransferRequested(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null
    ): OwnershipTransferRequestedEventFilter;

    "OwnershipTransferred(address,address)"(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "RequestFulfilled(bytes32)"(
      id?: PromiseOrValue<BytesLike> | null
    ): RequestFulfilledEventFilter;
    RequestFulfilled(
      id?: PromiseOrValue<BytesLike> | null
    ): RequestFulfilledEventFilter;

    "RequestSent(bytes32)"(
      id?: PromiseOrValue<BytesLike> | null
    ): RequestSentEventFilter;
    RequestSent(id?: PromiseOrValue<BytesLike> | null): RequestSentEventFilter;
  };

  estimateGas: {
    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    checkUpkeep(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    estimateCost(
      req: Functions.RequestStruct,
      subscriptionId: PromiseOrValue<BigNumberish>,
      gasLimit: PromiseOrValue<BigNumberish>,
      gasPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fulfillGasLimit(overrides?: CallOverrides): Promise<BigNumber>;

    generateRequest(
      source: PromiseOrValue<string>,
      secrets: PromiseOrValue<BytesLike>,
      args: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDONPublicKey(overrides?: CallOverrides): Promise<BigNumber>;

    handleOracleFulfillment(
      requestId: PromiseOrValue<BytesLike>,
      response: PromiseOrValue<BytesLike>,
      err: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    lastUpkeepTimeStamp(overrides?: CallOverrides): Promise<BigNumber>;

    latestError(overrides?: CallOverrides): Promise<BigNumber>;

    latestRequestId(overrides?: CallOverrides): Promise<BigNumber>;

    latestResponse(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    performUpkeep(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    requestCBOR(overrides?: CallOverrides): Promise<BigNumber>;

    responseCounter(overrides?: CallOverrides): Promise<BigNumber>;

    setRequest(
      _subscriptionId: PromiseOrValue<BigNumberish>,
      _fulfillGasLimit: PromiseOrValue<BigNumberish>,
      _updateInterval: PromiseOrValue<BigNumberish>,
      newRequestCBOR: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    subscriptionId(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateInterval(overrides?: CallOverrides): Promise<BigNumber>;

    updateOracleAddress(
      oracle: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    upkeepCounter(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    checkUpkeep(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    estimateCost(
      req: Functions.RequestStruct,
      subscriptionId: PromiseOrValue<BigNumberish>,
      gasLimit: PromiseOrValue<BigNumberish>,
      gasPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fulfillGasLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    generateRequest(
      source: PromiseOrValue<string>,
      secrets: PromiseOrValue<BytesLike>,
      args: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDONPublicKey(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    handleOracleFulfillment(
      requestId: PromiseOrValue<BytesLike>,
      response: PromiseOrValue<BytesLike>,
      err: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    lastUpkeepTimeStamp(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    latestError(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    latestRequestId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    latestResponse(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    performUpkeep(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    requestCBOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    responseCounter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setRequest(
      _subscriptionId: PromiseOrValue<BigNumberish>,
      _fulfillGasLimit: PromiseOrValue<BigNumberish>,
      _updateInterval: PromiseOrValue<BigNumberish>,
      newRequestCBOR: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    subscriptionId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateInterval(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateOracleAddress(
      oracle: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    upkeepCounter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
