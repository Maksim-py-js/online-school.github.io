const data = document.getElementsByClassName("progress-bar");

const data_bar_left = document.getElementsByClassName("progress-bar-left");
const data_bar_right = document.getElementsByClassName("progress-bar-right");
const data_bar_percent = document.getElementsByClassName("progress-bar-percent");
const data_bar_count = document.getElementsByClassName("progress-bar-count");

var progressState = true;

function progressBar() {
	for (var i = 0; i < data.length; i++) {
		const progress_bar = data[i];

		const bar_left = data_bar_left[i];
		const bar_right = data_bar_right[i];

		const bar_percent = data_bar_percent[i];
		const bar_count = data_bar_count[i];

		let counter = 0;
		let progress = progress_bar.dataset.progress;
		let progressessPlus = progress + 1;

		let progressCount = bar_count.dataset.count;
		let counterCount = (progressCount / progress);

		let counterLeft = 0;
		let progressLeft = 1.8 * progress * 2;

		let counterRight = 0;
		let progressRight = 1.8 * progress * 2 - 180;


		setInterval(()=>{
			if(counter == progress){
			  clearInterval();
			} else{
			  counter+=1;
			  bar_percent.textContent = counter + "%";
			}
		}, 20);

		setInterval(()=>{
			if(counter == progress){
			  clearInterval();
			} else{
			  counterCount+=(progressCount / progress);
			  bar_count.textContent = Math.round(counterCount);
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
		const bar_percent = data_bar_percent[i];
		const bar_count = data_bar_count[i];
		const bar_left = data_bar_left[i];
		const bar_right = data_bar_right[i];

		bar_percent.textContent = "0%";
		bar_count.textContent = "0";
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

// gsap.to("#trajectory1", {
//   scrollTrigger: {
//       trigger: "#trajectory-container",
//         scrub: true,
//         markers: true,
//         start: "start 80%",
//         end: "bottom 40%"
//         onEnter: () => $(this).addClass('active'),
//         onLeave: () => $(this).removeClass('active')
//   },
//   opacity: () => {
//       return (1);
//   }
// });

// $("#trajectory1").each(function() {
//     // Content Reveal Animation
//     ScrollTrigger.create({
//       trigger: "#trajectory-container",	
// 		markers: true,

//       start: "top 20%",
//       end: "bottom 10%",
//       onEnter: () => $(this).addClass('active'),
//       // onLeave: () => $(this).removeClass('active'),
//       onEnterBack: () => $(this).addClass('active'),
//       onLeaveBack: () => $(this).removeClass('active'),
//     });
// });

// const data_trajectory = [
// 	{
// 		trId: 'trajectory1',
// 		contId: 'trajectory-container',
// 		trAbsId: 'absolute_trajectory1',
// 		contAbsId: 'trajectory1',

// 		start: "start 80%",
//         end: "bottom 20%"
// 	},
// 	{
// 		trId: 'trajectory2',
// 		contId: 'trajectory1',
// 		trAbsId: 'absolute_trajectory2',
// 		contAbsId: 'absolute_trajectory1',

// 		start: "start 80%",
//         end: "bottom 20%"
// 	},
// 	{
// 		trId: 'trajectory3',
// 		contId: 'trajectory2',
// 		trAbsId: 'absolute_trajectory3',
// 		contAbsId: 'absolute_trajectory2',

// 		start: "start 80%",
//         end: "bottom 20%"
// 	},
// 	{
// 		trId: 'trajectory4',
// 		contId: 'trajectory3',
// 		trAbsId: 'absolute_trajectory4',
// 		contAbsId: 'absolute_trajectory3',

// 		start: "start 80%",
//         end: "bottom 20%"
// 	},
// 	{
// 		trId: 'trajectory5',
// 		contId: 'trajectory4',
// 		trAbsId: 'absolute_trajectory5',
// 		contAbsId: 'absolute_trajectory4',

// 		start: "start 80%",
//         end: "bottom 20%"
// 	}
// ]
// for (var i = 0; i < data_trajectory.length; i++) {
// 	console.log(data_trajectory[i]);

// 	gsap.to(('#' + data_trajectory[i].trId), {
// 	  scrollTrigger: {
// 	      trigger: ('#' + data_trajectory[i].contId),
// 	        scrub: true,
// 	        markers: true,
// 	        start: data_trajectory[i].start,
// 	        end: data_trajectory[i].end
// 	  },
// 	  height: () => {
// 	      return (120 + 'px');
// 	  }
// 	});

// 	gsap.to(('#' + data_trajectory[i].trAbsId), {
// 	  scrollTrigger: {
// 	      trigger: ('#' + data_trajectory[i].contAbsId),
// 	        scrub: true,
// 	        markers: true,
// 	        start: data_trajectory[i].start,
// 	        end: data_trajectory[i].end
// 	  },
// 	  height: () => {
// 	      return (120 + 'px');
// 	  }
// 	});
// }
