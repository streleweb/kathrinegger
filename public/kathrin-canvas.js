const kathrinImage = new Image();
kathrinImage.src = 'images/kathrin_hero_eyespop.webp'



  console.log('All assets are loaded');
  const canvas = document.getElementById('kathrin-canvas');


  window.addEventListener('load', () => {
    // console.log(canvas);
    const ctx = canvas.getContext('2d');

    // ctx.drawImage(kathrinImage, 0, 0, canvas.width, canvas.height);
     const pixels = ctx.getImageData(0,0, canvas.width, canvas.height);
    // console.log(pixels)
    let allParticles = [];
    const numberOfParticles = 150;

    let mappedImage = [];

    for (let y = 0; y < canvas.height; y++){
      let row = [];
      for(let x = 0; x < canvas.width; x++){
        const red = pixels.data[(y * 4 * pixels.width) + (x * 4)];
        const green = pixels.data[(y * 4 * pixels.width) + (x * 4 + 1)];
        const blue = pixels.data[(y * 4 * pixels.width) + (x * 4 + 2)];
        const brightness = calculateRelativeBrightness(red, green, blue);
        const cell = [
          cellBrightness = brightness,
        ]
        row.push(cell);
      }
      mappedImage.push(row);
    }
    // console.log(`mappedimage: ${mappedImage}`)

    function calculateRelativeBrightness(red, green, blue){
      return Math.sqrt(
        (red * red) * 0.299 +
        (green * green) * 0.587 +
        (blue * blue) * 0.114
      )/100;
    }

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.speed = 0;
        this.velocity = Math.random() * 1;
        this.size = Math.random() * 0.1 + 0.5;
        this.position1 = Math.floor(this.y);
        this.position2 = Math.floor(this.x);
      }

      update(){
        this.position1 = Math.floor(this.y);
        this.position2 = Math.floor(this.x);
        this.speed = mappedImage[this.position1][this.position2][0];

        this.y += this.velocity;
        if (this.y >= canvas.height){
          this.y = 0;
          this.x = Math.random() * canvas.width;

        }
      }
      draw(){
        ctx.beginPath();
        ctx.fillStyle = '#660708';
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    //class Particle END

    function init(){
      for (let i = 0; i < numberOfParticles; i++){
        allParticles.push(new Particle);
      }
    }
    init();

    function animate(){
      // ctx.drawImage(kathrinImage, 0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 0.3;
      ctx.fillStyle = 'rgb(0,0,0)';
      ctx.fillRect(0,0,canvas.width, canvas.height);
      for (let i = 0; i < allParticles.length; i++){
        allParticles[i].update();
        allParticles[i].draw();
      }
      requestAnimationFrame(animate);
    }
    animate();
  });












