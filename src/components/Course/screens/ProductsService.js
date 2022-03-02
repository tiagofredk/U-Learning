const PRODUCTS = [
    {
        id: 100,
        name: 'Beagle 1',
        price: 450,
        image: require('../../../../assets/src/Mockspics/beagle1.jpeg'),
        description: 'A super cutie Beagle'
    },
    {
        id: 101,
        name: 'Beagle 2',
        price: 600,
        image: require('../../../../assets/src/Mockspics/beagle2.jpg'),
        description: ' A super cutie Beagle'
    },
    {
        id: 102,
        name: 'Beagle 3',
        price: 349,
        image: require('../../../../assets/src/Mockspics/beagle3.jpg'),
        description: 'A super cutie Beagle'
    }
];

export function getProducts(){
    return PRODUCTS;
}

export function getProduct(id){
    return PRODUCTS.find((product)=>(product.id == id));
}