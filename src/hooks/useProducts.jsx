import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addNewProduct, getProducts as fetchProduct } from '../api/Firebase';

function useProducts() {
    const queryClient = useQueryClient();

    const productsQuery = useQuery(['products'], fetchProduct, {
        stateTime: 1000 * 60,
    });

    const addProduct = useMutation(({product, url}) => addNewProduct(product, url), {
        onSuccess: () => queryClient.invalidateQueries(['products']),
      });

      return { productsQuery, addProduct};
}

export default useProducts;