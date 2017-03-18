$(document).ready(function(){

	currencyApp();

	function currencyApp()
	{
					


		// 
		// Change valueA
		//
		$('input[name="currencyA"] , input[name="currencyB"]').keyup(function(event)
		{	
			if( event.charCode >= 48 || event.charCode <= 57 )
			{
				var value = $(this).val() + event.key;				
			}

			
			var currencyB = $('select[class="B"] option:selected').val();

			var erg = $(this).val() * currencyB;

			$('input[name="currencyB"]').val( erg );		

			


		});

		var array = [];

		$("input[type='checkbox']").click( function(){

			var id = $(this).attr('id');
			// ID  muss bei reaload auf false sein, um zu klären ob das Häkchen gesetzt ist oder nicht

			if ( id == 'false' )
			{
				$(this).attr('id','true');	
			}
			else 
			{
				$(this).attr('id','false');
			}


			console.log( id );

		});

		// aed, aud, cad, chf, dkk, eur, gbp, usd

		function createConversionOverview( ) 
		{	
			var checked = $('input:checked').attr('name');

			if( $('input:checked') )
			{
				console.log( checked );
			} else {
				console.log( checked );
			}
		

			//console.log( array );

	
		}

	}
	
});