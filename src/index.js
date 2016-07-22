import  'modal';

const vm = new Vue({
	el: '#app',
	data: {
		showNewsModal: 0,
		news: [
			{name: '习近平：使改革精准对接发展所需民心所向'},
			{name: '李克强同国际金融机构负责人对话'},
			{name: '俞正声主持政协双周协商座谈会'}
		]
	}
});