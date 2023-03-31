import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { addNewProduct, getProducts as fetchProduct } from '../api/firebase'



export default function useProducts() {
    const queryClient = useQueryClient()
    const productQuery = useQuery(['products'], fetchProduct, { staleTime: 1000 * 60 })

    const addProduct = useMutation(
        ({ product, url }) => addNewProduct(product, url),
        {
            onSuccess: () => queryClient.invalidateQueries(['products']),
        }
    )
    return { productQuery, addProduct }
}
