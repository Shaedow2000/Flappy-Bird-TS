import Jump from "../events/jump.ev.ts";
import Pillar from "./pillars.ts";

const shadow = document.getElementById( 'shadow' ) as HTMLDivElement;
const gameOVer = document.getElementById( 'game-over' ) as HTMLHeadingElement;

export default class Bird {
    public topMargin: number;

    public readonly right: number;

    public control: Jump;
    private pillar: Pillar;
    public over: boolean;

    private birb: HTMLDivElement;
    private readonly height: number;
    private readonly half: number;

    constructor( top: number, id: string ) {
        this.topMargin = top;
        this.birb = document.getElementById( id ) as HTMLDivElement;
        this.height = this.birb.offsetHeight;
        this.half = this.height / 2;

        this.right = this.birb.getBoundingClientRect().right;

        this.over = false;

        this.control = new Jump();
        this.pillar = new Pillar( 350 );
    }

    protected topCollision(): boolean {
        return this.topMargin <= this.half;
    }

    protected bottomCollision(): boolean {
        if ( this.topMargin >= ( screen.availHeight - this.height ) ) {
            this.gameOver();
            return true;
        } else {
            return false
        }
    }

    protected pillarCollision(): void {
        if ( this.pillar.right <=  350 ) {
            console.log('HEY');
        }
    }

    private gameOver(): void {
        shadow.style.display = 'block';
        shadow.style.visibility = 'visible';

        gameOVer.style.display = 'block';
        gameOVer.style.visibility = 'visible';

        this.over = true;
    }

    public update(): void {
        this.pillarCollision();
        if ( !this.over ) {
            if ( this.control.isJumping ) {
                this.topMargin -= !this.topCollision()? 14 : 0;
            } else {
                this.topMargin += !this.bottomCollision()? 7 : 0;
            }
        }
    }
}