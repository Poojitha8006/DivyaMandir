let allTemples = [];

window.onload = loadTemples;

async function loadTemples() {
  const lang = document.getElementById("language").value;
  const response = await fetch(`data/temples_${lang}.json`);
  allTemples = await response.json();
  displayTemples(allTemples);
}

function displayTemples(temples) {
  const result = document.getElementById("result");
  result.innerHTML = "";

  temples.forEach(t => {
    result.innerHTML += `
      <div class="temple-card" data-name="${t.name.toLowerCase()}">
        <h2>${t.temple}</h2>
        <p><b>Place:</b> ${t.place}</p>
        <p><b>Timings:</b> ${t.timings}</p>
        <p><b>History:</b> ${t.history}</p>
        <p><b>Travel:</b> ${t.travel}</p>
        <p><b>Festivals:</b> ${t.festivals}</p>
      </div>
    `;
  });
}

function searchTemple(){
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".temple-card");

  cards.forEach(card => {
    const name = card.dataset.name;
    card.style.display = name.includes(input) ? "" : "none";
  });
}


  // ===============================
// TEMPLE SLIDER JAVASCRIPT (FIXED)
// ===============================
const temples = [
  { name:"Tirupati Balaji", place:"Andhra Pradesh", time:"4:00 AM – 11:00 PM", img:"tirupati-balaji.jpg" },
  { name:"Kanaka Durga", place:"Vijayawada", time:"4:00 AM – 10:00 PM", img:"kanaka-durga.jpg" },
  { name:"Srisailam Mallikarjuna", place:"Andhra Pradesh", time:"6:00 AM – 10:00 PM", img:"srisailam.jpg" },
  { name:"Simhachalam", place:"Visakhapatnam", time:"7:00 AM – 4:00 PM", img:"simhachalam.jpg" },
  { name:"Meenakshi Amman", place:"Madurai", time:"5:00 AM – 10:00 PM", img:"meenakshi.jpg" },
  { name:"Ramanathaswamy", place:"Rameswaram", time:"5:00 AM – 9:00 PM", img:"ramanathaswamy.jpg" },
  { name:"Kashi Vishwanath", place:"Varanasi", time:"3:00 AM – 11:00 PM", img:"kashi-vishwanath.jpg" },
  { name:"Somnath", place:"Gujarat", time:"6:00 AM – 9:00 PM", img:"somnath.jpg" },
  { name:"Dwarkadhish", place:"Dwarka", time:"6:30 AM – 9:30 PM", img:"dwarkadhish.jpg" },
  { name:"Jagannath", place:"Puri", time:"5:00 AM – 11:00 PM", img:"jagannath.jpg" },
  { name:"Vaishno Devi", place:"Jammu & Kashmir", time:"Open 24 Hours", img:"vaishno-devi.jpg" },
  { name:"Kedarnath", place:"Uttarakhand", time:"6:00 AM – 8:00 PM", img:"kedarnath.jpg" },
  { name:"Badrinath", place:"Uttarakhand", time:"6:00 AM – 9:00 PM", img:"badrinath.jpg" },
  { name:"Sabarimala", place:"Kerala", time:"Seasonal", img:"sabarimala.jpg" },
  { name:"Mahakaleshwar", place:"Ujjain", time:"4:00 AM – 11:00 PM", img:"mahakaleshwar.jpg" },
  { name:"Chidambaram", place:"Tamil Nadu", time:"6:00 AM – 10:00 PM", img:"chidambaram.jpg" },
  { name:"Guruvayur", place:"Kerala", time:"3:00 AM – 9:30 PM", img:"guruvayur.jpg" },
  { name:"Udupi Krishna", place:"Karnataka", time:"5:00 AM – 9:00 PM", img:"udupi-krishna.jpg" },
  { name:"Annavaram", place:"Andhra Pradesh", time:"6:00 AM – 9:00 PM", img:"annavaram.jpg" },
  { name:"Tiruchendur Murugan", place:"Tamil Nadu", time:"5:00 AM – 9:00 PM", img:"tiruchendur.jpg" },
  { name:"Sripuram Golden Temple", place:"Vellore", time:"8:00 AM – 8:00 PM", img:"sripuram.jpg" }
];

const result = document.getElementById("result");

temples.forEach(t => {
  result.innerHTML += `
    <div class="card">
      <img src="images/${t.img}" style="width:90px;height:120px;border-radius:12px;display:block;margin:0 auto 10px;">
      <h2 style="color:orange">${t.name}</h2>
      <p><b>Place:</b> ${t.place}</p>
      <p><b>Timings:</b> ${t.time}</p>
    </div>
  `;
});
 script