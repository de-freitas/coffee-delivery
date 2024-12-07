import img_expresso_tradicional from "../assets/Type=Expresso.svg";
import img_expresso_americano from "../assets/Type=Americano.svg";
import img_expresso_cremoso from "../assets/Type=Expresso-cremoso.svg";
import img_expresso_gelado from "../assets/Type=Cafe-gelado.svg";
import img_cafe_com_leite from "../assets/Type=Cafe-com-leite.svg";
import img_latte from "../assets/Type=Latte.svg";
import img_capuccino from "../assets/Type=Capuccino.svg";
import img_macchiato from "../assets/Type=Macchiato.svg";
import img_mocaccino from "../assets/Type=Mochaccino.svg";
import img_chocolate_quente from "../assets/Type=Chocolate-quente.svg";
import img_cubano from "../assets/Type=Cubano.svg";
import img_havaiano from "../assets/Type=Havaiano.svg";
import img_arabe from "../assets/Type=Arabe.svg";
import img_irlandes from "../assets/Type=Irlandês.svg";

export const COFFEES = [
  {
    name: "Expresso Tradicional",
    img: img_expresso_tradicional,
    types: ["TRADICIONAL"],
    desc: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    quantity: 0,
  },

  {
    name: "Expresso Americano",
    img: img_expresso_americano,
    types: ["TRADICIONAL"],
    desc: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
    quantity: 0,
  },

  {
    name: "Expresso Cremoso",
    img: img_expresso_cremoso,
    types: ["TRADICIONAL"],
    desc: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
    quantity: 0,
  },

  {
    name: "Expresso Gelado",
    img: img_expresso_gelado,
    types: ["TRADICIONAL", "GELADO"],
    desc: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
    quantity: 0,
  },

  {
    name: "Café com Leite",
    img: img_cafe_com_leite,
    types: ["TRADICIONAL", "COM LEITE"],
    desc: "Meio a meio expresso tradicional com leite vaporizado",
    price: 9.9,
    quantity: 0,
  },

  {
    name: "Latte",
    img: img_latte,
    types: ["TRADICIONAL", "COM LEITE"],
    desc: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
    quantity: 0,
  },

  {
    name: "Capuccino",
    img: img_capuccino,
    types: ["TRADICIONAL", "COM LEITE"],
    desc: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
    quantity: 0,
  },

  {
    name: "Macchiato",
    img: img_macchiato,
    types: ["TRADICIONAL", "COM LEITE"],
    desc: "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
    quantity: 0,
  },

  {
    name: "Mocaccino",
    img: img_mocaccino,
    types: ["TRADICIONAL", "COM LEITE"],
    desc: "Café expresso com calda de chocolate, pouco de leite e espuma",
    price: 9.9,
    quantity: 0,
  },

  {
    name: "Chocolate Quente",
    img: img_chocolate_quente,
    types: ["ESPECIAL", "COM LEITE"],
    desc: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
    quantity: 0,
  },

  {
    name: "Cubano",
    img: img_cubano,
    types: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
    desc: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
    quantity: 0,
  },

  {
    name: "Havaiano",
    img: img_havaiano,
    types: ["TRADICIONAL", "COM LEITE"],
    desc: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
    quantity: 0,
  },

  {
    name: "Árabe",
    img: img_arabe,
    types: ["ESPECIAL"],
    desc: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
    quantity: 0,
  },

  {
    name: "Irlandês",
    img: img_irlandes,
    types: ["ESPECIAL", "ALCOÓLICO"],
    desc: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.9,
    quantity: 0,
  },
];

export const SELECTED_COFFEES = [
  {
    name: "Expresso Tradicional",
    img: img_expresso_tradicional,
    amount: "1",
    price: 9.9,
  },
  {
    name: "Irlandês",
    img: img_irlandes,
    amount: "1",
    price: 9.9,
  },
];
