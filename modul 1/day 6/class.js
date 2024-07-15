// objt to class

const user1 = {
  name: "will",
  score: 3,
  increment: function () {
    user1.score++;
  },
};

user1.increment();
user1.increment();
console.log(user1.score);

//2.

function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function () {
    newUser.score++;

    return newUser;
  };
}

// const user2 = userCreator("will", 3);
// const user3 = userCreator("tim", 4);

//3

function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;

  return newUser;
}

const userFunctionStore = {
  increment: function () {
    this.score++;
  },
};

const user4 = userCreator("will", 8);
const user5 = userCreator("tim", 10);
console.log(user4, user5);

//4

function userC(name, score) {
  this.name = name;
  this.score = score;
}

userC.prototype.decrement = function () {
  this.score--;
};

const userO = new userC("ibnu", 1);
userO.decrement();
userO.decrement();
console.log(userO.score);

//5

class UserB {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  increment() {
    this.score++;
  }
}

const user100 = new UserB("alpart", 100);
console.log(user100.score);
