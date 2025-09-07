import animate from "./logic/animate/animate.bird.ts";
import Pillar from "./logic/Class/pillars.ts";

requestAnimationFrame( animate );

const pillar: Pillar = new Pillar( 350 );
const pillarDiv = document.getElementById( 'pillar' ) as HTMLDivElement;

pillarDiv.addEventListener( 'animationiteration', (): void => {
    if ( !pillar.over ) {
        pillar.randomizeHole();
    }
} );