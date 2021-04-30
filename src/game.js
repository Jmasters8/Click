import UpArrow from './upArrow.js';
import RightArrow from './rightArrow.js';
import LeftArrow from './leftArrow.js';
import DownArrow from './downArrow.js';

import GameInputHandler from './inputHandlers/gameInput.js';
import FallingLeftArrow from './fallingLeftArrow.js';
import FallingUpArrow from './fallingUpArrow.js';
import FallingDownArrow from './fallingDownArrow.js';
import FallingRightArrow from './fallingRightArrow.js';
import LeftArrowInputHandler from './inputHandlers/leftArrowInput.js';
import UpArrowInputHandler from './inputHandlers/upArrowInput.js';
import DownArrowInputHandler from './inputHandlers/downArrowInput.js';
import RightArrowInputHandler from './inputHandlers/rightArrowInput.js';
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
    this.missed = 0
    this.gameFrame = 0;
    this.game = this;
    this.gamestate = GAMESTATE.MENU
    this.background = document.getElementById('gameScreen')
    this.rightArrow = new RightArrow(this);
    this.upArrow = new UpArrow(this);
    this.downArrow = new DownArrow(this);
    this.leftArrow = new LeftArrow(this);
    new GameInputHandler(this);
    this.audio = "off"
  }

  start() {
    this.gamestate = GAMESTATE.RUNNING
    playAudio()
    this.audio = "on"
    console.log(this.background.display)
    document.getElementById('gameScreen').style.width = 200;


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
      new FallingLeftArrow(this, {x: 108, y: -22000}, this.leftArrow), //217
      new FallingLeftArrow(this, {x: 108, y: -22370}, this.leftArrow), //221
      new FallingLeftArrow(this, {x: 108, y: -22480}, this.leftArrow), //222
      new FallingLeftArrow(this, {x: 108, y: -23590}, this.leftArrow), //233
      new FallingLeftArrow(this, {x: 108, y: -23690}, this.leftArrow), //234
      new FallingLeftArrow(this, {x: 108, y: -24030}, this.leftArrow), //237
      new FallingLeftArrow(this, {x: 108, y: -24130}, this.leftArrow), //238
      new FallingLeftArrow(this, {x: 108, y: -24530}, this.leftArrow), //242
      new FallingLeftArrow(this, {x: 108, y: -24950}, this.leftArrow), //246
      new FallingLeftArrow(this, {x: 108, y: -25030}, this.leftArrow), //247
      new FallingLeftArrow(this, {x: 108, y: -25440}, this.leftArrow), //254
      new FallingLeftArrow(this, {x: 108, y: -26350}, this.leftArrow), //263
      new FallingLeftArrow(this, {x: 108, y: -26450}, this.leftArrow), //264
      new FallingLeftArrow(this, {x: 108, y: -27100}, this.leftArrow), //270
      new FallingLeftArrow(this, {x: 108, y: -27140}, this.leftArrow), //271
      new FallingLeftArrow(this, {x: 108, y: -27180}, this.leftArrow), //272
      new FallingLeftArrow(this, {x: 108, y: -27220}, this.leftArrow), //273
      new FallingLeftArrow(this, {x: 108, y: -27260}, this.leftArrow), //274
      new FallingLeftArrow(this, {x: 108, y: -27300}, this.leftArrow), //275
      new FallingLeftArrow(this, {x: 108, y: -27340}, this.leftArrow), //276
      new FallingLeftArrow(this, {x: 108, y: -27380}, this.leftArrow), //277
      new FallingLeftArrow(this, {x: 108, y: -27420}, this.leftArrow), //278
      new FallingLeftArrow(this, {x: 108, y: -27460}, this.leftArrow), //279
      new FallingLeftArrow(this, {x: 108, y: -27500}, this.leftArrow), //280
      new FallingLeftArrow(this, {x: 108, y: -27540}, this.leftArrow), //281
      new FallingLeftArrow(this, {x: 108, y: -28330}, this.leftArrow), //285
      new FallingLeftArrow(this, {x: 108, y: -28630}, this.leftArrow), //287
      new FallingLeftArrow(this, {x: 108, y: -29410}, this.leftArrow), //292
      new FallingLeftArrow(this, {x: 108, y: -29450}, this.leftArrow), //293
      new FallingLeftArrow(this, {x: 108, y: -29490}, this.leftArrow), //294
      new FallingLeftArrow(this, {x: 108, y: -29530}, this.leftArrow), //295
      new FallingLeftArrow(this, {x: 108, y: -29570}, this.leftArrow), //296
      new FallingLeftArrow(this, {x: 108, y: -30110}, this.leftArrow), //299
      new FallingLeftArrow(this, {x: 108, y: -30750}, this.leftArrow), //303
      new FallingLeftArrow(this, {x: 108, y: -30790}, this.leftArrow), //304
      new FallingLeftArrow(this, {x: 108, y: -30830}, this.leftArrow), //305
      new FallingLeftArrow(this, {x: 108, y: -30870}, this.leftArrow), //306
      new FallingLeftArrow(this, {x: 108, y: -30910}, this.leftArrow), //307
      new FallingLeftArrow(this, {x: 108, y: -31400}, this.leftArrow), //316
      new FallingLeftArrow(this, {x: 108, y: -32080}, this.leftArrow), //320
      new FallingLeftArrow(this, {x: 108, y: -32700}, this.leftArrow), //324
      new FallingLeftArrow(this, {x: 108, y: -33010}, this.leftArrow), //326
      new FallingLeftArrow(this, {x: 108, y: -34170}, this.leftArrow), //331
      new FallingLeftArrow(this, {x: 108, y: -35000}, this.leftArrow), //340
      new FallingLeftArrow(this, {x: 108, y: -35040}, this.leftArrow), //341
      new FallingLeftArrow(this, {x: 108, y: -35080}, this.leftArrow), //342
      new FallingLeftArrow(this, {x: 108, y: -35120}, this.leftArrow), //343
      new FallingLeftArrow(this, {x: 108, y: -35160}, this.leftArrow), //344
      new FallingLeftArrow(this, {x: 108, y: -35200}, this.leftArrow), //345
      new FallingLeftArrow(this, {x: 108, y: -35240}, this.leftArrow), //346
      new FallingLeftArrow(this, {x: 108, y: -35280}, this.leftArrow), //347
      new FallingLeftArrow(this, {x: 108, y: -35320}, this.leftArrow), //348
      new FallingLeftArrow(this, {x: 108, y: -35680}, this.leftArrow), //351
      new FallingLeftArrow(this, {x: 108, y: -36240}, this.leftArrow), //356
      new FallingLeftArrow(this, {x: 108, y: -36530}, this.leftArrow), //359
      new FallingLeftArrow(this, {x: 108, y: -36980}, this.leftArrow), //364
      new FallingLeftArrow(this, {x: 108, y: -37500}, this.leftArrow), //372
      new FallingLeftArrow(this, {x: 108, y: -38210}, this.leftArrow), //378
      new FallingLeftArrow(this, {x: 108, y: -38710}, this.leftArrow), //387
      new FallingLeftArrow(this, {x: 108, y: -39110}, this.leftArrow), //391
      new FallingLeftArrow(this, {x: 108, y: -39150}, this.leftArrow), //392
      new FallingLeftArrow(this, {x: 108, y: -39190}, this.leftArrow), //393
      new FallingLeftArrow(this, {x: 108, y: -39230}, this.leftArrow), //394
      new FallingLeftArrow(this, {x: 108, y: -39270}, this.leftArrow), //395
      new FallingLeftArrow(this, {x: 108, y: -39310}, this.leftArrow), //396
      new FallingLeftArrow(this, {x: 108, y: -39570}, this.leftArrow), //400
      new FallingLeftArrow(this, {x: 108, y: -39950}, this.leftArrow), //404
      new FallingLeftArrow(this, {x: 108, y: -40350}, this.leftArrow), //408
      new FallingLeftArrow(this, {x: 108, y: -40760}, this.leftArrow), //413
      new FallingLeftArrow(this, {x: 108, y: -41400}, this.leftArrow), //423
      new FallingLeftArrow(this, {x: 108, y: -41500}, this.leftArrow), //425
      new FallingLeftArrow(this, {x: 108, y: -42080}, this.leftArrow), //430
      new FallingLeftArrow(this, {x: 108, y: -42700}, this.leftArrow), //440
      new FallingLeftArrow(this, {x: 108, y: -43320}, this.leftArrow), //449
      new FallingLeftArrow(this, {x: 108, y: -43380}, this.leftArrow), //451
      new FallingLeftArrow(this, {x: 108, y: -43470}, this.leftArrow), //453
      new FallingLeftArrow(this, {x: 108, y: -44020}, this.leftArrow), //459
      new FallingLeftArrow(this, {x: 108, y: -44130}, this.leftArrow), //460
      new FallingLeftArrow(this, {x: 108, y: -44410}, this.leftArrow), //464
      new FallingLeftArrow(this, {x: 108, y: -44720}, this.leftArrow), //467
      new FallingLeftArrow(this, {x: 108, y: -44860}, this.leftArrow), //468
      new FallingLeftArrow(this, {x: 108, y: -45320}, this.leftArrow), //477
      new FallingLeftArrow(this, {x: 108, y: -45540}, this.leftArrow), //480
      new FallingLeftArrow(this, {x: 108, y: -45970}, this.leftArrow), //484
      new FallingLeftArrow(this, {x: 108, y: -46070}, this.leftArrow), //486
      new FallingLeftArrow(this, {x: 108, y: -46460}, this.leftArrow), //490
      new FallingLeftArrow(this, {x: 108, y: -46840}, this.leftArrow), //493
      new FallingLeftArrow(this, {x: 108, y: -47490}, this.leftArrow), //501
      new FallingLeftArrow(this, {x: 108, y: -47590}, this.leftArrow), //502
      new FallingLeftArrow(this, {x: 108, y: -47800}, this.leftArrow), //504
      new FallingLeftArrow(this, {x: 108, y: -48130}, this.leftArrow), //507
      new FallingLeftArrow(this, {x: 108, y: -48260}, this.leftArrow), //508
      new FallingLeftArrow(this, {x: 108, y: -48730}, this.leftArrow), //512
      new FallingLeftArrow(this, {x: 108, y: -48840}, this.leftArrow), //513
      new FallingLeftArrow(this, {x: 108, y: -49380}, this.leftArrow), //522
      new FallingLeftArrow(this, {x: 108, y: -49850}, this.leftArrow), //526
      new FallingLeftArrow(this, {x: 108, y: -49970}, this.leftArrow), //528
      new FallingLeftArrow(this, {x: 108, y: -50590}, this.leftArrow), //534
      new FallingLeftArrow(this, {x: 108, y: -51100}, this.leftArrow), //540
      new FallingLeftArrow(this, {x: 108, y: -51790}, this.leftArrow), //547
      new FallingLeftArrow(this, {x: 108, y: -52140}, this.leftArrow), //551
      new FallingLeftArrow(this, {x: 108, y: -52460}, this.leftArrow), //555
      new FallingLeftArrow(this, {x: 108, y: -52760}, this.leftArrow), //561
      new FallingLeftArrow(this, {x: 108, y: -53100}, this.leftArrow), //567
      new FallingLeftArrow(this, {x: 108, y: -53500}, this.leftArrow), //572
      new FallingLeftArrow(this, {x: 108, y: -53850}, this.leftArrow), //576
      new FallingLeftArrow(this, {x: 108, y: -54650}, this.leftArrow), //587
      new FallingLeftArrow(this, {x: 108, y: -54700}, this.leftArrow), //587
      new FallingLeftArrow(this, {x: 108, y: -54750}, this.leftArrow), //587
      new FallingLeftArrow(this, {x: 108, y: -54800}, this.leftArrow), //587
      new FallingLeftArrow(this, {x: 108, y: -54850}, this.leftArrow), //587
      new FallingLeftArrow(this, {x: 108, y: -54900}, this.leftArrow), //587
      new FallingLeftArrow(this, {x: 108, y: -54950}, this.leftArrow), //587
      new FallingLeftArrow(this, {x: 108, y: -55000}, this.leftArrow) //587

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
      new FallingUpArrow(this, {x: 275, y: -22200}, this.upArrow), //219
      new FallingUpArrow(this, {x: 275, y: -22790}, this.upArrow), //225
      new FallingUpArrow(this, {x: 275, y: -22890}, this.upArrow), //226
      new FallingUpArrow(this, {x: 275, y: -23190}, this.upArrow), //229
      new FallingUpArrow(this, {x: 275, y: -23380}, this.upArrow), //231
      new FallingUpArrow(this, {x: 275, y: -24230}, this.upArrow), //239
      new FallingUpArrow(this, {x: 275, y: -24630}, this.upArrow), //243
      new FallingUpArrow(this, {x: 275, y: -25770}, this.upArrow), //257
      new FallingUpArrow(this, {x: 275, y: -25880}, this.upArrow), //258
      new FallingUpArrow(this, {x: 275, y: -26560}, this.upArrow), //265
      new FallingUpArrow(this, {x: 275, y: -26650}, this.upArrow), //266
      new FallingUpArrow(this, {x: 275, y: -27910}, this.upArrow), //282
      new FallingUpArrow(this, {x: 275, y: -28950}, this.upArrow), //289
      new FallingUpArrow(this, {x: 275, y: -29270}, this.upArrow), //291
      new FallingUpArrow(this, {x: 275, y: -30450}, this.upArrow), //301
      new FallingUpArrow(this, {x: 275, y: -31780}, this.upArrow), //318
      new FallingUpArrow(this, {x: 275, y: -32380}, this.upArrow), //322
      new FallingUpArrow(this, {x: 275, y: -32860}, this.upArrow), //325
      new FallingUpArrow(this, {x: 275, y: -33880}, this.upArrow), //329
      new FallingUpArrow(this, {x: 275, y: -34300}, this.upArrow), //332
      new FallingUpArrow(this, {x: 275, y: -34750}, this.upArrow), //334
      new FallingUpArrow(this, {x: 275, y: -34790}, this.upArrow), //335
      new FallingUpArrow(this, {x: 275, y: -34830}, this.upArrow), //336
      new FallingUpArrow(this, {x: 275, y: -34870}, this.upArrow), //337
      new FallingUpArrow(this, {x: 275, y: -34910}, this.upArrow), //339
      new FallingUpArrow(this, {x: 275, y: -35600}, this.upArrow), //350
      new FallingUpArrow(this, {x: 275, y: -35980}, this.upArrow), //353
      new FallingUpArrow(this, {x: 275, y: -36320}, this.upArrow), //357
      new FallingUpArrow(this, {x: 275, y: -36600}, this.upArrow), //360
      new FallingUpArrow(this, {x: 275, y: -36900}, this.upArrow), //363
      new FallingUpArrow(this, {x: 275, y: -37080}, this.upArrow), //365
      new FallingUpArrow(this, {x: 275, y: -37700}, this.upArrow), //374
      new FallingUpArrow(this, {x: 275, y: -37940}, this.upArrow), //376
      new FallingUpArrow(this, {x: 275, y: -38360}, this.upArrow), //380
      new FallingUpArrow(this, {x: 275, y: -38820}, this.upArrow), //388
      new FallingUpArrow(this, {x: 275, y: -39520}, this.upArrow), //399
      new FallingUpArrow(this, {x: 275, y: -39730}, this.upArrow), //402
      new FallingUpArrow(this, {x: 275, y: -40120}, this.upArrow), //406
      new FallingUpArrow(this, {x: 275, y: -40400}, this.upArrow), //409
      new FallingUpArrow(this, {x: 275, y: -40640}, this.upArrow), //412
      new FallingUpArrow(this, {x: 275, y: -40970}, this.upArrow), //415
      new FallingUpArrow(this, {x: 275, y: -41450}, this.upArrow), //424
      new FallingUpArrow(this, {x: 275, y: -41550}, this.upArrow), //426
      new FallingUpArrow(this, {x: 275, y: -42130}, this.upArrow), //431
      new FallingUpArrow(this, {x: 275, y: -42620}, this.upArrow), //439
      new FallingUpArrow(this, {x: 275, y: -43010}, this.upArrow), //443
      new FallingUpArrow(this, {x: 275, y: -43050}, this.upArrow), //444
      new FallingUpArrow(this, {x: 275, y: -43090}, this.upArrow), //445
      new FallingUpArrow(this, {x: 275, y: -43130}, this.upArrow), //446
      new FallingUpArrow(this, {x: 275, y: -43170}, this.upArrow), //447
      new FallingUpArrow(this, {x: 275, y: -43610}, this.upArrow), //455
      new FallingUpArrow(this, {x: 275, y: -43700}, this.upArrow), //456
      new FallingUpArrow(this, {x: 275, y: -44270}, this.upArrow), //462
      new FallingUpArrow(this, {x: 275, y: -44880}, this.upArrow), //469
      new FallingUpArrow(this, {x: 275, y: -45280}, this.upArrow), //476
      new FallingUpArrow(this, {x: 275, y: -45640}, this.upArrow), //481
      new FallingUpArrow(this, {x: 275, y: -46250}, this.upArrow), //488
      new FallingUpArrow(this, {x: 275, y: -46420}, this.upArrow), //489
      new FallingUpArrow(this, {x: 275, y: -47000}, this.upArrow), //495
      new FallingUpArrow(this, {x: 275, y: -47880}, this.upArrow), //505
      new FallingUpArrow(this, {x: 275, y: -48510}, this.upArrow), //510
      new FallingUpArrow(this, {x: 275, y: -48620}, this.upArrow), //511
      new FallingUpArrow(this, {x: 275, y: -49140}, this.upArrow), //519
      new FallingUpArrow(this, {x: 275, y: -49180}, this.upArrow), //520
      new FallingUpArrow(this, {x: 275, y: -49510}, this.upArrow), //523
      new FallingUpArrow(this, {x: 275, y: -49910}, this.upArrow), //527
      new FallingUpArrow(this, {x: 275, y: -50030}, this.upArrow), //529
      new FallingUpArrow(this, {x: 275, y: -50490}, this.upArrow), //533
      new FallingUpArrow(this, {x: 275, y: -51160}, this.upArrow), //541
      new FallingUpArrow(this, {x: 275, y: -51370}, this.upArrow), //544
      new FallingUpArrow(this, {x: 275, y: -51960}, this.upArrow), //549
      new FallingUpArrow(this, {x: 275, y: -52250}, this.upArrow), //553
      new FallingUpArrow(this, {x: 275, y: -52540}, this.upArrow), //556
      new FallingUpArrow(this, {x: 275, y: -52580}, this.upArrow), //557
      new FallingUpArrow(this, {x: 275, y: -52620}, this.upArrow), //558
      new FallingUpArrow(this, {x: 275, y: -52660}, this.upArrow), //559
      new FallingUpArrow(this, {x: 275, y: -53160}, this.upArrow), //568
      new FallingUpArrow(this, {x: 275, y: -53400}, this.upArrow), //571
      new FallingUpArrow(this, {x: 275, y: -53800}, this.upArrow), //575
      new FallingUpArrow(this, {x: 275, y: -53950}, this.upArrow), //577
      new FallingUpArrow(this, {x: 275, y: -53990}, this.upArrow), //578
      new FallingUpArrow(this, {x: 275, y: -54030}, this.upArrow), //579
      new FallingUpArrow(this, {x: 275, y: -54070}, this.upArrow), //580
      new FallingUpArrow(this, {x: 275, y: -54110}, this.upArrow), //581
      new FallingUpArrow(this, {x: 275, y: -54150}, this.upArrow), //582
      new FallingUpArrow(this, {x: 275, y: -54400}, this.upArrow) //584
    ];
