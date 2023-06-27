import { ICardType } from "./game";
const SUIT = ["♠", "♣", "♥", "♦"];
const VALUES = ["A", "K", "Q", "J", "10", "9", "8", "7", "6"];
export default class Deck {
  cards: Card[];
  constructor(cards = freshDeck()) {
    this.cards = cards;
  }
  get numberOfCards() {
    return this.cards.length;
  }

  shuffle() {
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1));
      const oldValue = this.cards[newIndex];
      this.cards[i] = oldValue;
    }
  }
}
class Card {
  suit: string;
  value: string;
  constructor(suit: string, value: string) {
    this.suit = suit;
    this.value = value;
  }
}
function freshDeck() {
  return SUIT.flatMap((suit) => {
    return VALUES.map((value) => {
      return new Card(suit, value);
    });
  });
}

export const duplicateArrayAndMix = (array: ICardType[]) => {
  const duplicateCards = array.flatMap((i: ICardType) => [i, i]);
  for (let i = 0; i < duplicateCards.length - 1; i++) {
    const j = i + Math.floor(Math.random() * (duplicateCards.length - i));
    const temp = duplicateCards[j];
    duplicateCards[j] = duplicateCards[i];
    duplicateCards[i] = temp;
  }
  return duplicateCards;
};

export const createIconsArray = (initialCount: string) => {
  const deck = new Deck();

  deck.shuffle();

  switch (initialCount) {
    case "1":
      return duplicateArrayAndMix(deck.cards.slice(0, 3));
    case "2":
      return duplicateArrayAndMix(deck.cards.slice(0, 6));
    case "3":
      return duplicateArrayAndMix(deck.cards.slice(0, 9));
    default:
      break;
  }
};
