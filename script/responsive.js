$(function() {             
    $("li[data-control='toggle']").click(function() {
        if($(this).attr("class") == "active open")
          $(this).attr("class", "active");
        else if($(this).attr("class") == "active")
          $(this).attr("class", "active open");
        else if($(this).attr("class") == "open")
          $(this).attr("class", " ");
        else
          $(this).attr("class", "open");
    });
})
// toggle left-menu
$(function() {
      $(".toggler").first().click(function() {
              if($(window).width() < 967) {
                   $(".toggled").first().toggle(0);
                  if($("[data-control='toggle']").first().attr("class") == "wa-navigationLeft")
                    $("[data-control='toggle']").first().attr("class", "wa-navigationLeft open");
                  else
                    $("[data-control='toggle']").first().attr("class", "wa-navigationLeft");
              }
                
      }); 
})

// reshow left-menu
$(window).resize(function() {
    if ($(window).width() >= 968) {
        $(".toggled").attr('style', function(i, style){
            return style.replace(/display[^;]+;?/g, '');
        });
    };
});