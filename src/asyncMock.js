const products =[
    {
        id: '001',
        name: 'BATMAN VINYL FIGURE',
        price: 300,
        category: 'Super héroes',
        img: 'https://http2.mlstatic.com/D_NQ_NP_641701-MLM45160683945_032021-O.jpg',
        stock: 5,
        description: '001 Batman figura de Vinyl '
    },
    {id: '002', name: 'ROBIN VINYL FIGURE', price: 275, category: 'Super héroes', img: 'https://i.ebayimg.com/images/g/lf0AAOSwsU5dKJUH/s-l600.jpg' , stock: 6, description: '002 Robin figura de Vinyl '},
    {id: '003', name: 'THE JOKER VINYL FIGURE', price: 320, category: 'Villanos', img: 'https://m.media-amazon.com/images/I/41tddXps-OL._AC_.jpg', stock: 3, description: '001 The joker figura de Vinyl '}
]

export const getProducts = () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}