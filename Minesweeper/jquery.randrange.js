(function( $ ){

   
    $.randRange = function( minValue, maxValue ){

        var delta = (maxValue - minValue);


        var randomValue = Math.floor( Math.random() * delta );

        return( minValue + randomValue );
    };

})( jQuery );