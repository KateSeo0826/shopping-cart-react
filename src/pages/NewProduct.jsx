import React, { useState } from 'react'
import { uploadImage } from '../api/uploader'
import Button from '../components/ui/Button'
import useProducts from '../hooks/useProducts'

function NewProduct() {
    const [product, setProduct] = useState({})
    const [file, setFile] = useState()
    const [isUploading, setIsUploading] = useState(false)
    const [success, setSuccess] = useState()
    const { addProduct } = useProducts()

    const productSubmit = (e) => {
        e.preventDefault();
        setIsUploading(true);
        uploadImage(file) //
            .then((url) => {
                addProduct.mutate(
                    { product, url },
                    {
                        onSuccess: () => {
                            setSuccess('Product was added successfully.');
                            setTimeout(() => {
                                setSuccess(null);
                            }, 4000);
                        }
                    }
                )
            })
            .finally(() => setIsUploading(false));
        setProduct('')
    }

    const handleChange = (e) => {
        const { name, value, files } = e.target
        if (name === 'file') {
            setFile(files && files[0])
            return
        }
        setProduct((product) => ({
            ...product,
            [name]: value
        }))
    }

    return (
        <section className='w-full text-center'>
            <h2 className='text-2xl font-bold my-4'>Add New Product</h2>
            {success && <p className='my-2'>{success}</p>}
            {file &&
                <img
                    className='w-96 mx-auto mb-2'
                    src={URL.createObjectURL(file)}
                    alt='local file'
                />}
            <form className="flex flex-col px-12" onSubmit={productSubmit} >
                <input
                    type="file"
                    accept='image/*'
                    name='file'
                    required
                    onChange={handleChange}
                />
                <input
                    type="text"
                    id='name'
                    name='name'
                    value={product.name ?? ''}
                    required
                    onChange={handleChange}
                    placeholder='Item Name'
                />
                <input
                    type="text"
                    id='price'
                    name='price'
                    value={product.price ?? ''}
                    required
                    onChange={handleChange}
                    placeholder='Item Price'
                />
                <input
                    type="text"
                    id='category'
                    name='category'
                    value={product.category ?? ''}
                    required
                    onChange={handleChange}
                    placeholder='Category'
                />
                <input
                    type="text"
                    id='description'
                    name='description'
                    value={product.description ?? ''}
                    required
                    onChange={handleChange}
                    placeholder='Description'
                />
                <input
                    type="text"
                    id='options'
                    name='options'
                    value={product.options ?? ''}
                    required
                    onChange={handleChange}
                    placeholder='Options'
                />
                <Button
                    text={isUploading ? 'Uploading' : 'Add Product'}
                    disabled={isUploading} />
            </form>
        </section>
    )
}

export default NewProduct