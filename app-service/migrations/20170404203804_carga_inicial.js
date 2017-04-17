// Objetos aleatórios que me vieram a mente na hora de popular o banco. hehe
let data = [{ nome_pessoa: "Leonardo", telefone_pessoa: "99800-9988" },
            { nome_pessoa: "Ana", telefone_pessoa: "98808-0012" },
            { nome_pessoa: "Raphael", telefone_pessoa: "99800-8962" },
            { nome_pessoa: "Joice", telefone_pessoa: "unknown" }]

exports.up = function (knex, Promise) {
    return knex("pessoa").insert(data);
};

exports.down = function (knex, Promise) {
    return knex("pessoa").where(data).del();
};
