let a = JSON.parse(localStorage.getItem("tasks1")) || []
let b = Number(localStorage.getItem("dsa1")) || 0
let c = JSON.parse(localStorage.getItem("logs1")) || []

let d = document.getElementById("i")
let e = document.getElementById("b")
let f = document.getElementById("t")
let g = document.getElementById("tt")
let h = document.getElementById("cc")
let i1 = document.getElementById("pp")
let j = document.getElementById("bar2")
let k = document.getElementById("txt")
let l = document.getElementById("d1")
let m = document.getElementById("dd")
let n = document.getElementById("l")
let o = document.getElementById("q")

function p1(){

  f.innerHTML = ""

  let r = 0

  a.forEach((s,t)=>{

    if(s.ok){
      r++
    }

    let u = document.createElement("div")
    u.className = "task"

    let v = document.createElement("span")
    v.innerText = s.name

    if(s.ok){
      v.classList.add("done")
    }

    let w = document.createElement("div")

    let x = document.createElement("button")
    x.innerText = s.ok ? "Undo" : "Done"

    x.onclick = ()=>{

      a[t].ok = !a[t].ok

      if(a[t].ok){
        z1("Task Completed")
      }

      else{
        z1("Task Reopened")
      }

      p1()

    }

    let y = document.createElement("button")
    y.innerText = "Delete"

    y.onclick = ()=>{

      a.splice(t,1)

      z1("Task Removed")

      p1()

    }

    w.appendChild(x)
    w.appendChild(y)

    u.appendChild(v)
    u.appendChild(w)

    f.appendChild(u)

  })

  let aa = 0

  if(a.length > 0){
    aa = Math.floor((r / a.length) * 100)
  }

  g.innerText = a.length
  h.innerText = r
  i1.innerText = aa + "%"
  j.style.width = aa + "%"
  k.innerText = aa + "% completed"

  localStorage.setItem("tasks1",JSON.stringify(a))

}

e.onclick = ()=>{

  let bb = d.value.trim()

  if(bb === ""){
    return
  }

  let cc = {
    id:Date.now(),
    name:bb,
    ok:false
  }

  a.unshift(cc)

  d.value = ""

  z1("New Task Added")

  p1()

}

function z1(dd){

  let ee = {
    text:dd,
    time:new Date().toLocaleTimeString()
  }

  c.unshift(ee)

  if(c.length > 7){
    c.pop()
  }

  localStorage.setItem("logs1",JSON.stringify(c))

  n.innerHTML = ""

  c.forEach(ff=>{

    let gg = document.createElement("div")
    gg.className = "log"

    gg.innerHTML = `
      <p>${ff.text}</p>
      <small>${ff.time}</small>
    `

    n.appendChild(gg)

  })

}

let h1 = document.getElementById("tm")
let h2 = document.getElementById("s")
let h3 = document.getElementById("p")
let h4 = document.getElementById("r")

let q = 1500
let r1 = null

function s1(){

  let ii = Math.floor(q / 60)
  let jj = q % 60

  if(jj < 10){
    jj = "0" + jj
  }

  h1.innerText = `${ii}:${jj}`

}

h2.onclick = ()=>{

  if(r1 !== null){
    return
  }

  r1 = setInterval(()=>{

    q--

    s1()

    if(q <= 0){

      clearInterval(r1)
      r1 = null

      alert("Focus Session Finished")

      z1("Pomodoro Completed")

    }

  },1000)

}

h3.onclick = ()=>{

  clearInterval(r1)
  r1 = null

}

h4.onclick = ()=>{

  clearInterval(r1)
  r1 = null

  q = 1500

  s1()

}

let t1 = document.getElementById("m1")
let t2 = document.getElementById("m2")

function u1(){

  l.innerText = b
  m.innerText = b

  localStorage.setItem("dsa1",b)

}

t2.onclick = ()=>{

  b++

  u1()

  z1("DSA Count Increased")

}

t1.onclick = ()=>{

  if(b > 0){

    b--

    u1()

  }

}

let v1 = document.getElementById("k")

v1.onclick = ()=>{

  document.body.classList.toggle("light")

}

async function w1(){

  try{

    let kk = await fetch("https://api.quotable.io/random")
    let ll = await kk.json()

    o.innerText = ll.content

  }

  catch{

    o.innerText = "Stay consistent and trust the process"

  }

}

let x1 = document.getElementById("g")

let y1 = new Date().getHours()

if(y1 < 12){
  x1.innerText = "Good Morning"
}

else if(y1 < 18){
  x1.innerText = "Good Afternoon"
}

else{
  x1.innerText = "Good Evening"
}

p1()
u1()
z1("Dashboard Started")
w1()
s1()