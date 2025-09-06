import Jump from "../events/jump.ev.ts";
import Pillar from "./pillars.ts";

const shadow = document.getElementById( 'shadow' ) as HTMLDivElement;
const gameOVer = document.getElementById( 'game-over' ) as HTMLHeadingElement;

export default class Bird {
    public topMargin: number;
    public bottomMargin: number;

    public readonly right: number;
    public readonly top: number;
    public readonly bottom: number;

    public control: Jump;
    private pillar: Pillar;
    public over: boolean;

    private birb: HTMLDivElement;
    private readonly height: number;
    private readonly half: number;

    constructor( top: number, id: string ) {
        this.topMargin = top;
        this.bottomMargin = 0;

        this.birb = document.getElementById( id ) as HTMLDivElement;
        this.height = this.birb.offsetHeight;
        this.half = this.height / 2;

        this.top = this.birb.getBoundingClientRect().top;
        this.bottom = this.birb.getBoundingClientRect().bottom;

        this.right = this.birb.getBoundingClientRect().right;

        this.over = false;

        this.control = new Jump();
        this.pillar = new Pillar( 350 );

        this.setBottomMargin();
    }

    protected setBottomMargin: () => void = (): void => {
        this.bottomMargin = screen.height - this.topMargin;
        requestAnimationFrame( this.setBottomMargin );
    }

    protected topCollision(): boolean {
        return this.topMargin <= this.half;
    }

    protected bottomCollision(): boolean {
        if ( this.topMargin >= ( screen.availHeight - this.height ) ) {
            this.gameOver();
            return true;
        } else {
            return false;
        }
    }

    protected pillarCollision(): void {
        if ( this.pillar.right <=  350 ) {
            console.log(this.pillar.top > this.topMargin || this.pillar.bottom > this.bottomMargin)
            if ( this.pillar.top >= this.topMargin || this.pillar.bottom >= this.bottomMargin ) {
                this.gameOver();
            }
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