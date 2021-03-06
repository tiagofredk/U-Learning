const PRODUCTS = [
    {
        id: 100,
        name: 'Web Software Development Course',
        // price: 450,
        image: require('../../../../assets/src/Mockspics/WebSoftwareDevelopment.jpg'),
        description: 'Come learn programming with the guys who program facebook and airBnb'
    },
    {
        id: 101,
        name: 'Creative Writing Course',
        // price: 600,
        image: require('../../../../assets/src/Mockspics/CreativeWritingSchool.png'),
        description: 'Learn from the best writers and screenwriters of the best Brazilian soap operas'
    },
    {
        id: 102,
        name: 'Languages ​​course',
        // price: 100,
        image: require('../../../../assets/src/Mockspics/EducationCourses.png'),
        description: 'Choose between German, English and Portuguese to learn together with the best and renowned teachers.'
    }
];

export function getProducts(){
    return PRODUCTS;
}

export function getProduct(id){
    return PRODUCTS.find((product)=>(product.id == id));
}