$('body').on('change', 'select.single-option-selector', function() {
    if($('select.single-option-selector').val() == "{{ product.variants[1].title }}") {
     $("#eco-bal").css("display","block");
     $("#eco-note").css("display","block");
     $("#myModal").css("display","block");
     $(".balancespan").text('{{ product.variants[0].price | minus: product.variants[1].price | money | json }}'); 
    }
    else if ($('select.single-option-selector').val() == "{{ product.variants[4].title }}") {
     $("#eco-bal").css("display","block");
     $("#eco-note").css("display","block");
     $("#myModal").css("display","block");
     $(".balancespan").text('{{ product.variants[3].price | minus: product.variants[4].price | money | json }}');  
    }
    else if ($('select.single-option-selector').val() == "{{ product.variants[7].title }}") {
     $("#eco-bal").css("display","block");
     $("#eco-note").css("display","block");
     $("#myModal").css("display","block");
     $(".balancespan").text('{{ product.variants[6].price | minus: product.variants[7].price | money | json }}');  
    }
    else if ($('select.single-option-selector').val() == "{{ product.variants[10].title }}") {
     $("#eco-bal").css("display","block");
     $("#eco-note").css("display","block");
     $("#myModal").css("display","block");
     $(".balancespan").text('{{ product.variants[9].price | minus: product.variants[10].price | money | json }}');  
    }
    else if ($('select.single-option-selector').val() == "{{ product.variants[13].title }}") {
     $("#eco-bal").css("display","block");
     $("#eco-note").css("display","block");
     $("#myModal").css("display","block");
     $(".balancespan").text('{{ product.variants[12].price | minus: product.variants[13].price | money | json }}');  
    }
    else if ($('select.single-option-selector').val() == "{{ product.variants[16].title }}") {
     $("#eco-bal").css("display","block");
     $("#eco-note").css("display","block");
     $("#myModal").css("display","block");
     $(".balancespan").text('{{ product.variants[15].price | minus: product.variants[16].price | money | json }}');  
    }
    else if ($('select.single-option-selector').val() == "{{ product.variants[19].title }}") {
     $("#eco-bal").css("display","block");
     $("#eco-note").css("display","block");
     $("#myModal").css("display","block");
     $(".balancespan").text('{{ product.variants[18].price | minus: product.variants[19].price | money | json }}');  
    }
    else if ($('select.single-option-selector').val() == "{{ product.variants[22].title }}") {
     $("#eco-bal").css("display","block");
     $("#eco-note").css("display","block");
     $("#myModal").css("display","block");
     $(".balancespan").text('{{ product.variants[21].price | minus: product.variants[22].price | money | json }}');  
    }
    else if ($('select.single-option-selector').val() == "{{ product.variants[25].title }}") {
     $("#eco-bal").css("display","block");
     $("#eco-note").css("display","block");
     $("#myModal").css("display","block");
     $(".balancespan").text('{{ product.variants[24].price | minus: product.variants[25].price | money | json }}');  
    }
    else if ($('select.single-option-selector').val() == "{{ product.variants[28].title }}") {
     $("#eco-bal").css("display","block");
     $("#eco-note").css("display","block");
     $("#myModal").css("display","block");
     $(".balancespan").text('{{ product.variants[27].price | minus: product.variants[28].price | money | json }}');  
    }
    else if ($('select.single-option-selector').val() == "{{ product.variants[31].title }}") {
     $("#eco-bal").css("display","block");
     $("#eco-note").css("display","block");
     $("#myModal").css("display","block");
     $(".balancespan").text('{{ product.variants[30].price | minus: product.variants[31].price | money | json }}');  
    }
    else if ($('select.single-option-selector').val() == "{{ product.variants[34].title }}") {
     $("#eco-bal").css("display","block");
     $("#eco-note").css("display","block");
     $("#myModal").css("display","block");
     $(".balancespan").text('{{ product.variants[33].price | minus: product.variants[34].price | money | json }}');  
    }
    else if ($('select.single-option-selector').val() == "{{ product.variants[37].title }}") {
     $("#eco-bal").css("display","block");
     $("#eco-note").css("display","block");
     $("#myModal").css("display","block");
     $(".balancespan").text('{{ product.variants[36].price | minus: product.variants[37].price | money | json }}');  
    }
    else if ($('select.single-option-selector').val() == "{{ product.variants[40].title }}") {
     $("#eco-bal").css("display","block");
     $("#eco-note").css("display","block");
     $("#myModal").css("display","block");
     $(".balancespan").text('{{ product.variants[39].price | minus: product.variants[40].price | money | json }}');  
    }
    else if ($('select.single-option-selector').val() == "{{ product.variants[43].title }}") {
     $("#eco-bal").css("display","block");
     $("#eco-note").css("display","block");
     $("#myModal").css("display","block");
     $(".balancespan").text('{{ product.variants[42].price | minus: product.variants[43].price | money | json }}');  
    }
    else if ($('select.single-option-selector').val() == "{{ product.variants[46].title }}") {
     $("#eco-bal").css("display","block");
     $("#eco-note").css("display","block");
     $("#myModal").css("display","block");
     $(".balancespan").text('{{ product.variants[45].price | minus: product.variants[46].price | money | json }}');  
    }
    else if ($('select.single-option-selector').val() == "{{ product.variants[49].title }}") {
     $("#eco-bal").css("display","block");
     $("#eco-note").css("display","block");
     $("#myModal").css("display","block");
     $(".balancespan").text('{{ product.variants[48].price | minus: product.variants[49].price | money | json }}');  
    }
    else if ($('select.single-option-selector').val() == "{{ product.variants[52].title }}") {
     $("#eco-bal").css("display","block");
     $("#eco-note").css("display","block");
     $("#myModal").css("display","block");
     $(".balancespan").text('{{ product.variants[51].price | minus: product.variants[52].price | money | json }}');  
    }
    else if ($('select.single-option-selector').val() == "{{ product.variants[55].title }}") {
     $("#eco-bal").css("display","block");
     $("#eco-note").css("display","block");
     $("#myModal").css("display","block");
     $(".balancespan").text('{{ product.variants[54].price | minus: product.variants[55].price | money | json }}');  
    }
  });