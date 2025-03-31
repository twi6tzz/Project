function orderProduct(productName) {
    localStorage.setItem("selectedProduct", productName);
    alert(productName + " тапсырысқа қабылданды!");
}
