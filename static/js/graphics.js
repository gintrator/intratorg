var bezierImages = ["img/bezier/image-01.png",
                    "img/bezier/image-02.png",
                    "img/bezier/image-03.png",
                    "img/bezier/image-04.png",
                    "img/bezier/image-05.png",
                    "img/bezier/image-06.png",
                    "img/bezier/image-07.png",
                    "img/bezier/image-08.png",
                    "img/bezier/image-09.png"]

var raytracerImages = ["img/raytracer/image-01.png",
                       "img/raytracer/image-02.png",
                       "img/raytracer/image-03.png",
                       "img/raytracer/image-04.png",
                       "img/raytracer/image-05.png",
                       "img/raytracer/image-06.png",
                       "img/raytracer/image-07.png",
                       "img/raytracer/image-08.png",
                       "img/raytracer/image-09.png",
                       "img/raytracer/image-10.png",
                       "img/raytracer/image-11.png",
                       "img/raytracer/image-12.png"]

function addImagesToGallery(images, gallery, altText) {
	for (var image of images) {
		var img = $("<img>", {
			src: image,
			alt: altText,
		}).addClass("gallery-img");
		$(gallery).append(img);
	}
}

addImagesToGallery(bezierImages, "#bezier-img-gallery", "bezier-image");
addImagesToGallery(raytracerImages, "#raytracer-img-gallery", "raytracer-image");

var fadeTime = 240;

function hideOverlay(fadeTime) {
	$("#img-gallery-overlay").fadeOut(fadeTime);
}

function showOverlay(fadeTime) {
	$("#img-gallery-overlay").fadeIn(fadeTime);
}

$(".gallery-img").click(function() {
	var img = $("<img>", {
		src: this.src,
		alt: this.alt,
		id:  "overlay-img"
	});
	$("#overlay-img").remove();
	$("#img-gallery-overlay").append(img);
	showOverlay(fadeTime);
});

$("#img-gallery-overlay").click(function() {
	hideOverlay(fadeTime);
});
