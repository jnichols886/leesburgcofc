$(function(){

    $(window).on('hashchange', function(evt){
        showByHash( );
    });



    showByHash();

    function showByHash () {
        let hash = location.hash.replace( /^#/, '' );
        if (hash) {
            showDiv(hash+"_div");
            document.getElementById(hash+"_div").scrollIntoView();
        } else {
            showDiv("main_div");
        }
    }



    function showDiv(theDiv) {
        // console.log(theDiv);
        $("#main_div").hide();
        $("#expect_div").hide();
        $("#leadership_div").hide();
        $("#map_div").hide();
        $("#contact_div").hide();
        $("#submit_div").hide();
        $("#thanks_div").hide();
        $("#believe_div").hide();
        $("#homeless_div").hide();
        $("#missions_div").hide();
        $("#" + theDiv).show();
    }

    /*
    * <div class="container-fluid" id="expect_div"><h3>expect</h3></div>
<div class="container-fluid" id="map_div"><h3>map</h3>map</div>
<div class="container-fluid" id="contact_div"><h3>contact</h3>contact</div>
<div class="container-fluid" id="submit_div"><h3>submit</h3>submit</div>
<div class="container-fluid" id="thanks_div"><h3>thanks</h3>Thanks</div>
    *  */
});

  