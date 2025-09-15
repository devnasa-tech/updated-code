// useProductAttributesData.js
import { useMemo } from "react";
import useProductAttributes from "./useProductAttributes";


const useProductAttributesData = () => {
  const [productsAttributes, refetch, isLoading] = useProductAttributes();

  const productCategory = useMemo(
    () =>
      productsAttributes.flatMap((product) =>
        product.productAttributes.category.map((cat) => cat)
      ),
    [productsAttributes]
  );

  const productSubCategory = useMemo(
    () =>
      productsAttributes.flatMap((product) =>
        product.productAttributes.subCategory.map((cat) => cat)
      ),
    [productsAttributes]
  );

  const productSize = useMemo(
    () =>
      productsAttributes.flatMap((product) =>
        product.productAttributes.productSize.map((cat) => cat)
      ),
    [productsAttributes]
  );

  const productColour = useMemo(
    () =>
      productsAttributes.flatMap((product) =>
        product.productAttributes.ProductColour.map((cat) => cat)
      ),
    [productsAttributes]
  );

  const productFit = useMemo(
    () =>
      productsAttributes.flatMap((product) =>
        product.productAttributes.productFit.map((cat) => cat)
      ),
    [productsAttributes]
  );



  return {
    productCategory,
    productSubCategory,
    productSize,
    productColour,
    productFit,
    refetch,
    isLoading,
  };
};

export default useProductAttributesData;
