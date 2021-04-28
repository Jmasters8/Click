import UpArrow from '/src/upArrow.js';
import RightArrow from '/src/rightArrow.js';
import LeftArrow from '/src/leftArrow.js';
import DownArrow from '/src/downArrow.js';

import GameInputHandler from '/src//inputHandlers/gameInput.js';
import FallingLeftArrow from '/src/fallingLeftArrow.js';
import FallingUpArrow from '/src/fallingUpArrow.js';
import FallingDownArrow from '/src/fallingDownArrow.js';
import FallingRightArrow from '/src/fallingRightArrow.js';
import LeftArrowInputHandler from '/src/inputHandlers/leftArrowInput.js';
import UpArrowInputHandler from '/src/inputHandlers/upArrowInput.js';
import DownArrowInputHandler from '/src/inputHandlers/downArrowInput.js';
import RightArrowInputHandler from '/src/inputHandlers/rightArrowInput.js';
import { checkFire } from './checkFire.js'

const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3
}

export default class Game {

  constructor(gameWidth, gameHeight) {
    // this.image = document.getElementById('img_left');
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.gameObjects = [];
    this.score = 0
    this.gameFrame = 0;
    this.game = this;
    this.gamestate = GAMESTATE.MENU
    
    this.rightArrow = new RightArrow(this);
    this.upArrow = new UpArrow(this);
    this.downArrow = new DownArrow(this);
    this.leftArrow = new LeftArrow(this);

    new GameInputHandler(this);
    
  }

