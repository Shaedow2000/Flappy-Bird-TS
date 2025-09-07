export default class Pillar {
    public gap: number;
    public pillar: HTMLDivElement;
    public hole: HTMLDivElement;
    public right: number;
    public top: number;
    public bottom: number;

    public over: boolean;

    constructor( gap: number ) {
        this.gap = gap;
        this.pillar = document.getElementById( 'pillar' ) as HTMLDivElement
        this.hole = document.getElementById( 'hole' ) as HTMLDivElement;
        this.right = 0;
        this.top = 0;
        this.bottom = 0;


        this.over = false;

        this.getPillarRightValue();
        this.getPillarTopValue();
        this.getPillarBottomValue();
    }

    public getPillarRightValue: () => void = (): void => {
        this.right = this.hole.getBoundingClientRect().right;
        requestAnimationFrame( this.getPillarRightValue );
    }

    public getPillarTopValue: () => void = (): void => {
        this.top = this.hole.offsetTop;
        requestAnimationFrame( this.getPillarTopValue );
    }

    public getPillarBottomValue: () => void = (): void => {
        this.bottom = screen.height - this.hole.offsetTop - this.hole.offsetHeight;
        requestAnimationFrame( this.getPillarBottomValue );
    }

    private radomTop( min: number, max: number ): number {
        return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
    }

    public randomizeHole(): void {
        this.hole.style.height = `${ this.gap }px`;
        this.hole.style.top = `${ this.radomTop( 0, 700 ) }px`;
    }

    public stopPillars(): void {
        this.pillar.classList.remove( 'animate-pillar' );
        this.pillar.style.left = `-${ this.right }px`;
        console.log('LEFt', this.right);
        this.over = true
    }
}