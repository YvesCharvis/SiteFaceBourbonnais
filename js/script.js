//SLIDE PRESSE //
$(document).ready(function(){
    $("#logoHamburger").click(function(){
        $(".presse").toggle("slow");
    });
});

$('#une1').hover(function(){
    $(this).fadeTo('slow', 0.70);
  },function(){
    $(this).fadeTo('slow', 1);
});
$('#une3').hover(function(){
    $(this).fadeTo('slow', 0.70);
  },function(){
    $(this).fadeTo('slow', 1);
});
$('#une2').hover(function(){
    $(this).stop().fadeTo('slow', 0.70);
  },function(){
    $(this).stop().fadeTo('slow', 1);
});