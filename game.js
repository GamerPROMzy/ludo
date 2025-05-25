let room = "";
let playerId = "";

function createRoom() {
  room = document.getElementById("roomCode").value;
  playerId = 'player' + Math.floor(Math.random() * 10000);
  db.ref('rooms/' + room + '/players/' + playerId).set({ position: 0 });
  listenForUpdates();
}

function joinRoom() {
  room = document.getElementById("roomCode").value;
  playerId = 'player' + Math.floor(Math.random() * 10000);
  db.ref('rooms/' + room + '/players/' + playerId).set({ position: 0 });
  listenForUpdates();
}

function rollDice() {
  const dice = Math.floor(Math.random() * 6) + 1;
  document.getElementById("diceResult").innerText = "You rolled: " + dice;

  db.ref('rooms/' + room + '/players/' + playerId).get().then(snapshot => {
    let newPos = snapshot.val().position + dice;
    db.ref('rooms/' + room + '/players/' + playerId).update({ position: newPos });
  });
}

function listenForUpdates() {
  db.ref('rooms/' + room + '/players').on('value', snapshot => {
    const players = snapshot.val();
    console.log("Current game state:", players);
  });
}