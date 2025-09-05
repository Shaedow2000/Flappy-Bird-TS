import Bird from "../Class/bird.ts";

const bird: Bird = new Bird( screen.availHeight / 2 );
const birdDiv = document.getElementById( 'bird' ) as HTMLDivElement;

export default function animate(): void {
    bird.update();
    birdDiv.style.top = `${ bird.top }px`;
    requestAnimationFrame( animate );
}