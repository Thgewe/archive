export const Categories = [
    'home',
    'humans',
    'monsters',
    'gods',
] as const

export enum ECategory {
    home = 'home',
    humans = 'humans',
    monsters = 'monsters',
    gods = 'gods',
}

export type TCategory = typeof Categories[number]