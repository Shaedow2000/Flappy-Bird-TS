import Bird from "../Class/bird.ts";

const top: number = screen.availHeight / 2;

const bird: Bird = new Bird( top, 'bird' );
const birdDiv = document.getElementById( 'bird' ) as HTMLDivElement;

export default function animate(): void {
    bird.update();
    birdDiv.style.top = `${ bird.topMargin }px`;

    requestAnimationFrame( animate );
}