//2

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
      new FallingDownArrow(this, {x: 442, y: -21890}, this.downArrow), //216
      new FallingDownArrow(this, {x: 442, y: -22590}, this.downArrow), //223
      new FallingDownArrow(this, {x: 442, y: -23270}, this.downArrow), //230
      new FallingDownArrow(this, {x: 442, y: -23470}, this.downArrow), //232
      new FallingDownArrow(this, {x: 442, y: -24310}, this.downArrow), //240
      new FallingDownArrow(this, {x: 442, y: -25110}, this.downArrow), //248
      new FallingDownArrow(this, {x: 442, y: -25140}, this.downArrow), //249
      new FallingDownArrow(this, {x: 442, y: -25170}, this.downArrow), //250
      new FallingDownArrow(this, {x: 442, y: -25200}, this.downArrow), //251
      new FallingDownArrow(this, {x: 442, y: -25230}, this.downArrow), //252
      new FallingDownArrow(this, {x: 442, y: -25540}, this.downArrow), //255
      new FallingDownArrow(this, {x: 442, y: -25650}, this.downArrow), //256
      new FallingDownArrow(this, {x: 442, y: -26060}, this.downArrow), //260
      new FallingDownArrow(this, {x: 442, y: -26240}, this.downArrow), //262
      new FallingDownArrow(this, {x: 442, y: -26800}, this.downArrow), //267
      new FallingDownArrow(this, {x: 442, y: -26900}, this.downArrow), //268
      new FallingDownArrow(this, {x: 442, y: -28200}, this.downArrow), //284
      new FallingDownArrow(this, {x: 442, y: -28820}, this.downArrow), //288
      new FallingDownArrow(this, {x: 442, y: -29950}, this.downArrow), //298
      new FallingDownArrow(this, {x: 442, y: -30250}, this.downArrow), //300
      new FallingDownArrow(this, {x: 442, y: -31010}, this.downArrow), //308
      new FallingDownArrow(this, {x: 442, y: -31050}, this.downArrow), //309
      new FallingDownArrow(this, {x: 442, y: -31090}, this.downArrow), //310
      new FallingDownArrow(this, {x: 442, y: -31130}, this.downArrow), //311
      new FallingDownArrow(this, {x: 442, y: -31170}, this.downArrow), //312
      new FallingDownArrow(this, {x: 442, y: -31210}, this.downArrow), //313
      new FallingDownArrow(this, {x: 442, y: -31250}, this.downArrow), //314
      new FallingDownArrow(this, {x: 442, y: -31290}, this.downArrow), //315
      new FallingDownArrow(this, {x: 442, y: -31920}, this.downArrow), //319
      new FallingDownArrow(this, {x: 442, y: -32540}, this.downArrow), //323
      new FallingDownArrow(this, {x: 442, y: -33340}, this.downArrow), //328
      new FallingDownArrow(this, {x: 442, y: -35760}, this.downArrow), //352
      new FallingDownArrow(this, {x: 442, y: -36160}, this.downArrow), //355
      new FallingDownArrow(this, {x: 442, y: -36690}, this.downArrow), //361
      new FallingDownArrow(this, {x: 442, y: -37150}, this.downArrow), //366
      new FallingDownArrow(this, {x: 442, y: -37830}, this.downArrow), //375
      new FallingDownArrow(this, {x: 442, y: -38290}, this.downArrow), //379
      new FallingDownArrow(this, {x: 442, y: -38910}, this.downArrow), //389
      new FallingDownArrow(this, {x: 442, y: -39410}, this.downArrow), //397
      new FallingDownArrow(this, {x: 442, y: -39620}, this.downArrow), //401
      new FallingDownArrow(this, {x: 442, y: -40050}, this.downArrow), //405
      new FallingDownArrow(this, {x: 442, y: -40510}, this.downArrow), //410
      new FallingDownArrow(this, {x: 442, y: -41030}, this.downArrow), //416
      new FallingDownArrow(this, {x: 442, y: -41620}, this.downArrow), //427
      new FallingDownArrow(this, {x: 442, y: -41860}, this.downArrow), //429
      new FallingDownArrow(this, {x: 442, y: -42180}, this.downArrow), //432
      new FallingDownArrow(this, {x: 442, y: -42770}, this.downArrow), //441
      new FallingDownArrow(this, {x: 442, y: -43810}, this.downArrow), //457
      new FallingDownArrow(this, {x: 442, y: -43940}, this.downArrow), //458
      new FallingDownArrow(this, {x: 442, y: -44340}, this.downArrow), //463
      new FallingDownArrow(this, {x: 442, y: -44940}, this.downArrow), //470
      new FallingDownArrow(this, {x: 442, y: -45360}, this.downArrow), //478
      new FallingDownArrow(this, {x: 442, y: -45750}, this.downArrow), //482
      new FallingDownArrow(this, {x: 442, y: -46020}, this.downArrow), //485
      new FallingDownArrow(this, {x: 442, y: -46120}, this.downArrow), //487
      new FallingDownArrow(this, {x: 442, y: -46570}, this.downArrow), //491
      new FallingDownArrow(this, {x: 442, y: -46880}, this.downArrow), //494
      new FallingDownArrow(this, {x: 442, y: -47270}, this.downArrow), //497
      new FallingDownArrow(this, {x: 442, y: -47350}, this.downArrow), //499
      new FallingDownArrow(this, {x: 442, y: -47690}, this.downArrow), //503
      new FallingDownArrow(this, {x: 442, y: -48010}, this.downArrow), //506
      new FallingDownArrow(this, {x: 442, y: -48410}, this.downArrow), //509
      new FallingDownArrow(this, {x: 442, y: -49280}, this.downArrow), //521
      new FallingDownArrow(this, {x: 442, y: -49630}, this.downArrow), //524
      new FallingDownArrow(this, {x: 442, y: -50380}, this.downArrow), //532
      new FallingDownArrow(this, {x: 442, y: -50900}, this.downArrow), //536
      new FallingDownArrow(this, {x: 442, y: -50940}, this.downArrow), //537
      new FallingDownArrow(this, {x: 442, y: -50980}, this.downArrow), //538
      new FallingDownArrow(this, {x: 442, y: -51020}, this.downArrow), //539
      new FallingDownArrow(this, {x: 442, y: -51220}, this.downArrow), //542
      new FallingDownArrow(this, {x: 442, y: -51590}, this.downArrow), //545
      new FallingDownArrow(this, {x: 442, y: -51860}, this.downArrow), //548
      new FallingDownArrow(this, {x: 442, y: -52200}, this.downArrow), //552
      new FallingDownArrow(this, {x: 442, y: -52820}, this.downArrow), //562
      new FallingDownArrow(this, {x: 442, y: -52860}, this.downArrow), //563
      new FallingDownArrow(this, {x: 442, y: -52900}, this.downArrow), //564
      new FallingDownArrow(this, {x: 442, y: -52940}, this.downArrow), //565
      new FallingDownArrow(this, {x: 442, y: -52980}, this.downArrow), //566
      new FallingDownArrow(this, {x: 442, y: -53240}, this.downArrow), //569
      new FallingDownArrow(this, {x: 442, y: -53750}, this.downArrow), //574
      new FallingDownArrow(this, {x: 442, y: -54480}, this.downArrow) //585
      
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
      new FallingRightArrow(this, {x: 609, y: -20760}, this.rightArrow), //201
      new FallingRightArrow(this, {x: 609, y: -21420}, this.rightArrow), //211
      new FallingRightArrow(this, {x: 609, y: -21580}, this.rightArrow), //213
      new FallingRightArrow(this, {x: 609, y: -21760}, this.rightArrow), //215
      new FallingRightArrow(this, {x: 609, y: -22110}, this.rightArrow), //218
      new FallingRightArrow(this, {x: 609, y: -22280}, this.rightArrow), //220
      new FallingRightArrow(this, {x: 609, y: -22690}, this.rightArrow), //224
      new FallingRightArrow(this, {x: 609, y: -22990}, this.rightArrow), //227
      new FallingRightArrow(this, {x: 609, y: -23090}, this.rightArrow), //228
      new FallingRightArrow(this, {x: 609, y: -23810}, this.rightArrow), //235
      new FallingRightArrow(this, {x: 609, y: -23910}, this.rightArrow), //236
      new FallingRightArrow(this, {x: 609, y: -24420}, this.rightArrow), //241
      new FallingRightArrow(this, {x: 609, y: -24750}, this.rightArrow), //244
      new FallingRightArrow(this, {x: 609, y: -24830}, this.rightArrow), //245
      new FallingRightArrow(this, {x: 609, y: -25340}, this.rightArrow), //253
      new FallingRightArrow(this, {x: 609, y: -25980}, this.rightArrow), //259
      new FallingRightArrow(this, {x: 609, y: -26150}, this.rightArrow), //261
      new FallingRightArrow(this, {x: 609, y: -27000}, this.rightArrow), //269
      new FallingRightArrow(this, {x: 609, y: -28010}, this.rightArrow), //283
      new FallingRightArrow(this, {x: 609, y: -28480}, this.rightArrow), //286
      new FallingRightArrow(this, {x: 609, y: -29120}, this.rightArrow), //290
      new FallingRightArrow(this, {x: 609, y: -29830}, this.rightArrow), //297
      new FallingRightArrow(this, {x: 609, y: -30590}, this.rightArrow), //302
      new FallingRightArrow(this, {x: 609, y: -31520}, this.rightArrow), //317
      new FallingRightArrow(this, {x: 609, y: -32270}, this.rightArrow), //321
      new FallingRightArrow(this, {x: 609, y: -33180}, this.rightArrow), //327
      new FallingRightArrow(this, {x: 609, y: -34030}, this.rightArrow), //330
      new FallingRightArrow(this, {x: 609, y: -34550}, this.rightArrow), //333
      new FallingRightArrow(this, {x: 609, y: -35520}, this.rightArrow), //349
      new FallingRightArrow(this, {x: 609, y: -36080}, this.rightArrow), //354
      new FallingRightArrow(this, {x: 609, y: -36460}, this.rightArrow), //358
      new FallingRightArrow(this, {x: 609, y: -36780}, this.rightArrow), //362
      new FallingRightArrow(this, {x: 609, y: -37230}, this.rightArrow), //367
      new FallingRightArrow(this, {x: 609, y: -37270}, this.rightArrow), //368
      new FallingRightArrow(this, {x: 609, y: -37310}, this.rightArrow), //369
      new FallingRightArrow(this, {x: 609, y: -37350}, this.rightArrow), //370
      new FallingRightArrow(this, {x: 609, y: -37390}, this.rightArrow), //371
      new FallingRightArrow(this, {x: 609, y: -37600}, this.rightArrow), //373
      new FallingRightArrow(this, {x: 609, y: -38130}, this.rightArrow), //377 first after up, i want this to last beginning
      new FallingRightArrow(this, {x: 609, y: -38430}, this.rightArrow), //381
      new FallingRightArrow(this, {x: 609, y: -38470}, this.rightArrow), //382
      new FallingRightArrow(this, {x: 609, y: -38510}, this.rightArrow), //383
      new FallingRightArrow(this, {x: 609, y: -38550}, this.rightArrow), //384
      new FallingRightArrow(this, {x: 609, y: -38590}, this.rightArrow), //385
      new FallingRightArrow(this, {x: 609, y: -38630}, this.rightArrow), //386 -----
      new FallingRightArrow(this, {x: 609, y: -39000}, this.rightArrow), //390
      new FallingRightArrow(this, {x: 609, y: -39470}, this.rightArrow), //398
      new FallingRightArrow(this, {x: 609, y: -39880}, this.rightArrow), //403
      new FallingRightArrow(this, {x: 609, y: -40230}, this.rightArrow), //407
      new FallingRightArrow(this, {x: 609, y: -40580}, this.rightArrow), //411
      new FallingRightArrow(this, {x: 609, y: -40840}, this.rightArrow), //414
      new FallingRightArrow(this, {x: 609, y: -41090}, this.rightArrow), //417
      new FallingRightArrow(this, {x: 609, y: -41130}, this.rightArrow), //418
      new FallingRightArrow(this, {x: 609, y: -41170}, this.rightArrow), //419
      new FallingRightArrow(this, {x: 609, y: -41210}, this.rightArrow), //420
      new FallingRightArrow(this, {x: 609, y: -41250}, this.rightArrow), //421
      new FallingRightArrow(this, {x: 609, y: -41290}, this.rightArrow), //422
      new FallingRightArrow(this, {x: 609, y: -41730}, this.rightArrow), //428
      new FallingRightArrow(this, {x: 609, y: -42260}, this.rightArrow), //433
      new FallingRightArrow(this, {x: 609, y: -42300}, this.rightArrow), //434
      new FallingRightArrow(this, {x: 609, y: -42340}, this.rightArrow), //435
      new FallingRightArrow(this, {x: 609, y: -42380}, this.rightArrow), //436
      new FallingRightArrow(this, {x: 609, y: -42420}, this.rightArrow), //437
      new FallingRightArrow(this, {x: 609, y: -42460}, this.rightArrow), //438
      new FallingRightArrow(this, {x: 609, y: -42870}, this.rightArrow), //442
      new FallingRightArrow(this, {x: 609, y: -43290}, this.rightArrow), //448
      new FallingRightArrow(this, {x: 609, y: -43350}, this.rightArrow), //450
      new FallingRightArrow(this, {x: 609, y: -43410}, this.rightArrow), //452
      new FallingRightArrow(this, {x: 609, y: -43530}, this.rightArrow), //454
      new FallingRightArrow(this, {x: 609, y: -44210}, this.rightArrow), //461
      new FallingRightArrow(this, {x: 609, y: -44510}, this.rightArrow), //465
      new FallingRightArrow(this, {x: 609, y: -44650}, this.rightArrow), //466
      new FallingRightArrow(this, {x: 609, y: -45000}, this.rightArrow), //471
      new FallingRightArrow(this, {x: 609, y: -45040}, this.rightArrow), //472
      new FallingRightArrow(this, {x: 609, y: -45080}, this.rightArrow), //473
      new FallingRightArrow(this, {x: 609, y: -45120}, this.rightArrow), //474
      new FallingRightArrow(this, {x: 609, y: -45160}, this.rightArrow), //475
      new FallingRightArrow(this, {x: 609, y: -45440}, this.rightArrow), //479
      new FallingRightArrow(this, {x: 609, y: -45850}, this.rightArrow), //483
      new FallingRightArrow(this, {x: 609, y: -46720}, this.rightArrow), //492
      new FallingRightArrow(this, {x: 609, y: -47230}, this.rightArrow), //496,
      new FallingRightArrow(this, {x: 609, y: -47310}, this.rightArrow), //498
      new FallingRightArrow(this, {x: 609, y: -47390}, this.rightArrow), //500
      new FallingRightArrow(this, {x: 609, y: -48900}, this.rightArrow), //514
      new FallingRightArrow(this, {x: 609, y: -48940}, this.rightArrow), //515
      new FallingRightArrow(this, {x: 609, y: -48980}, this.rightArrow), //516
      new FallingRightArrow(this, {x: 609, y: -49020}, this.rightArrow), //517
      new FallingRightArrow(this, {x: 609, y: -49060}, this.rightArrow), //518
      new FallingRightArrow(this, {x: 609, y: -49730}, this.rightArrow), //525
      new FallingRightArrow(this, {x: 609, y: -50150}, this.rightArrow), //530
      new FallingRightArrow(this, {x: 609, y: -50250}, this.rightArrow), //531
      new FallingRightArrow(this, {x: 609, y: -50760}, this.rightArrow), //535
      new FallingRightArrow(this, {x: 609, y: -51280}, this.rightArrow), //543
      new FallingRightArrow(this, {x: 609, y: -51660}, this.rightArrow), //546
      new FallingRightArrow(this, {x: 609, y: -52060}, this.rightArrow), //550
      new FallingRightArrow(this, {x: 609, y: -52310}, this.rightArrow), //554
      new FallingRightArrow(this, {x: 609, y: -52710}, this.rightArrow), //560
      new FallingRightArrow(this, {x: 609, y: -53270}, this.rightArrow), //570
      new FallingRightArrow(this, {x: 609, y: -53700}, this.rightArrow), //573
      new FallingRightArrow(this, {x: 609, y: -54270}, this.rightArrow), //583
      new FallingRightArrow(this, {x: 609, y: -54560}, this.rightArrow) //586

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

      ctx.font = "30px orbitron";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2)
    }

    if (this.gamestate === GAMESTATE.MENU) {
      // ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      // ctx.fillStyle = "rgba(1, 0, 0, 1)";
      // ctx.fill();
  
      // this.background.display = 'none;'

      // ctx.font = `30px ${this.arial}`;
      ctx.font = "30px orbitron";
      // ctx.font = "30px daggersquare";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText("Press S to Start", this.gameWidth / 2, this.gameHeight / 2)
    }

    
  }

  togglePause() {
    if (this.gamestate === GAMESTATE.PAUSED) {
      this.gamestate = GAMESTATE.RUNNING
      playAudio()
      this.audio = "on"
    } else if (this.gamestate === GAMESTATE.MENU) {
      return;
    } else {
      this.gamestate = GAMESTATE.PAUSED;
      playAudio()
      this.audio ="off"
    }
  }

  handleScore(ctx) {
    ctx.fillStyle = 'black';
    ctx.strokeStyle = 'black';
    ctx.font = '30px orbitron';
    // ctx.fillText('Score:', 375, 533);
    // ctx.fillText(this.score, 470, 535);
    ctx.fillText('Score:', 375, 753);
    ctx.fillText(this.score, 470, 755);
    // ctx.fillText('Missed:', 500, 533);
    // ctx.fillText(this.missed, 565, 535)
  }

  reset() {
    this.gamestate = GAMESTATE.MENU;
    this.score = 0;
    console.log(this.audio)
    if (this.audio === "on") {
      playAudio();
      this.audio = "off"
    } else {
      return
    }
  }

  resetGame() {

  }

}