  start() {
    this.gamestate = GAMESTATE.RUNNING
    playAudio()


    let fallingLeftArrows = [
      new FallingLeftArrow(this, {x: 108, y: -150}, this.leftArrow), //1
      new FallingLeftArrow(this, {x: 108, y: -920}, this.leftArrow), //6
      new FallingLeftArrow(this, {x: 108, y: -1400}, this.leftArrow), //9
      new FallingLeftArrow(this, {x: 108, y: -2350}, this.leftArrow), //14
      new FallingLeftArrow(this, {x: 108, y: -2850}, this.leftArrow), //17
      new FallingLeftArrow(this, {x: 108, y: -3520}, this.leftArrow), //25.5
      new FallingLeftArrow(this, {x: 108, y: -4000}, this.leftArrow), //26
      new FallingLeftArrow(this, {x: 108, y: -4950}, this.leftArrow), //32
      new FallingLeftArrow(this, {x: 108, y: -5280}, this.leftArrow), //34
      new FallingLeftArrow(this, {x: 108, y: -6120}, this.leftArrow), //38
      new FallingLeftArrow(this, {x: 108, y: -6720}, this.leftArrow), //42
      new FallingLeftArrow(this, {x: 108, y: -7840}, this.leftArrow), //54
      new FallingLeftArrow(this, {x: 108, y: -8230}, this.leftArrow), //58 added 70 more
      new FallingLeftArrow(this, {x: 108, y: -8560}, this.leftArrow), //62
      new FallingLeftArrow(this, {x: 108, y: -8920}, this.leftArrow), //66
      new FallingLeftArrow(this, {x: 108, y: -9150}, this.leftArrow), //68
      new FallingLeftArrow(this, {x: 108, y: -9380}, this.leftArrow), //71
      new FallingLeftArrow(this, {x: 108, y: -9980}, this.leftArrow), //79
      new FallingLeftArrow(this, {x: 108, y: -10230}, this.leftArrow), //81
      new FallingLeftArrow(this, {x: 108, y: -10580}, this.leftArrow), //84
      new FallingLeftArrow(this, {x: 108, y: -11270}, this.leftArrow), //94
      new FallingLeftArrow(this, {x: 108, y: -11750}, this.leftArrow), //102
      new FallingLeftArrow(this, {x: 108, y: -12300}, this.leftArrow), //107
      new FallingLeftArrow(this, {x: 108, y: -12750}, this.leftArrow), //112
      new FallingLeftArrow(this, {x: 108, y: -12970}, this.leftArrow), //114
      new FallingLeftArrow(this, {x: 108, y: -13320}, this.leftArrow), //118
      new FallingLeftArrow(this, {x: 108, y: -13350}, this.leftArrow), //119
      new FallingLeftArrow(this, {x: 108, y: -13380}, this.leftArrow), //120
      new FallingLeftArrow(this, {x: 108, y: -13410}, this.leftArrow), //121
      new FallingLeftArrow(this, {x: 108, y: -13440}, this.leftArrow), //122
      new FallingLeftArrow(this, {x: 108, y: -13470}, this.leftArrow), //123
      new FallingLeftArrow(this, {x: 108, y: -13960}, this.leftArrow), //127
      new FallingLeftArrow(this, {x: 108, y: -14110}, this.leftArrow), //128
      new FallingLeftArrow(this, {x: 108, y: -14300}, this.leftArrow), //129
      new FallingLeftArrow(this, {x: 108, y: -14380}, this.leftArrow), //131
      new FallingLeftArrow(this, {x: 108, y: -14930}, this.leftArrow), //137
      new FallingLeftArrow(this, {x: 108, y: -15520}, this.leftArrow), //147
      new FallingLeftArrow(this, {x: 108, y: -15860}, this.leftArrow), //151
      new FallingLeftArrow(this, {x: 108, y: -16630}, this.leftArrow), //162
      new FallingLeftArrow(this, {x: 108, y: -16790}, this.leftArrow), //164
      new FallingLeftArrow(this, {x: 108, y: -17590}, this.leftArrow), //177
      new FallingLeftArrow(this, {x: 108, y: -18240}, this.leftArrow), //183
      new FallingLeftArrow(this, {x: 108, y: -18700}, this.leftArrow), //187
      new FallingLeftArrow(this, {x: 108, y: -18950}, this.leftArrow), //189
      new FallingLeftArrow(this, {x: 108, y: -19530}, this.leftArrow), //194
      new FallingLeftArrow(this, {x: 108, y: -20000}, this.leftArrow), //198
      new FallingLeftArrow(this, {x: 108, y: -20120}, this.leftArrow), //199
      new FallingLeftArrow(this, {x: 108, y: -20840}, this.leftArrow), //202
      new FallingLeftArrow(this, {x: 108, y: -21000}, this.leftArrow), //204
      new FallingLeftArrow(this, {x: 108, y: -21080}, this.leftArrow), //205
      new FallingLeftArrow(this, {x: 108, y: -21500}, this.leftArrow), //212
      new FallingLeftArrow(this, {x: 108, y: -21660}, this.leftArrow), //214
      new FallingLeftArrow(this, {x: 108, y: -22000}, this.leftArrow) //217

      
    ];


    // for (let i = 1; i < 2; i ++) {
    //   fallingLeftArrows.push(new FallingLeftArrow(this, {x: 108, y: i * -150}, this.leftArrow))
    // }
    fallingLeftArrows.forEach(arrow => {
      new LeftArrowInputHandler(arrow)
    })


    let fallingUpArrows = [
      new FallingUpArrow(this, {x: 275, y: -650}, this.upArrow), //4
      new FallingUpArrow(this, {x: 275, y: -1100}, this.upArrow), //7
      new FallingUpArrow(this, {x: 275, y: -2100}, this.upArrow), //12
      new FallingUpArrow(this, {x: 275, y: -2500}, this.upArrow), //15
      new FallingUpArrow(this, {x: 275, y: -3030}, this.upArrow), //18
      new FallingUpArrow(this, {x: 275, y: -3100}, this.upArrow), //19
      new FallingUpArrow(this, {x: 275, y: -3170}, this.upArrow), //20
      new FallingUpArrow(this, {x: 275, y: -4300}, this.upArrow), //28
      new FallingUpArrow(this, {x: 275, y: -4630}, this.upArrow), //30
      new FallingUpArrow(this, {x: 275, y: -5630}, this.upArrow), //36
      new FallingUpArrow(this, {x: 275, y: -6430}, this.upArrow), //40
      new FallingUpArrow(this, {x: 275, y: -7760}, this.upArrow), //53
      new FallingUpArrow(this, {x: 275, y: -8080}, this.upArrow), //57
      new FallingUpArrow(this, {x: 275, y: -8470}, this.upArrow), //61
      new FallingUpArrow(this, {x: 275, y: -8760}, this.upArrow), //64
      new FallingUpArrow(this, {x: 275, y: -9460}, this.upArrow), //72
      new FallingUpArrow(this, {x: 275, y: -9500}, this.upArrow), //73
      new FallingUpArrow(this, {x: 275, y: -9540}, this.upArrow), //74
      new FallingUpArrow(this, {x: 275, y: -9580}, this.upArrow), //75
      new FallingUpArrow(this, {x: 275, y: -9820}, this.upArrow), //77
      new FallingUpArrow(this, {x: 275, y: -10410}, this.upArrow), //82
      new FallingUpArrow(this, {x: 275, y: -10740}, this.upArrow), //86
      new FallingUpArrow(this, {x: 275, y: -10780}, this.upArrow), //87
      new FallingUpArrow(this, {x: 275, y: -10820}, this.upArrow), //88
      new FallingUpArrow(this, {x: 275, y: -10860}, this.upArrow), //89
      new FallingUpArrow(this, {x: 275, y: -10900}, this.upArrow), //90
      new FallingUpArrow(this, {x: 275, y: -11180}, this.upArrow), //93
      new FallingUpArrow(this, {x: 275, y: -11850}, this.upArrow), //103
      new FallingUpArrow(this, {x: 275, y: -12150}, this.upArrow), //105
      new FallingUpArrow(this, {x: 275, y: -12360}, this.upArrow), //108
      new FallingUpArrow(this, {x: 275, y: -12670}, this.upArrow), //111
      new FallingUpArrow(this, {x: 275, y: -13140}, this.upArrow), //116
      new FallingUpArrow(this, {x: 275, y: -13740}, this.upArrow), //125
      new FallingUpArrow(this, {x: 275, y: -14340}, this.upArrow), //130
      new FallingUpArrow(this, {x: 275, y: -14420}, this.upArrow), //132
      new FallingUpArrow(this, {x: 275, y: -14840}, this.upArrow), //136
      new FallingUpArrow(this, {x: 275, y: -15130}, this.upArrow), //139
      new FallingUpArrow(this, {x: 275, y: -15690}, this.upArrow), //149
      new FallingUpArrow(this, {x: 275, y: -15960}, this.upArrow), //152
      new FallingUpArrow(this, {x: 275, y: -16160}, this.upArrow), //154
      new FallingUpArrow(this, {x: 275, y: -16360}, this.upArrow), //156
      new FallingUpArrow(this, {x: 275, y: -16380}, this.upArrow), //157
      new FallingUpArrow(this, {x: 275, y: -16410}, this.upArrow), //158
      new FallingUpArrow(this, {x: 275, y: -16430}, this.upArrow), //159
      new FallingUpArrow(this, {x: 275, y: -16460}, this.upArrow), //160
      new FallingUpArrow(this, {x: 275, y: -16960}, this.upArrow), //166
      new FallingUpArrow(this, {x: 275, y: -17000}, this.upArrow), //167
      new FallingUpArrow(this, {x: 275, y: -17040}, this.upArrow), //168
      new FallingUpArrow(this, {x: 275, y: -17500}, this.upArrow), //176
      new FallingUpArrow(this, {x: 275, y: -17690}, this.upArrow), //178
      new FallingUpArrow(this, {x: 275, y: -17880}, this.upArrow), //180
      new FallingUpArrow(this, {x: 275, y: -18350}, this.upArrow), //184
      new FallingUpArrow(this, {x: 275, y: -18820}, this.upArrow), //188
      new FallingUpArrow(this, {x: 275, y: -19200}, this.upArrow), //191 
      new FallingUpArrow(this, {x: 275, y: -19610}, this.upArrow), //195
      new FallingUpArrow(this, {x: 275, y: -20440}, this.upArrow), //198
      new FallingUpArrow(this, {x: 275, y: -20540}, this.upArrow), //199
      new FallingUpArrow(this, {x: 275, y: -20940}, this.upArrow), //203
      new FallingUpArrow(this, {x: 275, y: -22190}, this.upArrow) //219
    ];


    // for (let i = 1; i < 2; i++) {
    //   fallingUpArrows.push(new FallingUpArrow(this, {x: 275, y: i * -600}, this.upArrow))
    // }
    fallingUpArrows.forEach(arrow => {
      new UpArrowInputHandler(arrow)
    })


    let fallingDownArrows = [
      new FallingDownArrow(this, {x: 442, y: -500}, this.downArrow), //3
      new FallingDownArrow(this, {x: 442, y: -1730}, this.downArrow), //11
      new FallingDownArrow(this, {x: 442, y: -2200}, this.downArrow), //13
      new FallingDownArrow(this, {x: 442, y: -3240}, this.downArrow), //21
      new FallingDownArrow(this, {x: 442, y: -3310}, this.downArrow), //22
      new FallingDownArrow(this, {x: 442, y: -3380}, this.downArrow), //23
      new FallingDownArrow(this, {x: 442, y: -3450}, this.downArrow), //24
      new FallingDownArrow(this, {x: 442, y: -3520}, this.downArrow), //25
      new FallingDownArrow(this, {x: 442, y: -4470}, this.downArrow), //29
      new FallingDownArrow(this, {x: 442, y: -4790}, this.downArrow), //31
      new FallingDownArrow(this, {x: 442, y: -5430}, this.downArrow), //35
      new FallingDownArrow(this, {x: 442, y: -6590}, this.downArrow), //41
      new FallingDownArrow(this, {x: 442, y: -6910}, this.downArrow), //43
      new FallingDownArrow(this, {x: 442, y: -6970}, this.downArrow), //43.5
      new FallingDownArrow(this, {x: 442, y: -7040}, this.downArrow), //43.5
      new FallingDownArrow(this, {x: 442, y: -8000}, this.downArrow), //56
      new FallingDownArrow(this, {x: 442, y: -8310}, this.downArrow), //59
      new FallingDownArrow(this, {x: 442, y: -9000}, this.downArrow), //67
      new FallingDownArrow(this, {x: 442, y: -9300}, this.downArrow), //70
      new FallingDownArrow(this, {x: 442, y: -9740}, this.downArrow), //76
      new FallingDownArrow(this, {x: 442, y: -9900}, this.downArrow), //78
      new FallingDownArrow(this, {x: 442, y: -10500}, this.downArrow), //83
      new FallingDownArrow(this, {x: 442, y: -11090}, this.downArrow), //92
      new FallingDownArrow(this, {x: 442, y: -11360}, this.downArrow), //95
      new FallingDownArrow(this, {x: 442, y: -11400}, this.downArrow), //96
      new FallingDownArrow(this, {x: 442, y: -11440}, this.downArrow), //97
      new FallingDownArrow(this, {x: 442, y: -11480}, this.downArrow), //98
      new FallingDownArrow(this, {x: 442, y: -11520}, this.downArrow), //99
      new FallingDownArrow(this, {x: 442, y: -11560}, this.downArrow), //100
      new FallingDownArrow(this, {x: 442, y: -12590}, this.downArrow), //110
      new FallingDownArrow(this, {x: 442, y: -13230}, this.downArrow), //117
      new FallingDownArrow(this, {x: 442, y: -13630}, this.downArrow), //124
      new FallingDownArrow(this, {x: 442, y: -15250}, this.downArrow), //140
      new FallingDownArrow(this, {x: 442, y: -15280}, this.downArrow), //141
      new FallingDownArrow(this, {x: 442, y: -15310}, this.downArrow), //142
      new FallingDownArrow(this, {x: 442, y: -15340}, this.downArrow), //143
      new FallingDownArrow(this, {x: 442, y: -15370}, this.downArrow), //144
      new FallingDownArrow(this, {x: 442, y: -15400}, this.downArrow), //145
      new FallingDownArrow(this, {x: 442, y: -15430}, this.downArrow), //146 END OF PART 1
      new FallingDownArrow(this, {x: 442, y: -15610}, this.downArrow), //148
      new FallingDownArrow(this, {x: 442, y: -16060}, this.downArrow), //153
      new FallingDownArrow(this, {x: 442, y: -16260}, this.downArrow), //155
      new FallingDownArrow(this, {x: 442, y: -17100}, this.downArrow), //169
      new FallingDownArrow(this, {x: 442, y: -17140}, this.downArrow), //170
      new FallingDownArrow(this, {x: 442, y: -17180}, this.downArrow), //171
      new FallingDownArrow(this, {x: 442, y: -17220}, this.downArrow), //172
      new FallingDownArrow(this, {x: 442, y: -17260}, this.downArrow), //173
      new FallingDownArrow(this, {x: 442, y: -17300}, this.downArrow), //174
      new FallingDownArrow(this, {x: 442, y: -18010}, this.downArrow), //181
      new FallingDownArrow(this, {x: 442, y: -18570}, this.downArrow), //186
      new FallingDownArrow(this, {x: 442, y: -19330}, this.downArrow), //192
      new FallingDownArrow(this, {x: 442, y: -20240}, this.downArrow), //196
      new FallingDownArrow(this, {x: 442, y: -20340}, this.downArrow), //197
      new FallingDownArrow(this, {x: 442, y: -21160}, this.downArrow), //206
      new FallingDownArrow(this, {x: 442, y: -21200}, this.downArrow), //207
      new FallingDownArrow(this, {x: 442, y: -21240}, this.downArrow), //208
      new FallingDownArrow(this, {x: 442, y: -21280}, this.downArrow), //209
      new FallingDownArrow(this, {x: 442, y: -21320}, this.downArrow), //210
      new FallingDownArrow(this, {x: 442, y: -21890}, this.downArrow) //216

      
    ];


    // for (let i = 1; i < 2; i++) {
    //   fallingDownArrows.push(new FallingDownArrow(this, {x: 442, y: i * -500}, this.downArrow))
    // }
    fallingDownArrows.forEach(arrow => {
      new DownArrowInputHandler(arrow)
    })

    let fallingRightArrows = [
      new FallingRightArrow(this, {x: 609, y: -280}, this.rightArrow), //2
      new FallingRightArrow(this, {x: 609, y: -800}, this.rightArrow), //5
      new FallingRightArrow(this, {x: 609, y: -1250}, this.rightArrow), //8
      new FallingRightArrow(this, {x: 609, y: -1560}, this.rightArrow), //10
      new FallingRightArrow(this, {x: 609, y: -2650}, this.rightArrow), //16
      new FallingRightArrow(this, {x: 609, y: -3680}, this.rightArrow), //25.5
      new FallingRightArrow(this, {x: 609, y: -4150}, this.rightArrow), //27
      new FallingRightArrow(this, {x: 609, y: -5100}, this.rightArrow), //33
      new FallingRightArrow(this, {x: 609, y: -5990}, this.rightArrow), //37
      new FallingRightArrow(this, {x: 609, y: -6290}, this.rightArrow), //39
      new FallingRightArrow(this, {x: 609, y: -7110}, this.rightArrow), //44
      new FallingRightArrow(this, {x: 609, y: -7180}, this.rightArrow), //45
      new FallingRightArrow(this, {x: 609, y: -7250}, this.rightArrow), //46
      new FallingRightArrow(this, {x: 609, y: -7320}, this.rightArrow), //47
      new FallingRightArrow(this, {x: 609, y: -7390}, this.rightArrow), //48
      new FallingRightArrow(this, {x: 609, y: -7460}, this.rightArrow), //49
      new FallingRightArrow(this, {x: 609, y: -7530}, this.rightArrow), //50
      new FallingRightArrow(this, {x: 609, y: -7600}, this.rightArrow), //51
      new FallingRightArrow(this, {x: 609, y: -7670}, this.rightArrow), //52
      new FallingRightArrow(this, {x: 609, y: -7920}, this.rightArrow), //55
      new FallingRightArrow(this, {x: 609, y: -8390}, this.rightArrow), //60
      new FallingRightArrow(this, {x: 609, y: -8690}, this.rightArrow), //63
      new FallingRightArrow(this, {x: 609, y: -8840}, this.rightArrow), //65
      new FallingRightArrow(this, {x: 609, y: -9210}, this.rightArrow), //69
      new FallingRightArrow(this, {x: 609, y: -10110}, this.rightArrow), //80
      new FallingRightArrow(this, {x: 609, y: -10660}, this.rightArrow), //85
      new FallingRightArrow(this, {x: 609, y: -11000}, this.rightArrow), //91
      new FallingRightArrow(this, {x: 609, y: -11650}, this.rightArrow), //101
      new FallingRightArrow(this, {x: 609, y: -11940}, this.rightArrow), //104
      new FallingRightArrow(this, {x: 609, y: -12240}, this.rightArrow), //106
      new FallingRightArrow(this, {x: 609, y: -12470}, this.rightArrow), //109
      new FallingRightArrow(this, {x: 609, y: -12850}, this.rightArrow), //113
      new FallingRightArrow(this, {x: 609, y: -13050}, this.rightArrow), //115
      new FallingRightArrow(this, {x: 609, y: -13860}, this.rightArrow), //126
      new FallingRightArrow(this, {x: 609, y: -14540}, this.rightArrow), //133
      new FallingRightArrow(this, {x: 609, y: -14580}, this.rightArrow), //134
      new FallingRightArrow(this, {x: 609, y: -14620}, this.rightArrow), //135
      new FallingRightArrow(this, {x: 609, y: -15040}, this.rightArrow), //138
      new FallingRightArrow(this, {x: 609, y: -15770}, this.rightArrow), //150
      new FallingRightArrow(this, {x: 609, y: -16550}, this.rightArrow), //161
      new FallingRightArrow(this, {x: 609, y: -16710}, this.rightArrow), //163
      new FallingRightArrow(this, {x: 609, y: -16870}, this.rightArrow), //165
      new FallingRightArrow(this, {x: 609, y: -17410}, this.rightArrow), //175
      new FallingRightArrow(this, {x: 609, y: -17790}, this.rightArrow), //179
      new FallingRightArrow(this, {x: 609, y: -18110}, this.rightArrow), //182
      new FallingRightArrow(this, {x: 609, y: -18460}, this.rightArrow), //185
      new FallingRightArrow(this, {x: 609, y: -19070}, this.rightArrow), //190
      new FallingRightArrow(this, {x: 609, y: -19450}, this.rightArrow), //193
      new FallingRightArrow(this, {x: 609, y: -19750}, this.rightArrow), //196
      new FallingRightArrow(this, {x: 609, y: -19870}, this.rightArrow), //197
      new FallingRightArrow(this, {x: 609, y: -20660}, this.rightArrow), //200
      new FallingRightArrow(this, {x: 609, y: -20760}, this.rightArrow),//201
      new FallingRightArrow(this, {x: 609, y: -21420}, this.rightArrow), //211
      new FallingRightArrow(this, {x: 609, y: -21580}, this.rightArrow), //213
      new FallingRightArrow(this, {x: 609, y: -21760}, this.rightArrow), //215
      new FallingRightArrow(this, {x: 609, y: -22110}, this.rightArrow) //218
    ];

    // for (let i = 1; i < 2; i++) {
    //   fallingRightArrows.push(new FallingRightArrow(this, {x: 609, y: i * -240}, this.rightArrow))
    // }
    
    fallingRightArrows.forEach(arrow => {
      new RightArrowInputHandler(arrow)
    })









    this.movingObjects = [
      // this.fallingLeftArrow,
      // arrow
      ...fallingLeftArrows,
      ...fallingUpArrows,
      ...fallingDownArrows,
      ...fallingRightArrows
    ]

    this.gameObjects = [
      this.rightArrow,
      this.upArrow,
      this.downArrow,
      this.leftArrow,
      // this.fallingLeftArrow,
      // arrow
      ...fallingLeftArrows,
      ...fallingUpArrows,
      ...fallingDownArrows,
      ...fallingRightArrows
    ]
  }


