import React, { useEffect, useState } from "react";
import { ethers, Contract } from "ethers";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { abiProductRegistChainlinkFunctions as contractABI } from "../../../abi";

const contractAddress = "0x18bca947a9d42c749344674a796fe691ace93f36";

export const ProductProposeForm = () => {
  const [formState, setFormState] = useState({
    title: "Burton Custom Freestyle 151",
    bodyHtml: "<strong>Good snowboard!</strong>",
    vendor: "Burton",
    productType: "Snowboard",
    options: JSON.stringify([
      { option1: "Blue", option2: "155" },
      { option1: "Black", option2: "159" },
    ]),
    values: JSON.stringify([
      { name: "Color", values: ["Blue", "Black"] },
      { name: "Size", values: ["155", "159"] },
    ]),
    imageSrc: JSON.stringify([{ src: "http://example.com/rails_logo.gif" }]),
    sku: "skusample",
    cost: "100",
  });

  const [contract, setContract] = useState<Contract | null>(null);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(
      (window as any).ethereum
    );
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    setContract(contract);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const execute = async () => {
    if (!contract) return;
    try {
      const source = `const endpoint = args[0]; const baseApiUrl = args[1]; const productProfitRightNFTAddress = args[2]; const productJsonString = args[3]; const productVariantsJsonString = args[4]; const productOptionsJsonString = args[5]; const productImagesJsonString = args[6]; const productInitialInventories = args[7];  const salesDistributionRequest = await Functions.makeHttpRequest({ url: baseApiUrl + endpoint
method: "POST"
headers: { "Content-Type": "application/json"

}
data: { productProfitRightNFTAddress
productJsonString
productVariantsJsonString
productOptionsJsonString
productImagesJsonString
productInitialInventories
}
}); const salesDistributionResponse = await salesDistributionRequest; if (salesDistributionResponse.error) { throw new Error("Error fetching sales distribution"); } const result = { message: salesDistributionResponse.data.message
}; return Functions.encodeString(JSON.stringify(result));`;
      const secrets: string[] = [];
      const args = [
        "chainlink/productRegistoration",
        "https://dev-shop-dao-generator-chainlink2023.vercel.app/api/",
        "0x",
        JSON.stringify({
          title: formState.title,
          body_html: formState.bodyHtml,
          vendor: formState.vendor,
          product_type: formState.productType,
        }),
        formState.options,
        formState.values,
        formState.imageSrc,
        JSON.stringify([{ sku: formState.sku, cost: formState.cost }]),
      ];

      const subscriptionId = 992;
      const gasLimit = 100000;

      const tx = await contract.executeRequest(
        source,
        secrets,
        args,
        subscriptionId,
        gasLimit
      );

      console.log("Transaction sent: ", tx.hash);
      await tx.wait();
      console.log("Transaction mined");
    } catch (error) {
      console.error("Failed to send transaction: ", error);
    }
  };

  return (
    <Stack spacing={4}>
      <FormControl id="title">
        <FormLabel>Title</FormLabel>
        <Input value={formState.title} onChange={handleChange} />
      </FormControl>

      <FormControl id="bodyHtml">
        <FormLabel>Body HTML</FormLabel>
        <Input value={formState.bodyHtml} onChange={handleChange} />
      </FormControl>

      <FormControl id="vendor">
        <FormLabel>Vendor</FormLabel>
        <Input value={formState.vendor} onChange={handleChange} />
      </FormControl>

      <FormControl id="productType">
        <FormLabel>Product Type</FormLabel>
        <Input value={formState.productType} onChange={handleChange} />
      </FormControl>

      <FormControl id="options">
        <FormLabel>Options (JSON)</FormLabel>
        <Textarea value={formState.options} onChange={handleChange} />
      </FormControl>

      <FormControl id="values">
        <FormLabel>Values (JSON)</FormLabel>
        <Textarea value={formState.values} onChange={handleChange} />
      </FormControl>

      <FormControl id="imageSrc">
        <FormLabel>Image Source URL</FormLabel>
        <Input value={formState.imageSrc} onChange={handleChange} />
      </FormControl>

      <FormControl id="sku">
        <FormLabel>SKU</FormLabel>
        <Input value={formState.sku} onChange={handleChange} />
      </FormControl>

      <FormControl id="cost">
        <FormLabel>Cost</FormLabel>
        <Input value={formState.cost} onChange={handleChange} />
      </FormControl>

      <Button type="submit" onClick={execute}>
        Execute Request
      </Button>
    </Stack>
  );
};
