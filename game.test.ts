// tests
import { expect, it, describe } from "@jest/globals";
import Deck from "./content/deck";

describe("Сколько карт в колоде", () => {
  it("Должно быть 36 карт", () => {
    // подготовка
    const expected = 36;
    // дейсвие
    const testDeck = new Deck();
    const result = testDeck.cards.length;
    // сверка
    expect(result).toBe(expected);
  });
});

describe("shuffle", () => {
  it("Рандомно перемешивает массив карт", () => {
    // подготовка
    const testDeck = new Deck();
    const controlDeck = new Deck();

    // дейсвие
    testDeck.shuffle();

    // сверка
    expect(testDeck.cards[0]).not.toBe(controlDeck.cards[0]);
  });
});
