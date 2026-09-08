function solve() {
   let finalResult = "";
   let totalMoney = 0;
   let totalProducts = {};
   let addButtons = document.getElementsByClassName("add-product");

   addButtons[0].addEventListener("click", function firstProduct() {
      let productName = document.getElementsByClassName("product-title")[0].textContent;
      let productPrice = document.getElementsByClassName("product-line-price")[0].textContent;
      finalResult += `Added ${productName} for ${Number(productPrice).toFixed(2)} to the cart.\n`;
      totalMoney += Number(productPrice);
      totalProducts[productName] = "0";
      })

   addButtons[1].addEventListener("click", function firstProduct() {
      let productName = document.getElementsByClassName("product-title")[1].textContent;
      let productPrice = document.getElementsByClassName("product-line-price")[1].textContent;
      finalResult += `Added ${productName} for ${Number(productPrice).toFixed(2)} to the cart.\n`;
      totalMoney += Number(productPrice);
      totalProducts[productName] = "0";
      })

   addButtons[2].addEventListener("click", function firstProduct() {
      let productName = document.getElementsByClassName("product-title")[2].textContent;
      let productPrice = document.getElementsByClassName("product-line-price")[2].textContent;
      finalResult += `Added ${productName} for ${Number(productPrice).toFixed(2)} to the cart.\n`;
      totalMoney += Number(productPrice);
      totalProducts[productName] = "0";
      })
   
   let checkoutButton = document.getElementsByClassName("checkout");
   checkoutButton[0].addEventListener("click", finalFunc);
   function finalFunc() {
      finalResult += `You bought ${Object.keys(totalProducts).join(", ")} for ${totalMoney.toFixed(2)}.`;
      let textArea = document.querySelector("textarea");
      textArea.value = finalResult;
      addButtons[0].disabled = true;
      addButtons[1].disabled = true;
      addButtons[2].disabled = true;
      checkoutButton[0].disabled = true;
   }
}
