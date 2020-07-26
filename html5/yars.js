var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.font = 'bold 32px sans';
ctx.fillStyle = 'yellow';
ctx.textAlign = 'right';

ctx.strokeStyle = 'white';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

var framecount = 0, zeroes = '00000000', score = 0, scount = 0;
var mx = 320, my = 500, fired = 0;

var cos = Math.cos(1);
var sin = Math.sin(1);

function family(a) {
	return function(fn) {
		for (var i = a.length; i--;) a[i][fn]();
	};
}

function audio(id) {
	var a = document.getElementById(id);
	return function() {
		if (a.paused) a.play(); else a.currentTime = 0;
	};
}

var pew = audio('pew');
var bang = audio('bang');

var sprite = {
	dead: 0,
	xsize: 15,
	xscore: 0,
	collide: function() {
		this.hit = !this.dead && this.img.collide(this.x, this.y);
	},
	draw: function() {
		!this.dead && this.img.draw(this.x, this.y);
	},
	explode: function() {
		if (this.hit) {
			this.dead = framecount + this.xsize;
			score += this.xscore;
			if (this.xsize > 10) bang();
		}
		var a = this.dead - framecount;
		if (a > 0) {
			var x = 10 * (this.xsize - a), y = 0;
			var rnd = this.dead / 10;
			ctx.globalAlpha = 3 * a / this.xsize;
			ctx.beginPath();
			for (var i = 3 * this.xsize; i--;) {
				var rnd = rnd * 1.3 % 1 + 0.1;
				ctx.moveTo(this.x + x * rnd, this.y + y * rnd);
				ctx.lineTo(this.x + x * rnd * 0.9, this.y + y * rnd * 0.9);
				a = x * cos - y * sin;
				y = x * sin + y * cos;
				x = a;
			}
			ctx.stroke();
			ctx.globalAlpha = 1;
		}
	}
};

function Ship() {
	this.xsize = 30;
	this.img = document.getElementById('ship');
	this.move = function() {
		if (!this.dead) {
			this.x = mx;
			this.y = my;
		}
	};
}
Ship.prototype = sprite;

function Bullet() {
	this.xsize = 7;
	this.y = -999;
	this.img = document.getElementById('bullet');
	this.move = function() {
		if (!this.dead && this.y > -99) {
			this.y -= 20;
		}
		else if (framecount > this.dead && !--fired) {
			this.dead = 0;
			this.x = ship.x;
			this.y = ship.y - 50;
			pew();
		}
	};
}
Bullet.prototype = sprite;

var lag = 0;

function Invader(num) {
	this.dead = -1;
	this.lag = lag += 5;
	this.xscore = 5;
	this.img = document.getElementById('inv' + num);
	this.move = function() {
		var t = 2 * Math.sin((framecount - this.lag) / 300);
		if (t < -1.9 || t > 1.9) this.dead = 0;
		if (!this.dead) {
			switch (num) {
				case 1:
					this.moveTo(t, 2 * t * t);
					break;
				case 2:
					this.moveTo(t*(t-1)*(t+1), 0.5*t*t-0.2);
					break;
				case 3:
					this.moveTo(t*(t-1)*(t+1), 2*(t-1)*(t-0.5)*(t+0.5)*(t+1));
					break;
			}
		}
	};
	this.moveTo = function(x, y) {
		x += 0.1 * Math.sin((framecount - this.lag) / 17);
		y += 0.1 * Math.sin((framecount - this.lag) / 27);
		this.x = canvas.width * (0.5 - x);
		this.y = canvas.height * (0.5 - y);
	};
}
Invader.prototype = sprite;

