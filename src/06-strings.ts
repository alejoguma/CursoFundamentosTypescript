(()=>{
    let productTitle = 'My amazing product';
    // productTitle = null;
    productTitle = 'My amazing product change';
    console.log(productTitle);

    const productDescription = "descripcion del producto";
    console.log('productDescription',productDescription);

    let productPrice = 100;
    let isNew: boolean = false;

    const summary = `
        title: ${productTitle}
        description: ${productDescription}
        price: ${productPrice}
        isNew: ${isNew}
    `;
    console.log(summary);

    const myString: string = '';
})();
