num = 0;
data2 = {};
new_items = [];
data3 = {};

lists = [];





function newItem(form){



    num++;
    var kicker = form.kicker.value;
    var headline = form.headline.value;
    var body_text = form.body_text.value;
    var img_url = form.img_url.value;
    var img_caption = form.img_caption.value;
    var img_credit = form.img_credit.value;

    

   

    new_items.push(kicker);
    new_items.push(headline);
    new_items.push(body_text);
    new_items.push(img_url);
    new_items.push(img_caption);
    new_items.push(img_credit);

    $.each(new_items, function( index, value ) {
        data2 = {
            kicker:kicker,
            headline: headline,
            body_text: body_text,
            img_url: img_url,
            img_caption: img_caption,
            img_credit: img_credit
        }; 
    });

    lists.push(data2);
   
    data3["lists"] = lists;
    //console.log(data3);  

     


}




function addNew(){
     $('.form_section').append(
        '<form name="myform" action="" method="GET">'
            +'<p><h6>kicker</h6> <input TYPE="text" name="kicker" value="" class="kicker_form_box form-control"></p>'
            +'<p><h6>headline</h6> <input TYPE="text" name="headline" value="" class="headline_form_box form-control"></p>'
            +'<p><h6>body text</h6> <input type="text" name="body_text" value="" class="body_form_box form-control"></p>'
            +'<p><h6>image url</h6> <input TYPE="text" name="img_url" value="" class="img_form_box form-control"></p>'
            +'<p><h6>image caption</h6> <input TYPE="text" name="img_caption" value="" class="form-control"></p>'
            +'<p><h6>image credit</h6> <input TYPE="text" name="img_credit" value="" class="imgcredit_form_box form-control"></p>'
            +'<INPUT type="button" name="button" value="Save This Item" id="loading-btn" class="btn btn-success" data-loading-text="Save..." onClick="newItem(this.form)">'
            +'<INPUT type="button" name="button" value="Add New Item" class="btn btn-warning" onClick="addNew()">'
        +'</form>'    
    );



}

function testResults() { 

    var source   = $("#some-template").html();
    var template = Handlebars.compile(source);
    $("#content").html(template(data3));
    


  
    
   


   

    //console.log(data);

}



  $('#loading-btn')
    .click(function () {
        var btn = $(this)
        btn.button('loading')
        setTimeout(function () {
            btn.button('reset')
        }, 1000)
    });














