


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

    

    $('.form_section').append(
        '<form name="myform" action="" method="GET">' +
            '<p>kicker <input TYPE="text" name="kicker" value="" class="kicker_form_box"></p>' +
            '<p>headline <input TYPE="text" name="headline" value="" class="headline_form_box"></p>' +
            '<p>body text <input type="text" name="body_text" value="" class="body_form_box"></p>' +
            '<p>image url <input TYPE="text" name="img_url" value="" class="img_form_box"></p>' +
            '<p>image caption <input TYPE="text" name="img_caption" value=""></p>' +
            '<p>image credit <input TYPE="text" name="img_credit" value="" class="imgcredit_form_box"></p>' +
            '<INPUT type="button" name="button" value="Add Item" onClick="newItem(this.form)">' +
            '<INPUT type="button" name="button" value="Submit" onClick="testResults(this.form)">' +
        '</form>'          
    );


    new_items.push(kicker);
    new_items.push(headline);
    new_items.push(body_text);
    new_items.push(img_url);
    new_items.push(img_caption);
    new_items.push(img_credit);

    // console.log(new_items);

   

    // var lab =["1","2","3"];
    // var val = [42,55,51,22];
    // var data = [];
    // for(var i=0; i<num; i++)  {
    //     data2.push({kicker: new_items[i], headline: headline});
    // }
  



    $.each(new_items, function( index, value ) {
       


    //      var data = { 
    //     lists: [{
    //         kicker: kicker,
    //         headline: headline, 
    //         body_text: body_text,
    //         img_url: img_url, 
    //         img_caption: img_caption, 
    //         img_credit: img_credit
    //     }]
    // };
        
        
        
        //console.log(index,value);
        data2 = {
            kicker:kicker,
            headline: headline,
            body_text: body_text,
            img_url: img_url,
            img_caption: img_caption,
            img_credit: img_credit
        };
        
       // var a = new_items;
       //  while(a.length) {
       //      console.log(a.splice(0,6));
       //      data2["lists"] = [{headline:'text', value: headline}];
       //  }

        
        
    });



    //data2.push(new_items);
    // console.log(new_items);
    
    //console.log(data2);
    
    //console.log(lists);

    lists.push(data2);

    //console.log(lists);

    data3["lists"] = lists;
    //console.log(data3);

   


}




function testResults (form) {
    // var kicker = form.kicker.value;
    // var headline = form.headline.value;
    // var body_text = form.body_text.value;
    // var img_url = form.img_url.value;
    // var img_caption = form.img_caption.value;
    // var img_credit = form.img_credit.value;
    
    // var data = { 
    //     lists: [{
    //         kicker: kicker,
    //         headline: headline, 
    //         body_text: body_text,
    //         img_url: img_url, 
    //         img_caption: img_caption, 
    //         img_credit: img_credit
    //     }]
    // };

    //console.log(data);
    //console.log(data3);
   
    var source   = $("#some-template").html();
    var template = Handlebars.compile(source);
   
    $("#content").html(template(data3));


}







