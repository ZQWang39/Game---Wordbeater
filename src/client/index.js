import { init } from './js/app';
import { selectGameLevel } from './js/app';
import { clearFromLocalStorage } from './js/app';


import './styles/style.scss';

//Load Game
window.addEventListener('load', init);

 // Choose game level
 const gameLevel = document.getElementById('level');
gameLevel.addEventListener('change',selectGameLevel);


 //Clear Game records:
 const clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click',clearFromLocalStorage);


export {
   init,
   selectGameLevel,
   clearFromLocalStorage
}