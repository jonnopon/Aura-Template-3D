import { Core, Shader, Vec2, Vec3 } from 'aura';
import { MAIN_STATE } from './state/main.state';

const game = new Core.ThreeD.Game3D({
    canvasDimensions: new Vec2(1024, 768),
    world: {
        dimensions: new Vec3(1024 * 100, 768 * 100, 1000000)
    }
});

game.registerShader(Shader.Program.ThreeD.PROGRAM_BASIC_3D);
game.registerShader(Shader.Program.ThreeD.PROGRAM_COLOR_PER_VERTEX_3D);

game.addState(MAIN_STATE);

game.start(MAIN_STATE.name);
