var socket;


function setup() {
	socket = io.connect('http://192.168.1.159:8000');
	
    createCanvas(500,500);
    background(0);

    socket.on('mouse', Draw);
}

function mouseDragged()
{	
	var data =
	{
		x:mouseX,
		y:mouseY

	}
	socket.emit('mouse', data);

	fill(color(0,0,255));
	noStroke();
	ellipse(mouseX, mouseY, 36,36);

}

function Draw(data)
{
	console.log("data" + data)
	fill(255);
	noStroke();
	ellipse(data.x, data.y, 36,36);

}
