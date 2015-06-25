var P2PU = window.P2PU || {};


(function($, P2PU){
    'use strict';

    function stepSubmit(form, validate, success, error){
        form.submit(function(e){
            e.preventDefault();
            // Submit using ajax
            if (validate !== undefined){
                if (validate() === false){
                    return;
                }
            }
            $.ajax({
                type: "POST",
                url: form.attr("action"), 
                data: form.serialize(),
            }).error(error).done(success);
        });
    }

    var init = function (){
        stepSubmit($('#signup-form'), undefined, 
        function(data){
            // update hidden input with interest id in other forms
            if (data.error !== undefined) {
            } else {
                // Close singup dialog
                $('#signup-modal').modal('hide');
                // TODO: need to give user feedback of success
            }
        }, 
        function(){
            $('#signup-error').removeClass('hidden');
        });
    }

    P2PU.Signup = {}
    P2PU.Signup.init = init;
    
})(window.jQuery, P2PU);
