let canvas;
let myShader;

function setup() {
  console.log("Setup started");
  
  canvas = createCanvas(400, 400, WEBGL);
  let container = select('#sketch-container');
  if (container) {
    canvas.parent(container);
    console.log("Canvas added to container");
  } else {
    console.error("Container not found");
  }

  // Crie e use o shader
  myShader = createShader(vertexShader, fragmentShader);
  shader(myShader);

  let button = createButton('Animate');
  button.position(10, 410);
  button.mousePressed(() => {
    console.log("Animation toggled");
    // Você pode adicionar lógica de animação aqui se desejar
  });

  console.log("Setup completed");
}

function draw() {
  // Atualize os uniforms do shader
  myShader.setUniform("u_resolution", [width, height]);
  myShader.setUniform("u_time", millis() / 1000.0);
  
  // Desenhe um retângulo que cobre toda a tela
  rect(-width/2, -height/2, width, height);
  
  if (frameCount === 1) {
    console.log("First frame drawn");
  }
}