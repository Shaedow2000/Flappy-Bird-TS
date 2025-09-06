export default class Pillar {
    public gap: number;
    public pillar: HTMLDivElement;
    public hole: HTMLDivElement;

    constructor( gap: number ) {
        this.gap = gap;
        this.pillar = document.getElementById( 'pillar' ) as HTMLDivElement;
        this.hole = document.getElementById( 'hole' ) as HTMLDivElement;
    }

    public drawHole(): void {

    }
}