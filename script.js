"use strict";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const drops = [];
const text = [];
const font_size = 20;

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let columns = canvas.width / font_size;

ctx.translate(canvas.width, 0);
ctx.scale(-1, 1);

// Half-width kana characters, Latin Numbers and Alphabets, in decreasing probability.

// Explain decreasing probability:
// There are 3 sets of  55 Japanese characters, 4 sets of numbers 1-9, and one set of A-Z
// Because of this, when picking at random from the array you are much more likely
// to get a Kana character over anything else
const chars =
  "｢｣ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ｢｣ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ｢｣ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ123456789123456789123456789123456789123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
    ""
  );

for (let i = 0; i < columns; i++) drops[i] = Math.random() * 50 - 50;

const draw = () => {
  // Black background with 0.25 opacity to show the trail.
  ctx.font = font_size + "px 'Consolas', 'Lucida Console'";
  ctx.fillStyle = "rgba(0, 0, 0, 0.025)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  //Set the previous line to green so that the trail would remain green.
  ctx.fillStyle = "#6D2";
  for (let i = 0; i < drops.length; i++) {
    ctx.fillText(text[i], i * font_size, drops[i] * font_size);
  }

  // Generate new characters and display them, in white.
  ctx.fillStyle = "#FFF";
  for (let i = 0; i < drops.length; i++) {
    drops[i]++;
    // Random character to print.
    text[i] = chars[Math.floor(Math.random() * chars.length)];
    // Parameters - text, x-pos, y-pos.
    ctx.fillText(text[i], i * font_size, drops[i] * font_size);

    // Sending the drop to the top randomly, after it has crossed the screen.
    if (drops[i] * font_size > canvas.height)
      drops[i] = Math.random() * 100 - 100;
  }
};

setInterval(draw, 75);
