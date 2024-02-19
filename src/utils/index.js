// GET DATE
export function getDateInfo(date) {
  var today = new Date();
  var yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  var tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  if (date === "today") {
    return formatDate(today);
  }
  if (date === "yesterday") {
    return formatDate(yesterday);
  }
  if (date === "tomorrow") {
    return formatDate(tomorrow);
  }
}
function formatDate(date) {
  var dd = String(date.getDate()).padStart(2, "0");
  var mm = String(date.getMonth() + 1).padStart(2, "0"); // January is 0!
  var yyyy = date.getFullYear();

  return yyyy + "-" + mm + "-" + dd;
}

// **************
function generateRandom(data) {
  return data[Math.floor(Math.random() * data.length)];
}
// **************

// GET Description

const horoscopePredictions = [
  "Your busy lifestyle has been fun, but today it's time to slow down and just relax.",
  "A surprise is in store for you today, embrace it with an open heart.",
  "Your creative energy is flowing today, use it to tackle any challenges that come your way.",
  "It's a good day to focus on your relationships, both personal and professional.",
  "Trust your instincts today, they will guide you in the right direction.",
  "Take some time to pamper yourself today, you deserve it.",
  "Don't be afraid to step out of your comfort zone today, great things await you.",
  "Stay positive and optimistic today, good things are coming your way.",
  "Listen to the advice of a trusted friend or mentor today, it may provide valuable insight.",
  "Be patient and persistent in pursuit of your goals today, success is within reach.",
];

export function getHoroscopeDescription() {
  return generateRandom(horoscopePredictions);
}

// GET compitability

const zodiacSigns = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

export function getCompatibility() {
  return generateRandom(zodiacSigns);
}

// GET Mood

const moods = [
  "Happy",
  "Sad",
  "Excited",
  "Anxious",
  "Content",
  "Angry",
  "Confused",
  "Energetic",
  "Relaxed",
  "Stressed",
  "Grateful",
  "Lonely",
  "Hopeful",
  "Bored",
  "Motivated",
  "Inspired",
];

export function getMood() {
  return generateRandom(moods);
}

// Get Colors

const colors = [
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Purple",
  "Pink",
  "Brown",
  "Black",
  "White",
  "Gray",
  "Turquoise",
  "Lavender",
  "Indigo",
  "Cyan",
  "Magenta",
  "Teal",
];

export function getColor() {
  return generateRandom(colors);
}

// GET numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export function getLuckyNumber() {
  return generateRandom(numbers);
}

