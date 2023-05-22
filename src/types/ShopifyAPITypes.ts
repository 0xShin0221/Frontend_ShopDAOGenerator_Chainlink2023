import { Product as ShopifyProduct } from "@shopify/shopify-api/rest/admin/2023-04/product";
import { Variant as ShopifyVariant } from "@shopify/shopify-api/rest/admin/2023-04/variant";
import { Image as ShopifyImage } from "@shopify/shopify-api/rest/admin/2023-04/image";
import { InventoryItem as ShopifyInventoryItem } from "@shopify/shopify-api/rest/admin/2023-04/inventory_item";

export interface ProductRegistrationReqBody {
  productProfitRightNFTAddress: string;
  productJsonString: ShopifyProduct;
  productVariantsJsonString: ShopifyVariant[];
  productOptionsJsonString:
    | {
        [key: string]: unknown;
      }
    | {
        [key: string]: unknown;
      }[]
    | null;
  productImagesJsonString: ShopifyImage[];
  productInitialInventories: ShopifyInventoryItem[];
}
