// Swiper Slide
const slide = new Swiper('#my-swiper', {
	slidesPerView: 'auto', // 한 슬라이드에 보여줄 갯수
	spaceBetween: 50, // 슬라이드 사이 여백
	loop: false, // 슬라이드 반복 여부
	loopAdditionalSlides: 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
	pagination: false, // pager 여부
	autoplay: { // 자동 슬라이드 설정 , 비 활성화 시 false
		delay: 3000, // 시간 설정
		disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
	},
	autoplay: false,
	navigation: { // 버튼 사용자 지정
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	//반응형 
	breakpoints: { 
			640: { //640 이상일 경우
				slidesPerView: 2, //레이아웃 2열
			},
			768: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 3,
			},
		}
})