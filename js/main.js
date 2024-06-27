// 🌟 Text Carousel Animation
let pTag1=document.querySelector(".mg-featured-reel-wrap .items")
let count = 0;

// 💬 pTag1을 복사하여 붙이기
let newItems=pTag1.cloneNode(true) // 무엇.cloneNode : 무엇을 복사한다. 

// 💬 복사한 내용을 태그에 삽입하기