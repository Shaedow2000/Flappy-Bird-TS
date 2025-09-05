import Jump from "../events/jump.ev.ts";

const shadow = document.getElementById( 'shadow' ) as HTMLDivElement;
const gameOVer = document.getElementById( 'game-over' ) as HTMLHeadingElement;

export default class Bird {
    public top: number
    public control: Jump

    private birb: HTMLDivElement;
    private readonly height: number;
    private readonly half: number;

    constructor( top: number, id: string ) {
        this.top = top;
        this.birb = document.getElementById( id ) as HTMLDivElement;
        this.height = this.birb.offsetHeight;
        this.half = this.height / 2;

        this.control = new Jump();
    }

    private topCollision(): boolean {
        return this.top <= this.half;
    }

    private bottomCollision(): boolean {
        if ( this.top >= ( screen.availHeight - this.height ) ) {
            this.gameOver();
            return true;
        } else {
            return false
        }
    }

    private gameOver(): void {
        shadow.style.display = 'block';
        shadow.style.visibility = 'visible';

        gameOVer.style.display = 'block';
        gameOVer.style.visibility = 'visible';
    }

    public update(): void {
        if ( this.control.isJumping ) {
            this.top -= !this.topCollision()? 14 : 0;
        } else {
            this.top += !this.bottomCollision()? 7 : 0;
        }
    }
}