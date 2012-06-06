function g_i(){
	$.ajax({
 	 	type: "POST",
  		url: "g_i.php",
  		data: { name: "John", location: "Boston" }
	}).done(function( html ) {
		document.getElementById("iff").style.display="none";
  		$("#content").html( html );
	});
}

function j_t(){
	$.ajax({
 	 	type: "POST",
  		url: "j_t.php",
  		data: { name: "John", location: "Boston" }
	}).done(function( html ) {
		document.getElementById("iff").style.display="none";
  		$("#content").html( html );
  		$('.flexme1').flexigrid({height: 400, width: 360});
	});
}

function j_e(id){
	$.ajax({
 	 	type: "POST",
  		url: "j_t_e.php",
  		data: { id: id, location: "Boston" }
	}).done(function( html ) {
		document.getElementById("iff").style.display="none";
  		$("#content").html( html );
  	});
}
var foto_dir='';
var resume_dir='';
function add_candidate(){
	var unico = uniqid();
	var unico2 = uniqid();
	$.ajax({
 	 	type: "POST",
  		url: "candidate_add.php",
  		data: { name: "Juan", location: "Boston" }
	}).done(function( html ) {
		document.getElementById("iff").style.display="none";
  		$("#content").html( html );
		var uploader = new qq.FileUploader({
                element: document.getElementById('file-uploader-demo1'),
                action: './fuploader.php',
                debug: false,
		onComplete: function(id, fileName, responseJSON){	
			foto_dir= unico + fileName;	
		},
		params: {
        		param1: unico
        	}
            	});
		var uploader2 = new qq.FileUploader({
                element: document.getElementById('file-uploader-demo2'),
                action: './fuploader.php',
                debug: false,
		onComplete: function(id, fileName, responseJSON){
			resume_dir= unico2 + fileName;
		},
		params: {
        		param1: unico2
        	}
            	});       
  	});
}

function save_candidate(){
$.ajax({
		type: "POST",
  		url: "candidate_s.php",
  		data: { fname: le_replace(document.getElementById("fname").value),
  				lname: le_replace(document.getElementById("lname").value),
  				phone: le_replace(document.getElementById("phone").value),
  				email: le_replace(document.getElementById("email").value),
  				twitter: le_replace(document.getElementById("twitter").value),
  				position: $("#positionee").val(),
				picture: "./uploads/" + foto_dir,
				resume: "./uploads/" + resume_dir  				
  			}
	}).done(function( html ) {
  		$("#content").html( html );
	});	
}

function uniqid(){
    var newDate = new Date;
    return newDate.getTime();
}

function vacancies(){
	$.ajax({
 	 	type: "POST",
  		url: "vacancies.php",
  		data: { name: "Juan", location: "Boston" }
	}).done(function( html ) {
		document.getElementById("iff").style.display="none";
  		$("#content").html( html );
		$('.flexme2').flexigrid({height: 350, width: 600});
		$.getScript('//platform.twitter.com/widgets.js', function(){ twttr.widgets.load();});
  	});
}

function candidates(){
	$.ajax({
 	 	type: "POST",
  		url: "candidates.php",
  		data: { name: "Juan", location: "Boston" }
	}).done(function( html ) {
		document.getElementById("iff").style.display="none";
  		$("#content").html( html );
		$('.flexme3').flexigrid({height: 300, width: 900});
		$(".fancybox").fancybox({
		maxWidth	: 500,
		maxHeight	: 400});
  	});
}

function dismiss_e(id){
$.ajax({
 	 	type: "POST",
  		url: "dismiss_e.php",
  		data: { id: id, location: "Boston" }
	}).done(function( html ) {
		document.getElementById("iff").style.display="none";
  		$("#content").html( html );
  	});
}

function punchio(){
		$("#content").html("");
		document.getElementById("iff").style.display="block";
		document.getElementById("iff").src="punchinout.php"
}

function employees(){
	$.ajax({
 	 	type: "POST",
  		url: "employees.php",
  		data: { name: "Juan", location: "Boston" }
	}).done(function( html ) {
		document.getElementById("iff").style.display="none";
  		$("#content").html( html );
		$('.flexme5').flexigrid({height: 300, width: 900});
		$(".fancybox").fancybox({
		maxWidth	: 500,
		maxHeight	: 400});
  	});
}

function monitoring(){
	$.ajax({
 	 	type: "POST",
  		url: "monitoring.php",
  		data: { name: "Juan", location: "Boston" }
	}).done(function( html ) {
		document.getElementById("iff").style.display="none";
  		$("#content").html( html );
		$('.flexme4').flexigrid({height: 300, width: 900});
  	});
}

