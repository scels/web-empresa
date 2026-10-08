import { category } from "./category";
import { collection } from "./collection";
import { localizedString, localizedText } from "./localizedString";
import { product } from "./product";
import { productImage } from "./productImage";

export const schemaTypes = [
  localizedString,
  localizedText,
  productImage,
  category,
  collection,
  product,
];