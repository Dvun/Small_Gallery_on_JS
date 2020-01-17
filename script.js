document.addEventListener('DOMContentLoaded', () => {


  const thumbs = document.querySelector('.thumbs')
  const preview = document.querySelector('.preview')
  const close = document.querySelector('.close-tag')
  const text = document.querySelector('.text')
  pictures = [
    'images/img1.jpg', 
    'images/img2.jpg', 
    'images/img3.jpg',
    'images/img4.jpg',
    'images/img5.jpg'
  ]


  const imgsBox = (img) => {
    const pic = document.createElement('div')
    pic.className = 'picBox'
    pic.innerHTML = `<img class="img" name="img1" src="${img}" alt="" />`

    return pic
  }


  for (let i = 0; i < pictures.length; i++) {
    thumbs.appendChild(imgsBox(pictures[i]))
    const pics = document.querySelectorAll('.img')
    
    
    for (let k = 0; k < pics.length; k++) {
      pics[i].onmouseover = () => {
        preview.innerHTML = `<img class="imgPreview" name="preview" src="${pics[i].src}" alt=""/>`
        document.querySelector('.text').style.display = 'none'
        document.querySelector('.preview').classList.add('active')
        preview.style.display = 'block'
        close.style.display = 'block'
      }
    }
  }


  close.onclick = () => {
    preview.style.display = 'none'
    document.querySelector('.text').style.display = 'block'
    document.querySelector('.preview').classList.remove('active')
    close.style.display = 'none'
    text.style.display = 'block'
  }

 


})