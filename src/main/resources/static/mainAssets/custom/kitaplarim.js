$(document).ready(function() {

    $('#kitapTBL').DataTable({
    
   // responsive: true,
	//searchDelay: 500,
	//processing: true,
	//serverSide: true,
			
	//ajax: {
	//	url: 'tumKitaplar',
	//	contentType: 'application/json; charset=UTF-8',
	//	type: 'POST', 
	//},
			
	//columns: [
	//	{ data: 'kitapId' },
	//	{ data: 'kitapAdi' },
	//	{ data: 'kitapYazari' },
	//	{ data: function(data) {
	//		return '\
	//			<a href="javascript:kitapGuncelle('+ data.kitapId + ');" class="btn btn-sm btn-info btn-icon" title="Güncelle">\
	//			<i class="la la-cart-plus"></i>\
	//			</a>\
	//			<a href="javascript:kitapSilSwal('+ data.kitapId + ');" class="btn btn-sm btn-danger btn-icon" title="Sil">\
	//			<i class="la la-remove"></i>\
	//			</a>\
	//		';
	//		},
	//	},
	//],
			
	//columnDefs: [
	//
	//	{ targets: 4,
	//	  orderable: false },
	//]
});
});


function yeniKitapEkle() {

	$('#ordersModal').modal('show');
	$("#gncll_button").hide();
	$("#kydt_button").show();
}

function kitapEkle() {

	var param = {
		kitapAdi: $("#kitapAdi").val(),
		kitapYazari: $("#kitapYazari").val(),
		durum: $("#durum").val()
	}


	if (param.kitapAdi < 1) {
		toastr.warning('kitapAdi giriniz !<br>');
	}
	if (param.kitapYazari < 1) {
		toastr.warning('kitapYazari giriniz !<br>');
	}
	if (param.durum < 1) {
		toastr.warning('durum giriniz !<br>');
	}

	if (param != null) {

		var ser_data = JSON.stringify(param);

		$.ajax({
			type: "POST",
			contentType: 'application/json; charset=UTF-8',
			url: 'kitapEkle',
			data: ser_data,
			success: function(data) {
				toastr.success("Kayıt başarılı !");


				$('#kitapTBL').DataTable().ajax.reload();
			},
			error: function(data) {
				toastr.error("Bir hata oluştu, lütfen daha sonra tekrar deneyiniz...", data);
			}
		});

	}
	else {
		toastr.error("Bir hata oluştu, lütfen daha sonra tekrar deneyiniz...", data);
	}
}



var secilenID = 0;
function kitapIdGetir(kitapId) {

	$('#exampleModal').modal('show');
	$('#kitapId').val(kitapId);
	var param = {
		kitapId: kitapId,

	};

	var ser_data = JSON.stringify(param);
	$.ajax({
		type: "GET",
		contentType: 'application/json; charset=UTF-8',
		url: 'getKitap/' + kitapId,
		success: function(data) {
			console.log(secilenID);
			secilenID = data.kitapId;

			$("#gncll_button").show();
			$("#kydt_button").hide();

		},

		error: function(data2) {
			toastr.error('error', data2.responseText);
		}
	});
}





var secilenId = 0;
function kitapSilSwal(pid) {

	secilenId = pid;
	console.log(pid);
	
	Swal.fire({
  title: 'Emin misiniz?',
  text: "Bu kitabı silmek istediğinize emin misiniz?",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Evet Sil',
  cancelButtonText: 'Hayır Silme',
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'Silindi!',
      'Kitap Listeden Silindi',
      'success'
    )
  }
})
	
}


function kitapSil() {


	var param = {
		kitapId: secilenId,
	}
	

	if(param.status !=null) {
		var ser_data = JSON.stringify(param);
		$.ajax({
			type: "POST",
			contentType: 'application/json; charset=UTF-8',
			url: 'kitapSil',
			data: ser_data,
			success: function(data) {

				$('#kitapTBL').DataTable().ajax.reload();

				toastr.success("silme başarılı !");
			},
			error: function(data) {
				toastr.error("Bir hata oluştu, lütfen daha sonra tekrar deneyiniz...", data);
			}
		});
	} else {
		toastr.error("Bir hata oluştu, lütfen daha sonra tekrar deneyiniz...");
	}
}
