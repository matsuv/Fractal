var angulo = 0;
var slider;

function setup() {
  createCanvas(700, 700);
  slider = createSlider(0, TWO_PI, PI / 4, 0.01);
}

function draw() {
  background(51);
  angle = slider.value();
  stroke(255);
  translate(350, height);
  ramo(200);

}

function ramo(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 3) {
    push();
    rotate(angle);
    ramo(len * 0.67);
    pop();
    push();
    rotate(-angle);
    ramo(len * 0.67);
    pop();
  }
}