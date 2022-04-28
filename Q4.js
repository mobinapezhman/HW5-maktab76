function mostExpensivePieceOfJewellery(obj) {
    let array = Object.values(obj);
    let maxPrice= Math.max(...array);
    let keyMostExpensive = Object.keys(obj).find(key => obj[key] === maxPrice)
    return `The  most  expensive  one  is  the ${keyMostExpensive}`
    
  }
  console.log(mostExpensivePieceOfJewellery({
      "Diamond Earrings": 980,
      "Gold Watch": 250,
      "Pearl Necklace": 4650
      }));