  update(deltaTime) {

    if (this.gamestate === GAMESTATE.PAUSED || this.gamestate === GAMESTATE.MENU) return;

    this.movingObjects.forEach(object => {
      object.update(deltaTime)
    })

    // this.fallingLeftArrow.update(deltaTime)
    // this.updateFallingLeftArrows(deltaTime)
  }

  // drawFallingLeftArrow(ctx) {
  //   this.fallingLeftArrow.draw(ctx);
  // }

  // drawFallingLeftArrows(ctx) {
  //   if (this.gameFrame % 50 === 0) {
  //     this.leftArrows.push(new FallingLeftArrow(this))
  //     console.log(this.leftArrows.length)
  //   }
  //   for (let i = 0; i < this.leftArrows.length; i++) {
  //     this.leftArrows[i].draw(ctx);
  //   }
  // }

  // updateFallingLeftArrows(deltaTime) {
  //   if (this.gameFrame % 120 === 0) {
  //     this.leftArrows.push(new FallingLeftArrow(this))
  //     console.log(this.leftArrows.length)
  //   }
  //   for (let i = 0; i < this.leftArrows.length; i++) {
  //     this.leftArrows[i].update(deltaTime);
  //   }
  // }

  draw(ctx) {
    // this.fallingLeftArrow.draw(ctx);
    // this.rightArrow.draw(ctx);
    // this.upArrow.draw(ctx);
    // this.leftArrow.draw(ctx);
    // this.downArrow.draw(ctx);
    // this.fallingLeftArrow.draw(ctx);

    this.gameObjects.forEach(object => {
      object.draw(ctx)
    })

    if (this.gamestate === GAMESTATE.PAUSED) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
      ctx.fill();

      ctx.font = "30px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2)
    }

    if (this.gamestate === GAMESTATE.MENU) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "rgba(0, 0, 0, 1)";
      ctx.fill();

      ctx.font = "30px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("Press SPACEBAR to Start", this.gameWidth / 2, this.gameHeight / 2)
    }

    
  }

  togglePause() {
    if (this.gamestate === GAMESTATE.PAUSED) {
      this.gamestate = GAMESTATE.RUNNING
      playAudio()
      console.log(this.score)
    } else {
      this.gamestate = GAMESTATE.PAUSED;
      playAudio()
    }
  }

  handleScore(ctx) {
    ctx.fillStyle = 'black';
    ctx.strokeStyle = 'black';
    ctx.font = '30px Veradana';
    ctx.fillText('Score:', 360, 533);
    ctx.fillText(this.score, 415, 535)
  }

}