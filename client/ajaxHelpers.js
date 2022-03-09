// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = "2202-ftb-et-web-ft";
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(`${APIURL}/players`);
    const result = await response.json();
    if (result.error) throw result.error;
    return result.data.players;
  } catch (err) {
    console.error("THIS IS ERROR MESSAGE. RESULT ERROR RETURNED ERROR", err);
  }
};

export const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(`${APIURL}players/${playerId}`);
    const result = await response.json();
    if (result.error) throw result.error;
    return result.data.player;
  } catch (err) {
    console.error("ERROR: fetchSinglePlayer", err);
  }
};

export const addNewPlayer = async (playerObj) => {
  try {
    const response = await fetch(`${APIURL}players/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playerObj),
    });
    const result = await response.json();
    if (result.error) throw result.error;
    return result.data.player;
  } catch (err) {
    console.error("ERROR: addNewPlayer", err);
  }
};

export const removePlayer = async (playerId) => {
  try {
    console.log("remove runs");

    const response = await fetch(`${APIURL}/players/${playerId}`, {
      method: "DELETE",
    });
    const result = await response.json();
    if (result.error) throw result.error;
    return;
  } catch (err) {
    console.error("ERROR: removePlayer", err);
  }
};
