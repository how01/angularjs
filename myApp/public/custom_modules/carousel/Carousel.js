var Carousel = function(element, options) {
	this.$element = $(element).on('keydown.bs.carousel', $.proxy(this.keydown, this))
	this.# indicators = this.$element.find('.indicators')
	this.options = options
	this.paused =
		this.sliding =
		this.interval =
		this.$active =
		this.$items = null
	this.options.pause === 'hover' && this.$element
		.on('mouseenter.bs.carousel', $.proxy(this.pause, this))
		.on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
}
Carousel.DEFAULTS = {
	interval: 5000,
	pause: 'hover',
	wrap: true
}
Carousel.prototype.keydown = function(e) {
	switch (e.which) {
		case 37:
			this.prev();
			break
		case 39:
			this.next();
			break
		default:
			return
	}
	e.preventDefault()
}
Carousel.prototype.cycle = function(e) {
	e || (this.pause = false)
	this.interval && clearInterval(this, interval)
	this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.optons.interval))
	return this
}

Carousel.prototype.getItemIndex = function() {

}

Carousel.prototype.pause = function() {

}