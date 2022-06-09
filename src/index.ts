import { Game, Vec2, Vec3 } from 'aura-3d';
import { MAIN_STATE } from './state/main.state';

const game = new Game({
    canvasDimensions: new Vec2(1024, 768),
    world: {
        dimensions: new Vec3(1024 * 100, 768 * 100, 1000000)
    },
    states: [
        MAIN_STATE
    ]
});

game.start(MAIN_STATE.name);
