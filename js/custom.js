$(function(){
    
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();


        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top-70
        }, 500);
    });


    var counter = 1;


    $(".add-more").on("click",function(){

        $('<input/>').attr({ type: 'text', id: 'input_'+counter, name: 'input_'+counter,class:"form-control",required:"required"})
        .appendTo('.add-more-container'); 
        $("#input_"+counter).wrap("<div class='form-group'></div>" ); 
        $("#input_"+counter).before("<label> Input "+counter+"</label>"); 
        counter++; 
    });
});



function toggleState()
{

    var obj = document.getElementById("text_read_more");


    if(obj.innerHTML === "Read More")
    {
        obj.innerHTML = "Read Less";
        obj.style.backgroundColor = "#000";
        obj.style.color = "#fff";
    }
    else{
        obj.innerHTML = "Read More";
        obj.style.backgroundColor = "#fff";
        obj.style.color = "#000"; 
    }

    document.querySelector('.read-more .more').classList.toggle("open");
}

