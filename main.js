//variables;
let Output = document.getElementById("output");
let title = document.getElementById("text");
let tdy_bdays = document.getElementById("tdy_list");
let text_1 = document.getElementById("text1");
let names = [];
let bdays = [];
let birthyear = [];

// event listners
document.getElementById("add").addEventListener("click", add_bday);
document.getElementById("remove").addEventListener("click", remove_bday);
document.getElementById("msg").addEventListener("click", msg_generator);

showall();

// print all the birthdays added and seperate todays birthday list
function showall() {
  Output.innerHTML = "";
  let months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  //get current date
  let today = new Date();
  let day = today.getDate();
  console.log(day);
  let month_index = today.getMonth();
  let month = months[month_index];
  let year = today.getFullYear();
  console.log(year);
  title.innerHTML = "All Birthdays";

  for (let i = 0; i < names.length; i++) {
    if (`${day} ${month}` == bdays[i].toLowerCase()) {
      tdy_bdays.innerHTML = "";
      text_1.innerHTML = "Todays Birthday List 🎉🎉";
      tdy_bdays.innerHTML += `<p>${i + 1}) ${names[i]} - ${bdays[i]}, ${
        birthyear[i]
      }</p>`;
    } else {
      text_1.innerHTML = "";
      tdy_bdays.innerHTML = "NO birthdays today 😞";
      Output.innerHTML += `<p>${i + 1}) ${names[i]} - ${bdays[i]}, ${
        birthyear[i]
      }</p>`;
    }
  }
}

// ADD birthday
function add_bday() {
  Output.innerHTML = "";
  let new_name = prompt("Whose Birthday are you adding?");
  if (new_name.length == 0) {
    alert(`WARNING: Name field can't be empty`);
  }
  let new_bday = prompt("Enter their Birthdate in the form 11 Dec:");
  if (new_bday.length == 0) {
    alert(`WARNING: Birthdate field can't be empty.`);
  }
  let bday_year = +prompt("Enter birth year in the form (2009):");
  if (bday_year.length == 0) {
    alert(`WARNING: Birth year field can't be empty.`);
  }
  bdays.push(new_bday);
  names.push(new_name);
  birthyear.push(bday_year);
  console.log(birthyear);
  showall();
}

// REMOVE birthday
function remove_bday() {
  Output.innerHTML = "";
  let index = +prompt("Enter the index number you want to delete.");
  if (index.length == 0) {
    alert(`WARNING: Index field can't be empty.`);
  }
  names.splice(index - 1, 1);
  bdays.splice(index - 1, 1);
  birthyear.splice(index - 1, 1);
  showall();
}

// generates random birthday messages
function msg_generator() {
  title.innerHTML = "";
  Output.innerHTML = "";
  tdy_bdays.innerHTML = "";

  let name = prompt("Enter the name of person you are writing for:");
  if (name.length == 0) {
    alert(`WARNING: Name field can't be empty.`);
  }
  let randNum = Math.floor(Math.random() * 10);
  console.log(randNum);
  if (randNum == 0) {
    Output.innerHTML = `Happy Birthday, ${name}! I hope your day is filled with happiness, laughter, and all the little things that make you smile. You’ve grown so much, and I hope this year brings you even more success, confidence, and amazing memories.`;
  } else if (randNum == 1) {
    Output.innerHTML = `Wishing you a very Happy Birthday, ${name}! May your special day be as wonderful as you are, and may the coming year be full of new opportunities, growth, and moments you’ll always remember.`;
  } else if (randNum == 2) {
    Output.innerHTML = `Happy Birthday, ${name}! You deserve a day full of love, good vibes, and everything that makes you happy. I hope this year turns out to be one of your best yet.`;
  } else if (randNum == 3) {
    Output.innerHTML = `Hey ${name}, happy birthday! I just want to say I hope today brings you lots of joy and that this year gives you the chance to achieve everything you’ve been working toward.`;
  } else if (randNum == 4) {
    Output.innerHTML = `Happy Birthday, ${name}! Another year older means another year stronger, smarter, and closer to your goals. Keep pushing forward, you’re doing great.`;
  } else if (randNum == 5) {
    Output.innerHTML = `Wishing you an amazing birthday, ${name}! May your day be filled with laughter, good company, and unforgettable moments. You truly deserve all the happiness in the world.`;
  } else if (randNum == 6) {
    Output.innerHTML = `Happy Birthday, ${name}! I hope you take some time today to celebrate yourself and everything you’ve accomplished so far. The best is still ahead.`;
  } else if (randNum == 7) {
    Output.innerHTML = `Cheers to you, ${name}! On your birthday, I hope you’re surrounded by positivity, love, and people who truly appreciate you. Have an incredible day.`;
  } else if (randNum == 8) {
    Output.innerHTML = `Happy Birthday, ${name}! May this year bring you closer to your dreams, fill your life with positivity, and give you countless reasons to smile.`;
  } else {
    Output.innerHTML = `Big birthday wishes to you, ${name}! I hope your day is as special as you are and that the year ahead is full of success, happiness, and great memories.`;
  }
}
