export default class Pillar {
    public gap: number;
    public hole: HTMLDivElement;
    public right: number;

    constructor( gap: number ) {
        this.gap = gap;
        this.hole = document.getElementById( 'hole' ) as HTMLDivElement;
        this.right = 0;

        this.getPillarLeftValue();
    }

    public getPillarLeftValue: () => void = (): void => {
        this.right = this.hole.getBoundingClientRect().right;
        requestAnimationFrame( this.getPillarLeftValue );
    }

    private radomTop( min: number, max: number ): number {
        return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
    }

    public randomizeHole(): void {
        this.hole.style.height = `${ this.gap }px`;
        this.hole.style.top = `${ this.radomTop( 0, 700 ) }px`;
    }
}