/* custom js goes here
Name - Jasmeet Kaur
Student # - 301166458
COMP 229 assignment 2
*/

//IIFE - Immediately Invoked Function Expression (AKA an anonymous self-executing function)

(function(){
    $(".btn-danger").click(function(event){

        if(!confirm("Are you sure?")){
            event.preventDefault();
            window.location.assign("/list");
        }
    });
})();