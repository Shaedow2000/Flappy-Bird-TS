import Jump from "../events/jump.ev.ts";

export default class Bird {
    public top: number
    public control: Jump

    constructor( top: number ) {
        this.top = top;

        this.control = new Jump();
    }

    private topCollision(): boolean {
        const birb = document.getElementById( 'bird' ) as HTMLDivElement;
        const height: number = Number( birb.offsetHeight ) / 2;
        return this.top <= height;
    }

    public update(): void {
        console.log(this.top)
        if ( this.control.isJumping ) {
            this.top -= !this.topCollision()? 14 : 0;
        } else {
            this.top += 6;
        }
    }
}