$(document).ready(function()
{
	navbar_onscroll();

	function navbar_onscroll()
	{
		if ($(this).scrollTop() >= 1)
		{
			$('.navbar').addClass('active'); 
		}
		else
		{
			$('nav').removeClass('active'); 
		}
	}

	$(window).scroll(function()
	{	
		navbar_onscroll();
	});
});