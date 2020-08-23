# YARS - Yet Another Retro Shooter
This was the result of a presentation I gave in front of my colleagues
at Exact on March 1, 2018.
I created a [shmup](https://en.wikipedia.org/wiki/Shoot_%27em_up)
from scratch in just over an hour.
I was using no frameworks, no stock images and no stock sound effects.
My only tools were:

- A computer with OS, command shell, web browser and web server
- [Vim](https://en.wikipedia.org/wiki/Vim_(text_editor))
  (customized; yeah, I cheated a bit there)
- [GIMP](https://en.wikipedia.org/wiki/GIMP)
- [SoX](https://en.wikipedia.org/wiki/SoX)

Later that year, I redid the whole thing in my attic.
It was less fun without the audience and without the
[Bob Ross](https://en.wikipedia.org/wiki/Bob_Ross) intro,
but the recording was better,
making it possible to follow exactly what I am doing.
You can watch it on YouTube:

[https://youtu.be/5V0jklDVT2g](https://youtu.be/5V0jklDVT2g)

## HTML5 implementation (2018)
You can play the end result here:

[https://helderman.github.io/yars/html5/yars.html](https://helderman.github.io/yars/html5/yars.html)

## Scratch implementation (2020)
This time I added power-ups, music and a title screen,
making it finally feel like a finished product.

You can play it here:

[https://scratch.mit.edu/projects/417981359](https://scratch.mit.edu/projects/417981359)

### Instructions
Warning: loud sounds, bright flashes.

Click the green flag, then click 'Play' to start.
Move the mouse to pilot the ship. Click to shoot.
Pick up power-ups, or shoot them for instant carnage.
Picking up or destroying a power-up will cancel
any earlier power-up you picked up, so pick wisely.

Power-ups:

- Cat - side shields
- Giga - flamethrower
- Gobo - triple fire
- Nano - score multiplier
- Pico - hot bullets
- Tera - chain reaction
- all 6 - everything!

The last one is extremely rare.
It will appear after you picked up all other power-ups at least once,
then shot a power-up.

### Notes and Credits
Vertically scrolling shoot 'em up, with explosive overkill!
Good for blowing off steam.

Based on a simple HTML5 game I made in 2018:   
[https://helderman.github.io/yars/](https://helderman.github.io/yars/)

Actually, the original game was just the side-effect
of a presentation I did about writing games for fun:   
[https://youtu.be/5V0jklDVT2g](https://youtu.be/5V0jklDVT2g)

For the explosions, I am using the same 'fisheye' trick I explored in the 'Explosion' project I made earlier this year:
[https://scratch.mit.edu/projects/389171074/](https://scratch.mit.edu/projects/389171074/)

All graphics created either with Scratch's costume editor
(text, digits, buttons, power-ups)
or with GIMP
(ships, bullets, title, starry background).
[https://www.gimp.org/](https://www.gimp.org/)

Scratch Cat, Giga, Gobo, Nano, Pico, Tera
taken from Scratch's image library.

"Magic Spell" sound effect taken from Scratch's audio library.
Voice-over (power-ups) by me;
post-processed with Scratch's sound editor.
All other sound effects (shooting, explosions) created with SoX.
[http://sox.sourceforge.net/](http://sox.sourceforge.net/)

Music: "Sci Fi" by Benjamin Tissot (a.k.a. Bensound)   
[https://www.bensound.com/royalty-free-music/track/sci-fi](https://www.bensound.com/royalty-free-music/track/sci-fi)
License: free license with attribution.   
[https://www.bensound.com/licensing](https://www.bensound.com/licensing)

Title font: "Ink Free", designed by Steve Matteson.
Copyright © 2005-2018 Ascender Corporation.
[https://docs.microsoft.com/nl-nl/typography/font-list/ink-free](https://docs.microsoft.com/nl-nl/typography/font-list/ink-free)

BUGS:   
Sometimes, lone invaders wander around at the start of the game.
