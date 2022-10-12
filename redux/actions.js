import store from "./store";
import {
  START_GAME,
  RESUME_GAME,
  END_GAME,
  SHOW_RANDOM_GAME,
  NEW_ANSWER,
  CLEAR_USER_SCORE,
  START_LOADING,
  SHOW_HINT,
  NEW_GAME_DATABASE,
  REMOVE_ITEM,
  SHOW_POPUP,
  SET_HINT_COUNTER,
  NEW_USER_NAME,
  NEW_GLOBAL_SCORE,
  SWITCH_LOADING_GLOBAL_SCORE,
  NEW_HISTORY_SCORE,
  SWITCH_LOADING_HISTORY_SCORE,
} from "./const";

const startGame = () => ({
  type: START_GAME,
});

const resumeGame = () => ({
  type: RESUME_GAME,
});

const endGame = () => ({
  type: END_GAME,
});

const pushNewAnswer = (answer) => ({
  type: NEW_ANSWER,
  answer,
});

const showRandomGame = (game) => ({
  type: SHOW_RANDOM_GAME,
  game,
});

const newUserName = (name) => ({
  type: NEW_USER_NAME,
  name,
});

const startLoading = () => ({
  type: START_LOADING,
});

const showHint = (hint) => ({
  type: SHOW_HINT,
  hint,
});

const clearUserScore = () => ({
  type: CLEAR_USER_SCORE,
});

const newGameDatabase = (database) => ({
  type: NEW_GAME_DATABASE,
  database,
});

const removeItemFromDatabase = (index) => ({
  type: REMOVE_ITEM,
  index,
});

const showPopup = (popup) => ({
  type: SHOW_POPUP,
  popup,
});

const setHintCounter = () => ({
  type: SET_HINT_COUNTER,
});

const updateGlobalScore = (global_score) => ({
  type: NEW_GLOBAL_SCORE,
  global_score,
});

const switchLoadingGlobalScore = () => ({
  type: SWITCH_LOADING_GLOBAL_SCORE,
});

const updateHistoryScore = (history_score) => ({
  type: NEW_HISTORY_SCORE,
  history_score,
});

const switchLoadingHistoryScore = () => ({
  type: SWITCH_LOADING_HISTORY_SCORE,
});

function loadNewQuestion(difficulty = 0) {
  return async function (dispatch) {
    const game_database = await store.getState().game_database;
    if (game_database.length === 0) {
      difficulty ? fetchNewGameDatabase(difficulty) : dispatch(endGame());
    } else {
      const randomIndex = Math.floor(Math.random() * game_database.length);
      dispatch(showRandomGame(game_database[randomIndex]));
      dispatch(removeItemFromDatabase(randomIndex));
    }
    async function fetchNewGameDatabase(difficulty) {
      const database_array = [];
      try {
        const apishot = await fetch(
          `https://geek.cerassus.usermd.net/database/${difficulty}`
        );
        const response = await apishot.json();
        database_array.push(...response);
      } catch (error) {
        console.log(error);
        return [];
      }
      await dispatch(newGameDatabase(database_array));
      return dispatch(loadNewQuestion());
    }
  };
}

// fetch for global user score and return it to redux
// if global user score is not changed do not rerender component

function replaceGlobalScore() {
  return async function (dispatch) {
    const startFetchingForScores = async () => {
      const res = await fetch("https://gamegeek.frackment.id/api/leaderboard");
      return await res.json();
    };
    // const global_score = await store.getState().global_score
    // if(global_score.length === 0) {
    //     dispatch(switchLoadingGlobalScore())
    //     const jason = await startFetchingForScores()
    //     await dispatch(updateGlobalScore(jason))
    //     dispatch(switchLoadingGlobalScore())
    // } else {
    //     const jason = await startFetchingForScores()
    //     for(let i=0; i < global_score.length; i++) {
    //         if(global_score[i].Name !== jason[i].Name) {
    //             dispatch(switchLoadingGlobalScore())
    //             await dispatch(updateGlobalScore(jason))
    //             dispatch(switchLoadingGlobalScore())
    //             break
    //         }
    //     }
    // }
    dispatch(switchLoadingGlobalScore());
    const jason = await startFetchingForScores();
    await dispatch(updateGlobalScore(jason.data));
    dispatch(switchLoadingGlobalScore());
  };
}

const loadUsername = async () => {
  const user_name = await store.getState().user_name;
  return user_name;
};

function loadHistoryPoints(address) {
  return async function (dispatch) {
    const fetchData = async () => {
      const res = await fetch("https://gamegeek.frackment.id/api/points/" + address);
      return await res.json();
    };
    dispatch(switchLoadingHistoryScore());
    const jason = await fetchData();
    await dispatch(updateHistoryScore(jason));
    dispatch(switchLoadingHistoryScore());
  };
}

export {
  startGame,
  resumeGame,
  endGame,
  pushNewAnswer,
  showRandomGame,
  startLoading,
  showHint,
  clearUserScore,
  newGameDatabase,
  removeItemFromDatabase,
  showPopup,
  setHintCounter,
  loadNewQuestion,
  newUserName,
  replaceGlobalScore,
  loadUsername,
  loadHistoryPoints,
};
