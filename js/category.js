window.addEventListener('load', function () {
    // 调用初始化左侧分类的功能函数
    initLeftSlide();
    // 初始化右侧分类的滑动
    initRightSlide();
    // 调用左侧点击吸顶功能函数
    leftCeiling();
});

// 初始化左侧分类滑动
function initLeftSlide() {
    var swiper = new swiper('.category-left .swiper-container', {
        direction: "vertical",
        slidesPerView: 'auto',
        freeMode: true,
    })
}

// 分类左侧点击吸顶函数
function leftCeiling() {
    var swiperContainer = document.querySelector('.swiper-container');
    var swiperWrapper = document.querySelector('.swiper-wrapper');
    var swiperSlide = document.querySelector('.swiper-slide');
    var lis = document.querySelectorAll('.category-left ul li');
    for (var i = 0; i < lis.length; i++) {
     
        lis[i].dataset['index'] = i;
        lis[i].addEventListener('click', function () {
            var index = this.dataset['index'];
            // 计算位移距离 -索引  * 高度  因为往上位移是负值
            var translateY = -index * this.offsetHeight;
            console.log(translateY);
            // 位移之前还要判断一下 位移的距离是否小于最小移动的距离 父容器高度 - 子容器高度
            var minTranslateY = swiperContainer.offsetHeight - swiperSlide.offsetHeight;
            console.log(minTranslateY);
            //  判断当前点击位移距离是否小于最小位移距离 小于 把最小位移距离设置给你
            if (translateY < minTranslateY) {
                translateY = minTranslateY;
            }
            swiperWrapper.style.transform = 'translate3d(0px, ' + translateY + 'px, 0px)';
            swiperWrapper.style.transition = 'all 0.3s';

            for (var i = 0; i < lis.length; i++) {
                lis[i].classList.remove('active');
            }
            this.classList.add('active');
        });
    }
}

// 初始化右侧分类滑动
function initRightSlide() {
    // 初始化右侧swiper插件
    var swiper = new Swiper('.category-right .swiper-container', {
        // 垂直滚动
        direction: 'vertical',
        // 支持多张图一起
        slidesPerView: 'auto',
        // 惯性
        freeMode: true,
        // 右边需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        // mousewheel: true,
    });
}