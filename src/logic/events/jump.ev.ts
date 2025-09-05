export default class Jump {
    public isJumping: boolean;
    constructor() {
        this.isJumping = false;

        this.jumpListener();
    }

    private jumpListener(): void {
        document.addEventListener( 'keydown', ( ev: KeyboardEvent ): void => {
            this.isJumping = ev.key === ' ' || ev.key === 'Spacebar';
        } );
        document.addEventListener( 'keyup', ( ev: KeyboardEvent ): void => {
            this.isJumping = !( ev.key === ' ' || ev.key === 'Spacebar' );
        } );
    }
}