import { Item } from '../types/Item';

export const items: Item[] = [
    { date: new Date(2022, 3, 6), category: 'food', title: 'McDonalds', value: 32.12 },
    { date: new Date(2022, 3, 15), category: 'food', title: 'Burger King', value: 28 },
    { date: new Date(2022, 3, 16), category: 'rent', title: 'Aluguel Apt', value: 2300 },
    { date: new Date(2022, 4, 5), category: 'salary', title: 'Salário ACME', value: 4500 },
    { date: new Date(2022, 4, 20), category: 'salary', title: 'Freelance', value: 2000 },
    { date: new Date(2022, 5, 13), category: 'spent', title: 'Revisão HD 883R', value: 500 },
];