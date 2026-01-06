function calculateLove() {
  let name1 = document.getElementById("name1").value.trim().toLowerCase();
  let name2 = document.getElementById("name2").value.trim().toLowerCase();

  if (!name1 || !name2) {
    document.getElementById("result").innerText =
      "Please enter both names 💔";
    return;
  }

  const sabbir = ["sabbir hossen", "sabbir"];
  const jannat = ["mahmuda jannat", "mahmuda", "jannat", "elmyra"];

  let trueLove =
    (sabbir.includes(name1) && jannat.includes(name2)) ||
    (sabbir.includes(name2) && jannat.includes(name1));

  if (trueLove) {
    document.getElementById("result").innerText =
      "Sabbir Hossen ❤️ Mahmuda Jannat = 100% Love 💯✨";
  } else {
    let score = Math.floor(Math.random() * 50);
    document.getElementById("result").innerText =
      "Love Score = " + score + "% 💔";
  }
}
