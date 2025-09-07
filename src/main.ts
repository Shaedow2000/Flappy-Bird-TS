import animate from "./logic/animate/animate.bird.ts";
import Pillar from "./logic/Class/pillars.ts";
import Bird from "./logic/Class/bird.ts";

requestAnimationFrame( animate );

const pillar: Pillar = new Pillar( 350 );
const pillarDiv = document.getElementById( 'pillar' ) as HTMLDivElement;

const top: number = screen.availHeight / 2;

const bird: Bird = new Bird( top, 'bird' );

pillarDiv.addEventListener( 'animationiteration', (): void => {
    if ( !pillar.over ) {
        pillar.randomizeHole();
    }
} );