function main() {
	window.ship =  new Ship();
	var good = family([
		ship,
		new Bullet(), new Bullet(), new Bullet(), new Bullet(),
	]);
	var bad = family([
		new Invader(1), new Invader(1), new Invader(1), new Invader(1),
		new Invader(1), new Invader(1), new Invader(1), new Invader(1),
		new Invader(1), new Invader(1), new Invader(1), new Invader(1),
		new Invader(1), new Invader(1), new Invader(1), new Invader(1),
		new Invader(2), new Invader(2), new Invader(2), new Invader(2),
		new Invader(2), new Invader(2), new Invader(2), new Invader(2),
		new Invader(2), new Invader(2), new Invader(2), new Invader(2),
		new Invader(2), new Invader(2), new Invader(2), new Invader(2),
		new Invader(3), new Invader(3), new Invader(3), new Invader(3),
		new Invader(3), new Invader(3), new Invader(3), new Invader(3),
		new Invader(3), new Invader(3), new Invader(3), new Invader(3),
		new Invader(3), new Invader(3), new Invader(3), new Invader(3),
		new Invader(1), new Invader(1), new Invader(1), new Invader(1),
		new Invader(1), new Invader(1), new Invader(1), new Invader(1),
		new Invader(1), new Invader(1), new Invader(1), new Invader(1),
		new Invader(1), new Invader(1), new Invader(1), new Invader(1),
		new Invader(2), new Invader(2), new Invader(2), new Invader(2),
		new Invader(2), new Invader(2), new Invader(2), new Invader(2),
		new Invader(2), new Invader(2), new Invader(2), new Invader(2),
		new Invader(2), new Invader(2), new Invader(2), new Invader(2),
		new Invader(3), new Invader(3), new Invader(3), new Invader(3),
		new Invader(3), new Invader(3), new Invader(3), new Invader(3),
		new Invader(3), new Invader(3), new Invader(3), new Invader(3),
		new Invader(3), new Invader(3), new Invader(3), new Invader(3),
		new Invader(1), new Invader(1), new Invader(1), new Invader(1),
		new Invader(1), new Invader(1), new Invader(1), new Invader(1),
		new Invader(1), new Invader(1), new Invader(1), new Invader(1),
		new Invader(1), new Invader(1), new Invader(1), new Invader(1),
		new Invader(2), new Invader(2), new Invader(2), new Invader(2),
		new Invader(2), new Invader(2), new Invader(2), new Invader(2),
		new Invader(2), new Invader(2), new Invader(2), new Invader(2),
		new Invader(2), new Invader(2), new Invader(2), new Invader(2),
		new Invader(3), new Invader(3), new Invader(3), new Invader(3),
		new Invader(3), new Invader(3), new Invader(3), new Invader(3),
		new Invader(3), new Invader(3), new Invader(3), new Invader(3),
		new Invader(3), new Invader(3), new Invader(3), new Invader(3),
		new Invader(1), new Invader(1), new Invader(1), new Invader(1),
		new Invader(1), new Invader(1), new Invader(1), new Invader(1),
		new Invader(1), new Invader(1), new Invader(1), new Invader(1),
		new Invader(1), new Invader(1), new Invader(1), new Invader(1),
		new Invader(2), new Invader(2), new Invader(2), new Invader(2),
		new Invader(2), new Invader(2), new Invader(2), new Invader(2),
		new Invader(2), new Invader(2), new Invader(2), new Invader(2),
		new Invader(2), new Invader(2), new Invader(2), new Invader(2),
		new Invader(3), new Invader(3), new Invader(3), new Invader(3),
		new Invader(3), new Invader(3), new Invader(3), new Invader(3),
		new Invader(3), new Invader(3), new Invader(3), new Invader(3),
		new Invader(3), new Invader(3), new Invader(3), new Invader(3),
	]);
	canvas.onclick = function() {
		fired = !ship.dead;
	};
	canvas.onmousemove = function(e) {
		mx = e.pageX - canvas.offsetLeft;
		my = e.pageY - canvas.offsetTop;
	};
	(function loop() {
		requestAnimationFrame(loop);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		bad('move');
		good('move');
		bad('draw');
		good('collide');
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		good('draw');
		bad('collide');
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		bad('draw');
		good('draw');
		bad('explode');
		good('explode');
		scount += scount < score;
		ctx.fillText(zeroes + scount, ctx.measureText(zeroes).width, 40);
		++framecount;
	})();
}
var toload = 1;
var imgs = document.getElementsByTagName('img');
for (var i = imgs.length; i--;) {
	++toload;
	imgs[i].onload = function() {
		var w = this.width;
		var h = this.height;
		ctx.drawImage(this, 0, 0);
		var shape = ctx.getImageData(0, 0, w, h).data;
		ctx.clearRect(0, 0, w, h);
		this.collide = function(x, y) {
			var a = ctx.getImageData(x - w/2 | 0, y - h/2, w, h).data;
			for (var i = 3; i < a.length; i += 4) {
				if (a[i] + shape[i] > 500) return true;
			}
			return false;
		};
		this.draw = function(x, y) {
			ctx.drawImage(this, x - w/2 | 0, y - h/2 | 0);
		};
		--toload || main();
	};
	imgs[i].src = imgs[i].id + '.png';
}
--toload || main();
