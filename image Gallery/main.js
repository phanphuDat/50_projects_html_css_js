/**
 * !. nhấn vào ảnh là nó chuyển dần từ mờ sang đậm của galerry
 * * opacity: 0 -> opacity: 1. -> animation opacity for gallery.
 * ? ảnh cũng nghe sự kiện click.
 * !. khi nhấn vào Button icon chuyển ảnh mỗi khi click.
 * ? 2 button icon lắng nghe sự kiện. và gallery thay đổi nội dung 
 * * innterHtml gallery -> value của các ảnh (list)
 * ? nhấn ra khỏi cái gallery Inner. thì nó sẽ ostop performing.
 */

var images = document.querySelectorAll('.image img')
var gallery = document.querySelector('.gallery')
var innerGallery = document.querySelector('.gallery__inner img')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')


var currentIndex = 0;
images.forEach(function(image, index) {
    image.addEventListener('click', function(e) {
        currentIndex = index
        innerGallery.setAttribute('src', images[currentIndex].src)
        gallery.classList.add('gallery__show')
    })
})

const arr = [1,3,4,2,7,9,10,6,8]
const arr1 = [1,3,9,11,5,7,13]

function findNumExit (arr, arr1) {
    var findExit = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr1.length; j++) {
            if(arr[i] === arr1[j]) {
                findExit.push(arr[i])
            } 
        }
    }
    return findExit;
}

console.log(findNumExit(arr, arr1))






