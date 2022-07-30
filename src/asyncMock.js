const products =[
    {
        id: '001',
        name: 'BATMAN VINYL FIGURE',
        price: 300,
        category: 'superhéroes',
        img: 'image/...',
        stcok: 6,
        description: '001 Batman figura de Vinyl '
    },
    {id: '002', name: 'ROBIN VINYL FIGURE', price: 275, category: 'superhéroes', img: 'image/...', stcok: 6, description: '002 Robin figura de Vinyl '},
    {id: '003', name: 'THE JOKER VINYL FIGURE', price: 320, category: 'superhéroes', img: 'image/...', stcok: 6, description: '001 The joker figura de Vinyl '}
]

export const getProductsDeDaniel = () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 3000)
    })
}