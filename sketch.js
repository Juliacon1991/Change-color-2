var colorList = ['#DC143C','#FF69B4','#FF6347','#FFD700','#800080','#1E90FF','#228B22','#F4A460','#FFF0F5','#A9A9A9	'
  ];
function setup() {
  createCanvas(400,400);
  frameRate(1);
}

function draw() {
  noStroke();
  for(var x = 0; x < 400; x += 50)
  {
    for(var y = 0; y < 450; y += 40)
    {
      fill(colorList[floor(random()*colorList.length)]);
      quad(x,y,x+50,y-40,x+50,y,x,y+40);
    }
  }
}