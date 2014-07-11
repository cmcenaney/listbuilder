function testResults (form) {
	var kicker = form.kicker.value;
    var headline = form.headline.value;
    var body_text = form.body_text.value;
    var img_url = form.img_url.value;
    var img_caption = form.img_caption.value;
    var img_credit = form.img_credit.value;
    

  
  	console.log(headline);
    console.log(img_url);
    console.log(body_text);

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

