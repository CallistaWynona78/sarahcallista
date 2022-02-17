let j;
let k;
let l;
let m;
function setup() {
  // put setup code here
  createCanvas(400,200)
  y=100; 
  j=0;
}

function draw() {
  // put drawing code here
background(211,211,211)
strokeWeight(2)
line(200,0,200,200);

var y = 100 + 20*Math.sin(PI*j/20)
fill(50,205,50)
ellipse(100,100,150,150);
ellipse(300,100,150,150);

strokeWeight(2);
fill(255,255,255) // Stroke weight menjadi 2 pixel
strokeJoin(ROUND)
ellipse(60,40,40,50);
ellipse(150,40,40,50);
ellipse(260,40,40,50);
ellipse(350,40,40,50);

var y = 50 + 10*Math.sin(PI*j/20);
j +=1
beginShape();
fill(0) //Warna Hitam
ellipse(60,y,20,15)
ellipse(150,y,20,15)
endShape(CLOSE);
ellipse(260,40,20,15)
ellipse(350,40,20,15)
endShape(CLOSE);


strokeWeight(1);
strokeCap(ROUND)
fill(0)
line(100,75,90,65);
strokeCap(ROUND)
line(300,75,290,65);

endShape(CLOSE);

beginShape();//warna pink
fill(252,192,203)
ellipse(50,90,15,10)
ellipse(150,90,15,10)
ellipse(250,90,15,10)
ellipse(350,90,15,10)

fill(0)
ellipse(100,130,100,80)
ellipse(300,130,100,80)
fill(245,255,250)//warna putih
ellipse(100,130,70,50)
ellipse(300,130,70,50)

}