function m_s_n(id){
	$.ajax({
 	 	type: "POST",
  		url: "m_s_n.php",
  		data: { id: id, location: "Boston" }
	}).done(function( html ) {
		document.getElementById("iff").style.display="none";
  		$("#content").html( html );
  	});
}

function m_c(id){
	$.ajax({
 	 	type: "POST",
  		url: "m_c.php",
  		data: { id: id, location: "Boston" }
	}).done(function( html ) {
		document.getElementById("iff").style.display="none";
  		$("#content").html( html );
  	});
}

function monitoring_save(){
$.ajax({
		type: "POST",
  		url: "m_c_a_s.php",
  		data: { id: le_replace(document.getElementById("idd").value),
  				note: le_replace(document.getElementById("nnotes").value)
  			  }
	}).done(function( html ) {
  		$("#content").html( html );
	});
}

function monitoring_add(id){
	$.ajax({
 	 	type: "POST",
  		url: "m_c_a.php",
  		data: { id: id, location: "Boston" }
	}).done(function( html ) {
		document.getElementById("iff").style.display="none";
  		$("#content").html( html );
  	});
}

function candidate_e(id,picture,resume){
	var unico = uniqid();
	var unico2 = uniqid();
	foto_dir= picture;	
	resume_dir= resume;
	$.ajax({
 	 	type: "POST",
  		url: "candidate_e.php",
  		data: { id: id, location: "Boston" }
	}).done(function( html ) {
		document.getElementById("iff").style.display="none";
  		$("#content").html( html );
		var uploader = new qq.FileUploader({
                element: document.getElementById('file-uploader-demo1'),
                action: './fuploader.php',
                debug: false,
		onComplete: function(id, fileName, responseJSON){	
			foto_dir= "./uploads/" + unico + fileName;		
		},
		params: {
        		param1: unico
        	}
            	});
		var uploader2 = new qq.FileUploader({
                element: document.getElementById('file-uploader-demo2'),
                action: './fuploader.php',
                debug: false,
		onComplete: function(id, fileName, responseJSON){
			resume_dir= "./uploads/" + unico2 + fileName;
		},
		params: {
        		param1: unico2
        	}
            	});       
  	});
} 

function update_candidate(id){
$.ajax({
		type: "POST",
  		url: "candidate_u.php",
  		data: { fname: le_replace(document.getElementById("fname").value),
  				lname: le_replace(document.getElementById("lname").value),
  				phone: le_replace(document.getElementById("phone").value),
  				email: le_replace(document.getElementById("email").value),
  				twitter: le_replace(document.getElementById("twitter").value),
  				position: $("#positionee").val(),
				picture: foto_dir,
				resume: resume_dir,
				id: id  				
  			}
	}).done(function( html ) {
  		$("#content").html( html );
	});	
}

function structure(){
	$("#content").html("");
	document.getElementById("iff").style.display="block";
	document.getElementById("iff").src="structure.php"
	
}

function le_replace(text){
 return text.replace("'","&#39;").replace('"',"&quot;").replace('á',"&aacute;").replace('é',"&eacute;").replace('í',"&iacute;").replace('ó',"&oacute;").replace('ú',"&uacute;").replace('Á',"&Aacute;").replace('É',"&Eacute;").replace('Í',"&Iacute;").replace('Ó',"&Oacute;").replace('Ú',"&Uacute;").replace('ñ',"&ntilde;").replace('Ñ',"&Ntilde;").replace('¡', "&iexcl;").replace('¿','&iquest;');
}

function save_jt(to_make){
$.ajax({
		type: "POST",
  		url: "j_t_e_s.php",
  		data: { id: le_replace(document.getElementById("s_id").value),
  				description: le_replace(document.getElementById("ddescription").value),
  				note: le_replace(document.getElementById("nnotes").value),
  				action: to_make
  			  }
	}).done(function( html ) {
  		$("#content").html( html );
	});
}
function save_xml(){
$.ajax({
		type: "POST",
  		url: "g_i_s.php",
  		data: { oname: le_replace(document.getElementById("oname").value),
  				phone: le_replace(document.getElementById("phone").value),
  				fax: le_replace(document.getElementById("fax").value),
  				email: le_replace(document.getElementById("email").value),
  				web: le_replace(document.getElementById("web").value),
  				address: le_replace(document.getElementById("address").value),
  				city: le_replace(document.getElementById("city").value),
  				state: le_replace(document.getElementById("state").value),
  				country: le_replace(document.getElementById("country").value),
  				zip: le_replace(document.getElementById("zip").value),
  				notes: le_replace(document.getElementById("notes").value)
  			  }
	}).done(function( html ) {
  		$("#content").html( html );
	});
}
