
exports.up = function (knex, Promise) {
    return knex.schema.createTableIfNotExists("pessoa", (table) => {
        table.increments('id_pessoa');
        table.string('nome_pessoa');
        table.string('telefone_pessoa');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable("pessoa");
};