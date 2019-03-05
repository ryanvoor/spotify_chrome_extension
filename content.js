// when a slack channel is open
if ( typeof document.getElementsByClassName( 'now-playing-bar-container' )[0] !== 'undefined' ) {
    // make sure we only do this when the spotify window is really tall (like when I'm using vertical monitors)
    if ( document.getElementsByTagName( 'body' )[0].clientHeight > 1200 ) {
        console.log( 'Putting extra space under the footer (place where the "now playing" bar is) for ease of viewing on vertical monitors' );
        document.getElementsByClassName( 'now-playing-bar-container' )[0].style.marginBottom = '500px';
    }
}
