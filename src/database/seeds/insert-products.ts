import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("products").del();

    // Inserts seed entries
    await knex("products").insert([
        { name: "Nhoque quatro queijos", price: 20.5 },
        { name: "Lasanha bolonhesa", price: 25.0 },
        { name: "Risoto de camarão", price: 30.0 },
        { name: "Salada Caesar", price: 15.0 },
        { name: "Sopa de legumes", price: 12.0 },
        { name: "Frango grelhado", price: 18.0 },
        { name: "Peixe assado", price: 22.0 },
        { name: "Pizza Margherita", price: 28.0 },
        { name: "Hambúrguer artesanal", price: 16.0 },
        { name: "Tiramisu", price: 10.0 },
        { name: "Panna Cotta", price: 9.0 },
        { name: "Cheesecake", price: 11.0 },
        { name: "Brownie com sorvete", price: 8.0 },
    ]);
};
