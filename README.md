# Aura-Template-3D

Aura-Template-3D is a bare-bones starter project for getting up and running making 3D games with [Aura](https://github.com/optionallychained/Aura), including:
- ESlint configuration
- WebPack configuration
- VSCode Debug configuration
- A simple demo game


## Demo

[Aura-Template-3D Demo](https://optionallychained.github.io/Aura-Template-3D/)

**WASD** to move
**IJKL** to rotate


## Setup
- Install [NPM](https://nodejs.org/)
- Clone
- Terminal: `npm install`


## Development
- Terminal: `npm run dev`
    - **Alternatively (recommended)**: Run Debug configuration in VSCode
- Work on your game in `src/`
- View output at `localhost:8080`


## Distribution
- Terminal: `npm run dist`
- Retrieve build from `dist/`


## Misc
- Terminal: `npm run lint`
    - executed before `dist`

- Terminal: `npm run deploy`
    - builds, then deploys `dist/` to the `gh-pages` branch
