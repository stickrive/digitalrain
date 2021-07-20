const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const drops = [];
const text = [];
const font_size = 20;

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
columns = canvas.width / font_size;

context.translate(canvas.width, 0);
context.scale(-1, 1);

//Half-width kana characters, Latin Numbers and Alphabets, in decreasing probability.
const chars =
  "｢｣ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ｢｣ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ｢｣ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ123456789123456789123456789123456789123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
    ""
  );

for (let i = 0; i < columns; i++) drops[i] = Math.random() * 50 - 50;

const draw = () => {
  // Black background with 0.25 opacity to show the trail.
  context.font = font_size + "px 'Consolas', 'Lucida Console'";
  context.fillStyle = "rgba(0, 0, 0, 0.025)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  //Set the previous line to green so that the trail would remain green.
  context.fillStyle = "#6D2";
  for (let i = 0; i < drops.length; i++) {
    context.fillText(text[i], i * font_size, drops[i] * font_size);
  }

  // Generate new characters and display them, in white.
  context.fillStyle = "#FFF";
  for (let i = 0; i < drops.length; i++) {
    drops[i]++;
    // Random character to print.
    text[i] = chars[Math.floor(Math.random() * chars.length)];
    // Parameters - text, x-pos, y-pos.
    context.fillText(text[i], i * font_size, drops[i] * font_size);

    // Sending the drop to the top randomly, after it has crossed the screen.
    if (drops[i] * font_size > canvas.height)
      drops[i] = Math.random() * 100 - 100;
  }
};

setInterval(draw, 75);
