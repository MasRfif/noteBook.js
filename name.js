class DateFormatter extends Date {
  getFormattedDate() {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
  }
}

console.log(new DateFormatter("october 20, 1975 23:15:30").getFormattedDate());
//.

//2.

class Player {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.power = 0;
  }

  damage(power) {
    this.health -= power;
  }

  useItem(item) {
    if (item.health > 0) {
      this.health += item.health;
    }
    if (item.power > 0) {
      this.power += item.power;
    }
  }

  showStatus() {
    console.log(
      `${this.name} (Health => ${this.health}, Power => ${this.power})`
    );
  }
}

class ShootingGame {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem() {
    return Math.random() < 0.5
      ? { health: 10, power: 0 }
      : { health: 0, power: 10 };
  }

  start() {
    let currentPlayer = this.player1;
    let otherPlayer = this.player2;

    while (this.player1.health > 0 && this.player2.health > 0) {
      console.log(`--- Turn ---`);
      currentPlayer.showStatus();
      otherPlayer.showStatus();

      const item = this.getRandomItem();
      console.log(
        `Player ${currentPlayer.name} gets item: ${
          item.health > 0 ? "Health +10" : "Power +10"
        }`
      );
      currentPlayer.useItem(item);

      currentPlayer.showStatus();
      otherPlayer.showStatus();

      const damage = currentPlayer.power;
      otherPlayer.damage(damage);
      console.log(
        `Player ${currentPlayer.name} shoots Player ${otherPlayer.name} for ${damage} damage!`
      );

      [currentPlayer, otherPlayer] = [otherPlayer, currentPlayer];
    }

    const winner = this.player1.health > 0 ? this.player1 : this.player2;
    console.log(`--- Game Over ---`);
    console.log(`Winner: ${winner.name}`);
  }
}

const player1 = new Player("Omen");
const player2 = new Player("Bob");

const game = new ShootingGame(player1, player2);
game.start();
