$(function(){
    var studentname = ["Bopha","Romdul","Chompey","Chompa","Kolap","Krovan","Romchong"];
    
    $(".validate,button").attr('disabled',true);
    
    $('#accept').on('click',function(){
        $(".validate,button").attr('disabled',false);
    });

    $('#btn').on('click',function(){
        var name = $('.validate').val();
        var check = $('#find');
            if(name != ""){
                var result = searchName(studentname,name);
                result ? check.html("find: "+ name) : check.html("Connot find :" + name);
             
            }else{
             check.html(" Please enter somthing");
            }
            $('a').html(" You are agree to search only in good way");

        });
    });
                function searchName(list,name){
                 let i = 0;
                 while(i<list.length){
                     if(list[i].toLowerCase()== name.toLowerCase()){
                        return true;
                     }
                     i++;
                 }
                 return false;
                }