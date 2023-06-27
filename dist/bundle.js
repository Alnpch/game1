(() => {
  "use strict";
  var t = {
    d: (e, n) => {
      for (var s in n)
        t.o(n, s) &&
          !t.o(e, s) &&
          Object.defineProperty(e, s, { enumerable: !0, get: n[s] });
    },
    o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
  };
  t.d({}, { n: () => r });
  const e = ["♠", "♣", "♥", "♦"],
    n = ["A", "K", "Q", "J", "10", "9", "8", "7", "6"];
  class s {
    constructor(
      t = (function () {
        return e.flatMap((t) => n.map((e) => new a(t, e)));
      })()
    ) {
      this.cards = t;
    }
    get numberOfCards() {
      return this.cards.length;
    }
    shuffle() {
      for (let t = this.numberOfCards - 1; t > 0; t--) {
        const e = Math.floor(Math.random() * (t + 1)),
          n = this.cards[e];
        this.cards[t] = n;
      }
    }
  }
  class a {
    constructor(t, e) {
      (this.suit = t), (this.value = e);
    }
  }
  const c = (t) => {
      const e = t.flatMap((t) => [t, t]);
      for (let t = 0; t < e.length - 1; t++) {
        const n = t + Math.floor(Math.random() * (e.length - t)),
          s = e[n];
        (e[n] = e[t]), (e[t] = s);
      }
      return e;
    },
    l = (t) => {
      const e = {
          "♠": "pik.svg",
          "♣": "krest.svg",
          "♥": "che.svg",
          "♦": "bub.svg",
        },
        n = document.querySelector(".game-section-start__container"),
        a = document.querySelector(".game-section-cards__container");
      (a.style.opacity = "1"), (n.style.display = "none");
      const i = ((t) => {
        const e = new s();
        switch ((e.shuffle(), t)) {
          case "1":
            return c(e.cards.slice(0, 3));
          case "2":
            return c(e.cards.slice(0, 6));
          case "3":
            return c(e.cards.slice(0, 9));
        }
      })(t)
        .map(
          (t) =>
            `\n      <div data-value=${t.value} data-suit=${
              t.suit
            } class="game-table__card" >\n     \n          <div class="card__face" style="background: url(./cards/${
              e[t.suit]
            }) center center no-repeat, rgb(255, 255, 255);">\n         \n              <div class="card__top">    \n                  <div class="card__value">${
              t.value
            }\n                  </div>\n                  <img class="card__suit" src="./cards/${
              e[t.suit]
            }" alt="suit">\n              </div>\n              <img src="./cards/${
              e[t.suit]
            }" alt="suit" class="suit_big">\n              <div class="card__bottom">    \n                  <div class="card__value">${
              t.value
            }\n                  </div>\n                  <img class="card__suit" src="./cards/${
              e[t.suit]
            }" alt="suit">\n              </div>\n              \n              \n          </div>\n          <div class="card__back"></div>\n          \n    </div>\n     \n      `
        )
        .join("");
      (a.innerHTML = `\n  <div class="game_content">\n    <div class="game_background" \n        <div id="timer">\n            <div class="timer__text">\n                <span class='timer__text_item'>min</span> <span class='timer__text_item'>sek</span>\n            </div>\n            <p class='timer'>00.00</p>\n        </div>\n        <button class="game_content_button">Начать заново</button>\n    </div>\n        <div class="game-cards-box">\n        ${i}\n        </div> `),
        document
          .querySelector(".game_content_button")
          .addEventListener("click", () => {
            l(t);
          });
      const o = document.querySelector(".timer");
      let u = 5;
      o.textContent = "00.05";
      const d = setInterval(function () {
        u--,
          0 === u
            ? (clearInterval(d),
              (function () {
                const t = document.querySelectorAll(".card__back");
                for (const e of t) e.style.display = "flex";
              })(),
              (function () {
                (u = 0),
                  (o.textContent = "00.00"),
                  (window.timeGame = setInterval(function () {
                    u++;
                    const t = ("00" + Math.floor(u / 60)).slice(-2),
                      e = ("00" + (u % 60)).slice(-2);
                    o.textContent = `${t}.${e}`;
                  }, 1e3)),
                  setTimeout(clearInterval, 6e5, window.timeGame);
                let t = null,
                  e = null,
                  n = !0,
                  s = !1;
                const a = Array.from(
                  document.querySelectorAll(".game-table__card")
                );
                a.forEach((c, l) =>
                  c.addEventListener("click", () => {
                    if (
                      (console.log(c),
                      !0 === n &&
                        !c.classList.contains("successfully") &&
                        (c.querySelector(".card__back") &&
                          c
                            .querySelector(".card__back")
                            .classList.remove("card__back"),
                        null === t ? (t = l) : l !== t && ((e = l), (n = !1)),
                        null !== t && null !== e && t !== e))
                    )
                      if (
                        a[t].dataset.suit === a[e].dataset.suit &&
                        a[t].dataset.value === a[e].dataset.value
                      ) {
                        a[t].classList.add("successfully"),
                          a[e].classList.add("successfully"),
                          (t = null),
                          (e = null),
                          (n = !0);
                        const c = a.filter((t) =>
                          t.classList.contains("successfully")
                        );
                        console.log(c),
                          a.length === c.length && ((s = !0), m(s));
                      } else m(s);
                  })
                );
              })())
            : (o.innerHTML = `00.0${u}`);
      }, 1e3);
      function m(t) {
        clearInterval(window.timeGame), (n.style.display = "block");
        const e = o.textContent;
        (a.style.opacity = "0.3"),
          n.classList.add("popup"),
          (n.innerHTML = `<div class="game-section-start__container">\n            <img class="timer_result-img" src="./cards/${
            t ? '"win.svg" alt="win"' : '"lose.svg" alt="lose"'
          }"  >\n            \n            <h2 class="game-menu_result-title">${
            t ? "Вы выиграли" : "Вы проиграли"
          }</h2>\n            <p class="title-time">Затраченное время</h2>\n            <p class='timer_result'>${e}</p>\n            <button class="game-menu__start-btn">Играть снова</button>\n            </div>`),
          document
            .querySelector(".game-menu__start-btn")
            .addEventListener("click", () => {
              r();
            });
      }
    },
    r = () => {
      (() => {
        document.querySelector(".game-section-start__container").innerHTML =
          '<div class="game-section-start__container">\n  <h2 class="game-menu__title">Выбери <br>сложность</h2>\n  <button class="game-menu-btn">1</button>\n  <button class="game-menu-btn">2</button>\n  <button class="game-menu-btn">3</button>\n  <button class="game-menu__start-btn">Старт</button>\n</div>';
        const t = document.querySelectorAll(".game-menu-btn");
        t.forEach((e) =>
          e.addEventListener("click", () => {
            t.forEach((t) => t.classList.remove("game-menu-btn_checked")),
              e.classList.add("game-menu-btn_checked"),
              document
                .querySelector(".game-menu__start-btn")
                .addEventListener("click", () => {
                  l(e.textContent);
                });
          })
        );
      })();
    };
  r();
})();
