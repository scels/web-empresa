import { category } from "./category";
import { collection } from "./collection";
import { editorialImage } from "./editorialImage";
import { localizedString, localizedText } from "./localizedString";
import { product } from "./product";
import { productImage } from "./productImage";
import { siteContent } from "./siteContent";
import { workshopStep } from "./workshopStep";

export const schemaTypes = [
  localizedString,
  localizedText,
  productImage,
  editorialImage,
  workshopStep,
  category,
  collection,
  product,
  siteContent,
];