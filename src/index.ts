import { Core, Vec2 } from 'aura';
import { MAIN_STATE } from './state/main.state';

const game = new Core.ThreeD.Game3D({
    canvasDimensions: new Vec2(1024, 768)
});

game.addState(MAIN_STATE);

game.start(MAIN_STATE.name);
