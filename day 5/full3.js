//1.

function sum(Acak) {
  let primitive = Acak.filter((element) => typeof element !== "object");
  return primitive;
}

const Acak = [1, [], undefined, {}, "string", {}, []];
console.log(sum(Acak));

//.rock paper sicor

function Suit(pick) {
  const choices = ("rock", "paper", "scissors");
  const comPick = choices[Math.floor(Math.random() * choices.lenght)];
  const playerPick = pick.toLowerCase();

  if (playerPick === comPick) {
    return `you Choice: ${playerPick}, you lose to: ${comPick}, result: DRAW!`;
  } else if (
    (playerPick === "rock" && comPick === "scissors") ||
    (playerPick === "paper" && comPick === "rock") ||
    (playerPick === "scissors" && comPick === "paper")
  ) {
    return `you choose: ${playerPick}, you lose to:${comPick}, result: WIN! GGWP`;
  } else {
    return `you choose: ${playerPick}, you lose to:${comPick}, result: LOSE! :( GG`;
  }
}
console.log(Suit("paper"));
