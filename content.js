// make sure we only do this when the spotify window is really tall (like when I'm using vertical monitors)
if ( document.getElementsByTagName( 'body' )[0].clientHeight > 1200 ) {
    var checkPageLoadedYet = setInterval(
        function() {
            // when the playing bar is on the page
            if ( typeof document.getElementsByClassName( 'Root__now-playing-bar' )[0] !== 'undefined' ) {
                console.log( 'Putting extra space under the footer (place where the "now playing" bar is) for ease of viewing on vertical monitors' );
                document.getElementsByClassName( 'Root__now-playing-bar' )[0].children[0].style.marginBottom = '500px';

                clearInterval( checkPageLoadedYet );
            }
        },
        100
    );
}
