let arr = [
  {
    SongName: "O Romeo",
    Singer: "Arijit Singh",
    SongURL: "./Music/O\ Romeo.mp3",
    Image: "./Images/o-romeo-500-500.jpg",
    SongDuration: "4:39"
  },
  {
    SongName: "Jo Tum Mere Ho",
    Singer: "Anuv Jain",
    SongURL: "./Music/Jo\ Tum\ Mere\ Ho.mp3",
    Image: "./Images/Jo-Tum-Mere-Ho-Anuv-Jain-500-500.jpg",
    SongDuration: "4:11"
  },
  {
    SongName: "Afsos",
    Singer: "Anuv Jain",
    SongURL: "./Music/Afsos.mp3",
    Image: "./Images/Afsos-Anuv-Jain-500-500.jpg",
    SongDuration: "3:11"
  },
  {
    SongName: "Tere Isk Mein",
    Singer: "Arijit Singh",
    SongURL: "./Music/Tere\ Ishk\ Mein.mp3",
    Image: "./Images/title-track-tere-ishk-mein-500-500.jpg",
    SongDuration: "5:50"
  },
  {
    SongName: "Maaye",
    Singer: "B Parak",
    SongURL: "./Music/Maaye.mp3",
    Image: "./Images/maaye-sky-force-500-500.jpg",
    SongDuration: "4:50"
  },
  {
    SongName: "Laal Pari",
    Singer: "Honey Singh",
    SongURL: "./Music/Laal\ Pari.mp3",
    Image: "./Images/laal-pari-housefull-5-500-500.jpg",
    SongDuration: "4:16"
  },
  {
    SongName: "Koi Tod Na Iska",
    Singer: "Sukhwinder Singh",
    SongURL: "./Music/Koi\ Tod\ Na\ Iska\ Raayan\ 320\ Kbps.mp3",
    Image: "./Images/Koi-Tod-Na-Iska-Raayan-500-500.jpg",
    SongDuration: "4:05"
  },
  {
    SongName: "Dhurandar",
    Singer: "Hanumankind",
    SongURL: "./Music/Dhurandhar.mp3",
    Image: "./Images/dhurandhar-500-500.jpg",
    SongDuration: "2:36"
  },
  {
    SongName: "Aaya Re Toofan",
    Singer: "A.R.Rahman",
    SongURL: "./Music/Aaya\ Re\ Toofan.mp3",
    Image: "./Images/aaya-re-toofan-chhaava-500-500.jpg",
    SongDuration: "4:39"
  },
  {
    SongName:"Oh Shiv Mere",
    Singer:"Arijit Singh",
    SongURL:"./Music/Oh\ Shiv\ Mere\ Kumaar\ 320\ Kbps.mp3",
    Image:"./Images/Oh-Shiv-Mere-Kumaar-500-500.jpg",
    SongDuration: "3:18"
  }
];
let AllSongs = document.querySelector("#all-songs")
let Picture = document.querySelector('#left')
let play = document.querySelector('#play')
let forward = document.querySelector('#forward')
let backward = document.querySelector('#backward')

let Music = new Audio();
let SelectedSong = 0
let MainFunction = ()=>{
    let clutter = "";

arr.forEach((elem, idx) => {
  clutter += `  <div class="song-card" id=${idx}>
                    <div class="part1">
                 <img src=${elem.Image} alt="">
                       <div class="info">
                            <h2>${elem.SongName}</h2>
                            <h4>${elem.Singer}</h4>
                       </div> 
                    </div> 
                    <h6> ${elem.SongDuration} </h6>


                </div>`;
});
    Music.src = arr[SelectedSong].SongURL
    Picture.style.backgroundImage = `url(${arr[SelectedSong].Image})`
AllSongs.innerHTML = clutter;
}

MainFunction()

let flag = 0
AllSongs.addEventListener('click',(e)=>{
    
        SelectedSong = e.target.id
        MainFunction()
        Music.play()
            play.innerHTML = `<i class="ri-pause-fill"></i>` 
    flag =1
})
      flag = 0
play.addEventListener('click',()=>{
        if (flag == 0) {
            play.innerHTML = `<i class="ri-pause-fill"></i>` 
            MainFunction() 
            Music.play()
            flag=1
        }else{
            play.innerHTML = `<i class="ri-play-large-fill"></i>`
            MainFunction()
            Music.pause()
            flag=0

        }
})

forward.addEventListener('click',()=>{
        if (SelectedSong<arr.length-1) {
            SelectedSong ++
            MainFunction()
            Music.play()
            forward.style.opacity = 1

        }else{
            forward.style.opacity = 0.3
        }
})

backward.addEventListener('click',()=>{
    if (SelectedSong>0) {
        SelectedSong--
        MainFunction()
        Music.play()
        backward.style.opacity = 1
    }else{
        backward.style.opacity = 0.3
    }
})