import {
    ALL_WEAPONS,
    ALL_AMMO,
    ALL_KEYS,
    PISTOL,
    BULLETS,
} from '../constants';
import player from '../../maps/player';

const initState = {
    godMode: false,
    strafe: false,
    dead: false,
    selectedWeapon: PISTOL,
    ammo: { [BULLETS]: 50 },
    x: 1,
    y: 1,
    rotDeg: 0,
    ...player,
	moveSpeed: 0.2,
    speed: 0,
    rotSpeed: 4,
    dir: 0,
    health: 47,
    armor: 143,
};

export default (prevState = initState, action) => {
    const {
        type,
        payload,
    } = action;

    switch (type) {
        default: return prevState;
        case 'INIT_PLAYER': {
            return initState;
        }
        case 'TOGGLE_GODMODE': {
            return {
                ...prevState,
                health: 100,
                godMode: !prevState.godMode,
            };
        }
        case 'CHEAT_AMMO': {
            return {
                ...prevState,
                health: 100,
                armor: 200,
                backpack: true,
                weapons: ALL_WEAPONS,
                ammo: ALL_AMMO,
            };
        }
        case 'CHEAT_AMMO_AND_KEYS': {
            return {
                ...prevState,
                health: 100,
                armor: 200,
                backpack: true,
                weapons: ALL_WEAPONS,
                ammo: ALL_AMMO,
                keys: ALL_KEYS,
            };
        }
        case 'SET_PLAYER_COORDINATES': {
            return { ...payload };
        }
        case 'MOVE_PLAYER_FORWARD': {
            return {
                ...prevState,
                speed: 1,
            };
        }
        case 'MOVE_PLAYER_BACKWARD': {
            return {
                ...prevState,
                speed: -1,
            };
        }
        case 'ROTATE_PLAYER_LEFT': {
            return {
                ...prevState,
                dir: -1,
            };
        }
        case 'ROTATE_PLAYER_RIGHT': {
            return {
                ...prevState,
                dir: 1,
            };
        }
        case 'START_PLAYER_STRAFE': {
            return {
                ...prevState,
                strafe: true,
            };
        }
        case 'STOP_PLAYER_STRAFE': {
            return {
                ...prevState,
                strafe: false,
            };
        }
        case 'STOP_PLAYER_SPEED': {
            return {
                ...prevState,
                speed: 0,
            };
        }
        case 'STOP_PLAYER_DIRECTION': {
            return {
                ...prevState,
                dir: 0,
            };
        }
    }
};
