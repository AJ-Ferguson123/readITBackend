exports.seed = function (knex) {
    const users = [
        {
        username: "Fred-o",
        password: "Baggins"
        }, 
        {
            username: "Luke",
            password: "Skywalker"
        },
        {
            username: "Darth",
            password: "Vader"
        },
    ];

    return knex("users").insert(users);
}