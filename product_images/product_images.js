$(function () {
	$('.product_images').each(function () {
		var self = $(this);
		self.find('.frame:not(:first) .payload').hide();
		self.find('.trigger').click(function () {
			self.find('.payload').fadeOut();
			$(this).parent('.frame').siblings('.on').removeClass('on');
			$(this).parent('.frame').addClass('on');
			$(this).next('.payload').fadeIn();
		});
		self.hover(function () {
			self.find('.trigger').fadeIn();
			self.find('p').fadeIn();
		}, function () {
			self.find('.trigger').fadeOut();
			self.find('p').fadeOut();
		});
	});
});