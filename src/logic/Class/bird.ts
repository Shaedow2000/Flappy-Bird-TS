import Jump from "../events/jump.ev.ts";

export default class Bird {
    public top: number
    public control: Jump

    constructor( top: number ) {
        this.top = top;

        this.control = new Jump();
    }

    public update(): void {
        if ( this.control.isJumping ) {
            this.top -= 14;
        } else {
            this.top += 6;
        }
    }
}