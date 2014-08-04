var data = {};
extraitems = [];
lists = [];
finalLists = [];
finalData = {};

var path = (window.location.pathname);

// collects data from inital form, saves it to localStorage
// and then creates a data set from that saved info
function firstItem(){
    // var kicker = localStorage.getItem('garlic:localhost'+path+'>form.myform>input.kicker:eq(0)');
    // var headline = localStorage.getItem('garlic:localhost'+path+'>form.myform>input.headline:eq(1)');
    // var body_text = localStorage.getItem('garlic:localhost'+path+'>form.myform>textarea.body_text');
    // var img_url = localStorage.getItem('garlic:localhost'+path+'>form.myform>input.img_url:eq(2)');
    // var img_caption = localStorage.getItem('garlic:localhost'+path+'>form.myform>input.img_caption:eq(3)');
    // var img_credit = localStorage.getItem('garlic:localhost'+path+'>form.myform>input.img_credit:eq(4)');

    var kicker = localStorage.getItem('garlic:colleenmcenaney.com'+path+'>form.myform>input.kicker:eq(0)');
    var headline = localStorage.getItem('garlic:colleenmcenaney.com'+path+'>form.myform>input.headline:eq(1)');
    var body_text = localStorage.getItem('garlic:colleenmcenaney.com'+path+'>form.myform>textarea.body_text');
    var img_url = localStorage.getItem('garlic:colleenmcenaney.com'+path+'>form.myform>input.img_url:eq(2)');
    var img_caption = localStorage.getItem('garlic:colleenmcenaney.com'+path+'>form.myform>input.img_caption:eq(3)');
    var img_credit = localStorage.getItem('garlic:colleenmcenaney.com'+path+'>form.myform>input.img_credit:eq(4)');

    data = {  
        kicker:kicker,
        headline: headline,
        body_text: body_text,
        img_url: img_url,
        img_caption: img_caption,
        img_credit: img_credit
    }; 
}

num = 0;
// saves extra form data in localStorage and creates the data object from that info
function saveForm(){
    num++;
    // var kicker2 = localStorage.getItem('garlic:localhost'+path+'>form.myform:eq('+num+')>input.kicker:eq(0)');
    // var headline2 = localStorage.getItem('garlic:localhost'+path+'>form.myform:eq('+num+')>input.headline:eq(1)');
    // var body_text2 = localStorage.getItem('garlic:localhost'+path+'>form.myform:eq('+num+')>textarea.body_text');
    // var img_url2 = localStorage.getItem('garlic:localhost'+path+'>form.myform:eq('+num+')>input.img_url:eq(2)');
    // var img_caption2 = localStorage.getItem('garlic:localhost'+path+'>form.myform:eq('+num+')>input.img_caption:eq(3)');
    // var img_credit2 = localStorage.getItem('garlic:localhost'+path+'>form.myform:eq('+num+')>input.img_credit:eq(4)');

    var kicker2 = localStorage.getItem('garlic:colleenmcenaney.com'+path+'>form.myform:eq('+num+')>input.kicker:eq(0)');
    var headline2 = localStorage.getItem('garlic:colleenmcenaney.com'+path+'>form.myform:eq('+num+')>input.headline:eq(1)');
    var body_text2 = localStorage.getItem('garlic:colleenmcenaney.com'+path+'>form.myform:eq('+num+')>textarea.body_text');
    var img_url2 = localStorage.getItem('garlic:colleenmcenaney.com'+path+'>form.myform:eq('+num+')>input.img_url:eq(2)');
    var img_caption2 = localStorage.getItem('garlic:colleenmcenaney.com'+path+'>form.myform:eq('+num+')>input.img_caption:eq(3)');
    var img_credit2 = localStorage.getItem('garlic:colleenmcenaney.com'+path+'>form.myform:eq('+num+')>input.img_credit:eq(4)');
       
    extraitems.push(kicker2);
    extraitems.push(headline2);
    extraitems.push(body_text2);
    extraitems.push(img_url2);
    extraitems.push(img_caption2);
    extraitems.push(img_credit2);

    $.each(extraitems, function( index, value ) {
        extradata = {
            kicker:kicker2,
            headline: headline2,
            body_text: body_text2,
            img_url: img_url2,
            img_caption: img_caption2,
            img_credit: img_credit2,
        };      
    });

    finalLists.push(extradata);
    finalData["lists"] = finalLists;
    localStorage.setItem('finalData', JSON.stringify(finalData));
}

// create new form when button is clicked
function addNew() { 
    $( ".form_section" ).append(
        '<form class="input_form" name="myform"  action="" method="GET">'
            +'<p><h6>kicker</h6> <input TYPE="text" name="kicker"  class="kicker_form_box form-control"></p>'
            +'<p><h6>headline</h6> <input TYPE="text" name="headline" class="headline_form_box form-control"></p>'
            +'<p><h6>body text</h6><textarea type="text" col="20" row="40" class="form-control" name="body_text" class="body_form_box form-control"></textarea></p>'
            +'<p><h6>image url</h6> <input TYPE="text" name="img_url" class="img_form_box form-control"></p>'
            +'<p><h6>image caption</h6> <input TYPE="text" name="img_caption"  class="imgcaption_form_box form-control"></p>'
            +'<p><h6>image credit</h6> <input TYPE="text" name="img_credit"  class="imgcredit_form_box form-control"></p>'
            +'<INPUT type="button" name="button" value="Add New Item" class="btn btn-warning" onClick="addNew()">'
          +'</form>'
    );
    $( 'form' ).garlic();   
}

