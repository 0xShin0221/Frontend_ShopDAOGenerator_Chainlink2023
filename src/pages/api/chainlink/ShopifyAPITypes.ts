import { Product as ShopifyProduct } from "@shopify/shopify-api/rest/admin/2023-04/product";
import { Variant as ShopifyVariant } from "@shopify/shopify-api/rest/admin/2023-04/variant";
import { Image as ShopifyImage } from "@shopify/shopify-api/rest/admin/2023-04/image";
import { InventoryItem } from "@shopify/shopify-api/rest/admin/2023-04/inventory_item";

interface ExtendedVariant extends ShopifyVariant {
  inventoryItems?: InventoryItem[];
}

export interface ProductRegistrationReqBody {
  productProfitRightNFTAddress: string;
  productJsonString: ShopifyProduct;
  productVariantsInitialInventoriesJsonString: ExtendedVariant[];
  productOptionsJsonString:
    | {
        [key: string]: unknown;
      }
    | {
        [key: string]: unknown;
      }[]
    | null;
  productImagesJsonString: ShopifyImage[];
}
