import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { addOrUpdateToCart, deleteItemFromCart, getCart } from '../api/firebase'
import { useAuthContext } from '../context/AuthContext'


export default function useCart() {
    const { uid } = useAuthContext()
    const queryClient = useQueryClient()
    const cartQuery = useQuery(['cart', uid || ''], () => getCart(uid), { enabled: !!uid, })

    const addOrUpdateItem = useMutation((product) => addOrUpdateToCart(uid, product),
        {
            onSuccess: () => queryClient.invalidateQueries(['cart', uid]),
        },
    )

    const deleteItem = useMutation((id) => deleteItemFromCart(uid, id), {
        onSuccess: () => {
            queryClient.invalidateQueries(['cart', uid])
        },
    })

    return { cartQuery, addOrUpdateItem, deleteItem }
}
