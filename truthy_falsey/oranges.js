let products = [{ oranges: 3 }, { apples: 0 }];

if (!products[1].apples) {
  console.log("products does not have apples");
  // showUserOutOfStockPage();
}

if (!products[0].oranges) {
  console.log("product does not have oranges");
  // showUserOutOfStockPage();
}
