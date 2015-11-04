/**
 * Created by allenzhang on 11/4/15.
 */

$("a").click( function() {
    var i=[];
    $.getJSON( "json_data.json", function(obj) {
        $.each(obj, function(key, value) {
            i.push(value.balance);
            i.sort(function(a, b){return b-a});

            $("tbody").append("<tr><td>"+value.name+"</td><td>"+value.age+"</td><td>"+value.balance+"</td></tr>");

        });
        alert(i);
    });

});
function myFunction() {
    points.sort(function(a, b){return b-a});
    document.getElementById("demo").innerHTML = points;
}