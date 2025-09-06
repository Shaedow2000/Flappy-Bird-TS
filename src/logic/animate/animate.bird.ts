import Bird from "../Class/bird.ts";
import Pillar from "../Class/pillars.ts";

const top: number = screen.availHeight / 2;

const bird: Bird = new Bird( top, 'bird' );
const birdDiv = document.getElementById( 'bird' ) as HTMLDivElement;

const pillar: Pillar = new Pillar( 350 );

export default function animate(): void {
    bird.update();
    birdDiv.style.top = `${ bird.topMargin }px`;

    requestAnimationFrame( animate );
}