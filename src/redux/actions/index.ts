import { ICategory } from "../../commonInterfaces";

export const setCategories = (payload: ICategory) => ({
    type: 'SET_CATEGORIES',
    payload: payload,
})