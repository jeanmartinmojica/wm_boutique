class Product{
    constructor(id, title, price, pictureUrl, category){
        this.id = id
        this.title = title
        this.price = price
        this.pictureUrl = pictureUrl
        this.category = category
    }
}

export const arrProducts = []

function loadProducts(){
    arrProducts.push(new Product(1, 'Black Polo', 30, "https://i.linio.com/p/ba08e2c8080d4d650c34d2bf8e3f4a28-product.webp", "men"))
    arrProducts.push(new Product(2, 'Short Skirt', 40, "https://i.linio.com/p/3d36966da831d4e6ee264ac8f87116f7-product.webp", "women"))
    arrProducts.push(new Product(3, 'Jean Jacket', 100, "https://i.linio.com/p/0e5c98e9df2f8f1aedb76acf8b17c8c3-product.webp", "denim"))
    arrProducts.push(new Product(4, 'White Classic T-shirt', 50, "https://i.linio.com/p/d500be13d19582bd4041c1e9b4b8e012-product.webp", "men"))
    arrProducts.push(new Product(5, 'Violet Dress', 80, "https://i.linio.com/p/91e06a0cdde1d28ad68725af336d1130-product.webp", "women"))
    arrProducts.push(new Product(6, 'Jean Skinny', 60, "https://i.linio.com/p/935d01095cc8c3b293f2d7eac5a12d97-product.webp", "denim")) 
}
loadProducts()