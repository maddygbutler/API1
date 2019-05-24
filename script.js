$(document).ready(function(){

    $("#search").click(function(){
        var word= $("#word").val();

        $.ajax({
            url:"https://api.urbandictionary.com/v0/define?term="+ word,
            dataType: "jsonp",
            success: callBack,
        })
    });

    function callBack(data){
        $("#final").empty();
        $("#final").append("Word is: " + $("#word").val());
        var str= "  See the full Urban Dictionary definition";
        var link= str.link("https://www.urbandictionary.com/define.php?term=" + $("#word").val());
        $("#final").append(link);


        console.log(data);
        var table = "<table id='table'>";


        for(var i=0; i<3; i++){


            var definition= data.list[i].definition;
            var example= data.list[i].example;
            var thumbsUp= data.list[i].thumbs_up;
            var thumbsDown= data.list[i].thumbs_down;

            table += "<tr>";
            table += "<td>" + "Definition: "+definition + "<br><br></td>";
            table += "</tr>";

            table += "<tr>";
            table += "<td>" + "Example: "+example + "<br><br></td>";
            table += "</tr>";

            table += "<tr>";
            table += "<td>" +  "Thumbs Up: "+thumbsUp + "</td>";
            table += "</tr>";

            table += "<tr>";
            table += "<td>" + "Thumbs Down: "+ thumbsDown+"<br><br><br><br></td>";
            table += "</tr>";



        }
        table += "</table>";


        $("#final").append(table);

    }

});