// creates data set and pushes it to local storage when export button is clicked
function inlineExport(){
    $("#code_output").empty();
    firstItem();
    finalLists.push(data);
    // counts how many times to save the form data based on number of forms
    var fireSave = ($('form').length) - 2;
    for (i = 0; i <= fireSave; i++) { 
        saveForm();
    }
    var retrievedData = localStorage.getItem('finalData');
    var parsedData = JSON.parse(retrievedData);
    var source   = $("#some-template").html();
    // writes to handlebars template
    var template = Handlebars.compile(source);
    $("#content").html(template(parsedData));
    $('#code_output').prepend(  
        '&lt;style&gt;/* inline */.list-item{margin:0 0 1em;border-top:1px solid #f1f1f1;padding-top:1em}.list-images{height:100%;float:right;margin-left:15px;max-width:135px}.list-wrapper{margin:15px 0 0}.list-images img{max-width:135px}.list-kicker{font-size:9px;line-height:10px;letter-spacing:3px;font-weight:500;font-family:nyt-franklin,arial,helvetica,sans-serif;margin:0 0 8px;text-transform:uppercase}.list-headline{margin:0 0 5px;font-size:18px;font-weight:700;font-family:nyt-cheltenham,georgia,"times new roman",times,serif}.list-headline:empty,.list-kicker:empty{display:none}.list-body{max-width:275px;font-family:nyt-franklin,arial,helvetica,sans-serif;font-size:13px;line-height:17px;color:#333}.credit{margin:0 0 15px}&lt;/style&gt;'       
    );
}

// creates data set and pushes it to local storage when export button is clicked
function fullExport() {
    $("#code_output").empty();
    firstItem();
    finalLists.push(data);
    // counts how many times to save the form data based on number of forms
    var fireSave = ($('form').length) - 2 ;
    for (i = 0; i <= fireSave; i++) { 
        saveForm();
    }
    var retrievedData = localStorage.getItem('finalData');
    var parsedData = JSON.parse(retrievedData);
    var source   = $("#some-template").html();
    // writes to handlebars template 
    var template = Handlebars.compile(source);
    $("#content").html(template(parsedData));
    $('#code_output').prepend( 
        '&lt;style&gt;/* full and embed */.interactive{border-top:0!important;border-bottom:0!important}.interactive.layout-sub-medium{width:540px;margin-left:133px!important}.viewport-small .interactive.layout-sub-medium{margin-left:10px!important;width:300px}.viewport-small-10 .interactive.layout-sub-medium{margin-left:10px!important;width:400px}.viewport-small-20 .interactive.layout-sub-medium{margin-left:0!important;width:540px}.viewport-medium .interactive.layout-sub-medium{margin:0 0 0 105px!important;width:540px}.viewport-large .interactive.layout-sub-medium{margin-left:133px!important;width:540px}.list-item{margin:0 0 50px}.list-images{margin-right:5%;height:100%;float:left;width:45%}.viewport-medium .list-images,.viewport-small .list-images{width:100%;float:none;margin:0 0 20px}.viewport-large .list-images,.viewport-medium-10 .list-images,.viewport-medium-20 .list-images,.viewport-medium-31 .list-images{margin-right:5%;height:100%;float:left;width:45%}.list-wrapper{margin:20px 0 0;display:inline-block}.viewport-medium .list-wrapper{width:100%;margin:10px 0}.viewport-large .list-wrapper{margin:20px 0 0;display:inline-block}.list-content{width:50%;float:left}.viewport-small .list-content,.viewport-small-10 .list-content{width:100%}.viewport-small-20 .list-content{width:100%;float:none;margin-left:0}.viewport-medium .list-content{width:100%;float:none}.viewport-large .list-content,.viewport-medium-10 .list-content{width:50%;float:left}.list-line{margin:0 0 30px;background-color:#000;height:1px}.viewport-small .list-line{display:none}.viewport-medium-10 .list-line{display:block}.viewport-large .list-line{margin:0 0 30px;background-color:#000;height:1px;display:block}.list-images img{width:100%}.list-kicker{font-size:11px;line-height:13px;letter-spacing:3px;font-weight:500;font-family:nyt-franklin,arial,helvetica,sans-serif;margin:0 0 8px;text-transform:uppercase}.list-headline{margin:0 0 12px;font-size:25px;font-weight:700;font-family:nyt-cheltenham,georgia,"times new roman",times,serif}.list-body{font-size:16px;line-height:23px;font-family:georgia,"times new roman",times,serif}.list-clear{clear:left}&lt;/style&gt;'
   );
}

function clearLocal(){
    localStorage.clear();
    location.reload();
}








