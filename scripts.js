const coffee = {
  aboutSpan: "Our Café environment is vibrant and alive. Bound by these principles since opening, Edi's Coffee Shop has garnered accolades from customers everywhere.",
  blogSpan1: "conclude 2023 by celebrating our growth and sharing our thoughts with all of you. After 4 years of growth, we want to take this opportunity to document and preserve the moments, stories, and inspirations that have shaped us into what it is today. It is a tribute to our passion for coffee, our dedicated team, and most importantly, our valued community of coffee lovers like you.",
  blogSpan2: ". From curated food dishes to captivating coffee workshops and the availability of seasonal coffee beans, continue reading to discover what awaits you when you visit our store during this joyous time.",
  blogSpan3: ". This August, we are excited to launch a few additions to our homemade pastry menu."
}


const btn = document.getElementById('btn')
const contactBtn = document.getElementById('contact-btn')

function showProcess(button, content) {
  button.innerHTML = 'Processing...'

  setTimeout(()=> {
    button.innerHTML = `${content}`
  }, 1500)
}

btn.addEventListener('click', ()=> showProcess(btn, 'Shop Now'))
contactBtn.addEventListener('click', ()=> showProcess(contactBtn, 'Send Message'))


const aboutBtn = document.getElementById('about-btn')
const blogBtn1 = document.getElementById('blog-btn1')
const blogBtn2 = document.getElementById('blog-btn2')
const blogBtn3 = document.getElementById('blog-btn3')

const aboutSpan = document.getElementById('about-span')
const blogSpan1 = document.getElementById('blog-span1')
const blogSpan2 = document.getElementById('blog-span2')
const blogSpan3 = document.getElementById('blog-span3')

let aboutS = false;
let blogS1 = false;
let blogS2 = false;
let blogS3 = false;


function renderAbout() {
  if (!aboutS) {
    aboutSpan.innerText = `${coffee.aboutSpan}`;
    aboutBtn.innerHTML = 'See less'
    aboutS = true
  } else {
    aboutSpan.innerText = '...'
    aboutBtn.innerHTML = 'Learn More'
    aboutS = false
  }
}

function renderBlog1() {
  if (!blogS1) {
    blogSpan1.innerText = `${coffee.blogSpan1}`;
    blogBtn1.innerHTML = 'See less'
    blogS1 = true
  } else {
    blogSpan1.innerText = '...'
    blogBtn1.innerHTML = 'Learn More'
    blogS1 = false
  }
}

function renderBlog2() {
  if (!blogS2) {
    blogSpan2.innerText = `${coffee.blogSpan2}`;
    blogBtn2.innerHTML = 'See less'
    blogS2 = true
  } else {
    blogSpan2.innerText = '...'
    blogBtn2.innerHTML = 'Learn More'
    blogS2 = false
  }
}

function renderBlog3() {
  if (!blogS3) {
    blogSpan3.innerText = `${coffee.blogSpan3}`;
    blogBtn3.innerHTML = 'See less'
    blogS3 = true
  } else {
    blogSpan3.innerText = '...'
    blogBtn3.innerHTML = 'Learn More'
    blogS3 = false
  }
}

aboutBtn.addEventListener('click', ()=> renderAbout() )
blogBtn1.addEventListener('click', ()=> renderBlog1() )
blogBtn2.addEventListener('click', ()=> renderBlog2() )
blogBtn3.addEventListener('click', ()=> renderBlog3() )