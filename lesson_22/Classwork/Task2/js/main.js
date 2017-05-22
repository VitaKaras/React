var xhr = new XMLHttpRequest();

// Use JSFiddle logo as a sample image to avoid complicating
// this example with cross-domain issues.
xhr.open( "GET", "http://fiddle.jshell.net/img/logo.png", true );

// Ask for the result as an ArrayBuffer.
xhr.responseType = "arraybuffer";

xhr.onload = function( e ) {
    // Obtain a blob: URL for the image data.
    var arrayBufferView = new Uint8Array( this.response );
    var blob = new Blob( [ arrayBufferView ], { type: "image/jpeg" } );
    var urlCreator = window.URL || window.webkitURL;
    var imageUrl = urlCreator.createObjectURL( blob );
    var img = document.querySelector( "#root" );
    img.src = imageUrl;
};

xhr.send();
