const data = document.getElementsByClassName("progress-bar");

const data_bar_left = document.getElementsByClassName("progress-bar-left");
const data_bar_right = document.getElementsByClassName("progress-bar-right");
const data_bar_number = document.getElementsByClassName("progress-bar-number");

var progressState = true;

function progressBar() {
	for (var i = 0; i < data.length; i++) {
		const progress_bar = data[i];

		const bar_left = data_bar_left[i];
		const bar_right = data_bar_right[i];

		const bar_number = data_bar_number[i];

		let counter = 0;
		let progress = progress_bar.dataset.progress;

		let counterLeft = 0;
		let progressLeft = 1.8 * progress * 2;

		let counterRight = 0;
		let progressRight = 1.8 * progress * 2 - 180;


		setInterval(()=>{
			if(counter == progress){
			  clearInterval();
			} else{
			  counter+=1;
			  bar_number.textContent = counter + "%";
			}
		}, 20);

		setInterval(()=>{
			if(counterLeft >= progressLeft || counterLeft >= 180){
			  clearInterval();
			} else{
				counterLeft+=1.8;

				bar_left.style.transform = 'rotate(' + counterLeft + 'deg)';

				setInterval(()=>{

					if(counterLeft <= 180){
					  clearInterval();
					} else if (counterRight >= progressRight) {
					  clearInterval();
					} else{
					  counterRight+=1.8;

					  bar_right.style.transform = 'rotate(' + counterRight + 'deg)';
					}

				}, 1000);

			}

		}, 10);
		
	}
}
function clearProgressBar() {
	for (var i = 0; i < data.length; i++) {
		const bar_number = data_bar_number[i];
		const bar_left = data_bar_left[i];
		const bar_right = data_bar_right[i];

		bar_number.textContent = "0%";
		bar_left.style.transform = 'rotate(0deg)';
		bar_right.style.transform = 'rotate(0deg)';		
	}
}
$(window).scroll(function() {
	var containerHeight = parseInt($('.progress-bars').css('height'));
	var containerTop = $("#progress-bars").offset().top;
	var containerTopReverse = top.visualViewport.pageTop + (containerHeight * 2);

	var scrollTop = top.visualViewport.pageTop + (containerHeight * 1.3);

	if (scrollTop > containerTop && progressState) {
		progressBar();
		progressState = false;
	}
	if (containerTop > containerTopReverse) {
		clearProgressBar();		
		progressState = true;
	}
});