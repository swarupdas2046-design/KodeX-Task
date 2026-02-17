let card = document.querySelector('.card')
let btn = document.querySelector('button')
let h3 = document.querySelector('h3')
let h2 = document.querySelector('h2')
let main = document.querySelector('main')
let p = document.querySelector('p')
const iplTeams = [
  {
    name: "Mumbai Indians",
    shortName: "MI",
    captain: "Hardik Pandya",
    titles: 5,
    trophyYears: [2013, 2015, 2017, 2019, 2020],
    primaryColor: "#004BA0", // Blue
    secondaryColor: "#D1AB3E", // Gold
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaNWOmOeYuTqe99a5MzazpflfXE3Z9Hgyc3g&s"
  },
  {
    name: "Chennai Super Kings",
    shortName: "CSK",
    captain: "Ruturaj Gaikwad",
    titles: 5,
    trophyYears: [2010, 2011, 2018, 2021, 2023],
    primaryColor: "#FFFF00", // Yellow
    secondaryColor: "#0081E9", // Blue
    logo: "https://knowlepedia.org/images/e/e2/Chennai_Super_Kings_Logo.jpg"
  },
  {
    name: "Kolkata Knight Riders",
    shortName: "KKR",
    captain: "Shreyas Iyer",
    titles: 3,
    trophyYears: [2012, 2014, 2024],
    primaryColor: "#3A225D", // Purple
    secondaryColor: "#B3A123", // Gold
    logo: "https://yt3.googleusercontent.com/NskvV2xmDY5Nd3lHCHp8Mq2eaW9fAysJMB6L-zEKtkZBjnxv1hCUMu2a4tI0MbrsuvIQ64mC_g=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    name: "Sunrisers Hyderabad",
    shortName: "SRH",
    captain: "Pat Cummins",
    titles: 2,
    trophyYears: [2009, 2016],
    primaryColor: "#FF822A", // Orange
    secondaryColor: "#000000", // Black
    logo: "https://yt3.googleusercontent.com/LFRFAbflaHNfroBZDP38wsZ2YFxTiTHnyU_W0fbHmwebsl8FE9qz1jDDtfCbXNPu8BnhGZKMNg=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    name: "Rajasthan Royals",
    shortName: "RR",
    captain: "Sanju Samson",
    titles: 1,
    trophyYears: [2008],
    primaryColor: "#EA1A85", // Pink
    secondaryColor: "#004B8D", // Royal Blue
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg/1280px-This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg.png"
  },
  {
    name: "Gujarat Titans",
    shortName: "GT",
    captain: "Shubman Gill",
    titles: 1,
    trophyYears: [2022],
    primaryColor: "#1B2133", // Navy Blue
    secondaryColor: "#B8914B", // Gold
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGc2I3jTLVIuptfr9pR7bUucMJJssNuuT8rg&s"
  },
  {
    name: "Royal Challengers Bengaluru",
    shortName: "RCB",
    captain: "Faf du Plessis",
    titles: 0,
    trophyYears: [2026],
    primaryColor: "#EC1C24", // Red
    secondaryColor: "#000000", // Black
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcKn7d5hNmOg6GDE08cOHD2EO9-ZaES392SA&s"
  },
  {
    name: "Delhi Capitals",
    shortName: "DC",
    captain: "Rishabh Pant",
    titles: 0,
    trophyYears: [0],
    primaryColor: "#00008B", // Blue
    secondaryColor: "#EF1B23", // Red
    logo: "https://knowlepedia.org/images/7/75/Delhi_Capitals_Logo.jpg"
  },
  {
    name: "Lucknow Super Giants",
    shortName: "LSG",
    captain: "KL Rahul",
    titles: 0,
    trophyYears: [0],
    primaryColor: "#0057E2", // Aqua
    secondaryColor: "#E1121A", // Red accent
    logo: "https://static.vecteezy.com/system/resources/previews/075/244/945/non_2x/lucknow-super-giants-logo-lsg-logo-icon-on-transparent-background-free-png.png"
  },
  {
    name: "Punjab Kings",
    shortName: "PBKS",
    captain: "Shikhar Dhawan",
    titles: 0,
    trophyYears: [0],
    primaryColor: "#ED1B24", // Red
    secondaryColor: "#DCDDDF", // Silver
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4v-vX_IphwVOKdzJ7JH_Ykl_0Xq4ZMAKoSg&s"
  }
];

btn.addEventListener("click",function(){
    let h5 = document.createElement('h5')
    let arr = Math.floor(Math.random()*iplTeams.length)
    console.log(iplTeams[arr].name);
    console.log(iplTeams[arr].trophyYears);
    // h5.innerHTML = iplTeams[arr].
    h2.innerHTML = iplTeams[arr].name
    h2.style.color = iplTeams[arr].secondaryColor
    h3.innerHTML = iplTeams[arr].captain
    h3.style.color = iplTeams[arr].secondaryColor
    p.innerHTML = iplTeams[arr].trophyYears
    p.style.color = iplTeams[arr].secondaryColor
    main.style.backgroundImage = `url(${iplTeams[arr].logo})`
    card.style.backgroundColor = iplTeams[arr].primaryColor
})