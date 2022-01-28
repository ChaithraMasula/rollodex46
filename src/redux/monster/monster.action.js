import { monsterActionTypes } from "./monster.type";

//Search monster action creator is getting us payload of username from the Home component
export const searchMonster = (username) => ({
    type : monsterActionTypes.SEARCH_MONSTER,
    payload  : username
})