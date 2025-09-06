export default class Jump {
    public isJumping: boolean;
    constructor() {
        this.isJumping = false;

        this.jumpListener();
    }

    private jumpListener(): void {
        document.addEventListener( 'keydown', ( ev: KeyboardEvent ): void => {
            if ( ev.key === ' ' || ev.key === 'Spacebar' ) {
                this.isJumping = ev.key === ' ' || ev.key === 'Spacebar';
            }
        } );
        document.addEventListener( 'keyup', ( ev: KeyboardEvent ): void => {
            if ( ev.key === ' ' || ev.key === 'Spacebar' ) {
                this.isJumping = !( ev.key === ' ' || ev.key === 'Spacebar' );
            }
        } );
    }
}