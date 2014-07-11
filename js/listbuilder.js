
function testResults (form) {
	var kicker = form.kicker.value;
    var headline = form.headline.value;
    var body_text = form.body_text.value;
    var img_url = form.img_url.value;
    var img_caption = form.img_caption.value;
    var img_credit = form.img_credit.value;
    

  


	var source   = $("#some-template").html();
	var template = Handlebars.compile(source);
	var data = { 
		lists: [{
			kicker: kicker,
			headline: headline, 
			body_text: body_text,
			img_url: img_url, 
			img_caption: img_caption, 
			img_credit: img_credit
		}]
	};


	$("#content").html(template(data));

}

function newItem(form){


	var kicker = form.kicker.value;
    var headline = form.headline.value;
    var body_text = form.body_text.value;
    var img_url = form.img_url.value;
    var img_caption = form.img_caption.value;
    var img_credit = form.img_credit.value;

    console.log(kicker);
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

	console.log(headline);
    console.log(img_url);
    console.log(body_text);

}



