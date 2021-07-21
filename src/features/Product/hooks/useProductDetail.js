import productsApi from "api/productApi";
import { useEffect, useState } from "react";

export default function useProductDetail(productId) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const result = await productsApi.get(productId);
      setProduct(result);
    })();

    setLoading(false);
  }, [productId]);

  return { product, loading };
}
