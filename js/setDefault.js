$(document).ready(function(){

		$.ajax({
			
			url: 'http://openexchangerates.org/api/latest.json?app_id=a422b4728ab34b37aec21ed0aa93d192',
			data: 'jsonp',
			success: function(data){
				
				var object = data.rates;	
		
				
				$.each(object, function(index, value)
				{
					$('select[class="A"] , select[class="B"]').append('<option value="'+value+'" name="'+index+'">'+index+'</option>');

					if( index == 'USD' )
					{
						$('select[class="A"] option').prop('selected',true);
						$('input[name="currencyA"]').val('1');
						//$('#checkboxes').append('<label>'+index+'<input type="checkbox" name="'+index+'" value="'+value+'"/></label>');
					}
					else if( index == 'EUR' )
					{
						$('select[class="B"] option').prop('selected',true);
						$('input[name="currencyB"]').val( $('select[class="B"] option:selected').val() );
						//$('#checkboxes').append('<label>'+index+'<input type="checkbox" name="'+index+'" value="'+value+'"/></label>');
					}
					/*
					else if( index == 'GBP' )
					{
						$('#checkboxes').append('<label>'+index+'<input type="checkbox" name="'+index+'" value="'+value+'"/></label>');
					}
					else if( index == 'CHF' )
					{
						$('#checkboxes').append('<label>'+index+'<input type="checkbox" name="'+index+'" value="'+value+'"/></label>');
					}
					else if( index == 'AUD' )
					{
						$('#checkboxes').append('<label>'+index+'<input type="checkbox" name="'+index+'" value="'+value+'"/></label>');	
					}					
					else if( index == 'CAD' )
					{
						$('#checkboxes').append('<label>'+index+'<input type="checkbox" name="'+index+'" value="'+value+'"/></label>');	
					}					
					else if( index == 'AED' )
					{
						$('#checkboxes').append('<label>'+index+'<input type="checkbox" name="'+index+'" value="'+value+'"/></label>');	
					}					
					else if( index == 'DKK' )
					{
						$('#checkboxes').append('<label>'+index+'<input type="checkbox" name="'+index+'" value="'+value+'"/></label>');	
					}					
					*/
				});
			}
			
		});	

});