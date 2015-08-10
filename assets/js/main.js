(function ($) {

    // Define document and body as var
    // Recommended to use this kind of declaration for regular vars and jquery associated $vars
    var $doc = $(document);
    var $body = $(document.body);

    // Define log function
    var _log = function(output) {
        // Easy disable console logging
        var debug = true;
        // If browser does not support console.log this wont be executed
        if(debug && console && console.log) {
            console.log(output);
        }
    }

    // Document ready function
    $doc.ready(function () {
        // Add class 'load' as soon as possible
        $body.addClass('load');
        // After images loaded or broken remove the 'load' class
        $body.imagesLoaded().always(function () {
            $body.removeClass('load');
            _log('Images loaded.');
        });
    });

})(jQuery);
