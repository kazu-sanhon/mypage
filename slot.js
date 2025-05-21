const slots = [
    document.getElementsByClassName('slot1'),
    document.getElementsByClassName('slot2'),
    document.getElementsByClassName('slot3'),
    document.getElementsByClassName('slot4'),
];
const hiraganas = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん".split('');

let intervals = [null, null, null];
let results = ["", "", ""];

function startSlot(index) {
  intervals[index] = setInterval(() => {
    const rand = hiraganas[Math.floor(Math.random() * hiraganas.length)];
    for (let el of slots[index]) {
      el.textContent = rand;
    }
  }, 100);
}

function stopSlot(index) {
  if (intervals[index]) {
    clearInterval(intervals[index]);
    intervals[index] = null;

    // 最初の要素のテキストを結果として採用
    results[index] = slots[index][0].textContent;

    // if (results.every(r => r !== "")) {
    //   document.getElementById("result").textContent = `結果: ${results.join("")}`;
    // }
  }
}

function resetSlots() {
  // すべてのインターバルを止める
  for (let i = 0; i < 4; i++) {
    if (intervals[i]) {
      clearInterval(intervals[i]);
    }
    results[i] = "";
    startSlot(i);
  }

//   // 結果をクリア
//   document.getElementById("result").textContent = "";
}