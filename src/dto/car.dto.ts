export interface Car {
    name:string,
    description:string,
    image:string,
    attributes:CarAttributes[]
}

export interface CarAttributes{
    trait_type:string,
    value:string|number
}