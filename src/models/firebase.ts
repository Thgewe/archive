interface ISibling {
    name: string,
    id: string | null,
}
interface IChild {
    id: string | null,
    name: string,
    mother: string | null,
    mother_id: string | null,
    father: string | null,
    father_id: string | null,
}

export interface IEntity {
    id: string,
    name: string,
    kind: string,
}

export interface IHuman {
    id: string,
    name: string,
    status: 'alive' | 'dead' | 'unknown',
    age: number | null,
    race: string | null,
    kind: 'human',
    biography: string | null,
    description: string | null,
    date_of_birth: string | null,
    date_of_death: string | null,
    place_of_birth: string | null,
    place_of_birth_id: string | null,
    house: string | null,
    house_id: string | null,
    family: string | null,
    family_id: string | null,
    mother: string | null,
    mother_id: string | null,
    father: string | null,
    father_id: string | null,
    brothers: ISibling[],
    sisters: ISibling[],
    children: IChild[],
}