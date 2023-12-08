import OFF from "openfoodfacts-nodejs";

const client = new OFF();
const products = [];
const barCodes = {
  nutella: 3017620422003,
  cocaCola: 5449000214911,
  yougurt: 3033490004521,
  cashaws: 20267605,
  chocolate: 3045140105502,
  water: 7613035974685,
  katchup: 8715700017006,
  cacaoPowder: 3033710065967,
  tropicalJuice: 3124480191182,
  philidelphiaCheese: 7622300441937,
  pasta: 8076802085738,
  mapleSyrup: 3088542500285,
  pastaSauce: 8076809513722,
  toffifee: 4014400400007,
  twix: 5000159459228,
  mozzarella: 8000430138719,
  muesli: 3229820116716,
  pringles: 5053990138722,
  coffee: 3033710074525,
  lays: 3168930008958,
  cornFlakes: 8410188012092,
  redBull: 9002490100070,
  banana: 3347761000670,
  pizza: 4001724819806,
  chocolateMousse: 3608580765653,
};

async function getProduct(barCode) {
  // console.log(barCodes[barCode].toString());
  // const res = await client.getProduct(barCodes[barCode].toString());
  // console.log(res.product.brands);
  // console.log(res.product.image_front_url);
  // console.log(res.product.quantity);
  // products.push({
  //   id: barCodes[barCode].toString(),
  //   productName: barCode,
  //   image: res.product.image_front_url,
  //   brands: res.product.brands,
  //   quantity: res.product.quantity,
  // });
  const res = await client.getProduct(barCode);
  console.log(res.product);

  return res;
}

// for (const barCode in barCodes) {
//   await getProduct(barCode);
//   console.log(barCode);
// }

await getProduct("5000159459228");
