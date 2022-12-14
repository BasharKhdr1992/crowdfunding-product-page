import { v4 as uuid4 } from "uuid";

export const rewards = [
  {
    id: uuid4(),
    title: "Bamboo Stand",
    pledge: 25,
    desc: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    amount: 101,
  },
  {
    id: uuid4(),
    title: "Black Edition Stand",
    pledge: 75,
    desc: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    amount: 64,
  },
  {
    id: uuid4(),
    title: "Bamboo Stand",
    pledge: 200,
    desc: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    amount: 0,
  },
];
