exports.seed = function (knex) {
    const posts = [
        {
            title: "Hi Mango",
            body: "Let me introduce my son, he wont stop moving",
            user_id: 1,
            subreadit_id: 1
        },
        {
            title: "Hey person",
            body: "Let me clear my throat",
            user_id: 2,
            subreadit_id: 1
        },
        {
            title: "What do you do for fun? I code",
            body: "Its something i enjoy",
            user_id: 1,
            subreadit_id: 2
        },
        {
            title: "what do you do for fun",
            body: "Me, I like to go on adventures",
            user_id: 1,
            subreadit_id: 2
        },
        {
            title: "what is your favorite movie?",
            body: "Mine is Blade Runner",
            user_id: 3,
            subreadit_id: 3
        },
        {
            title: "what is your favorite show?",
            body: "Mine is You",
            user_id: 2,
            subreadit_id: 4
        },
        {
            title: "what is your favorite programming language?",
            body: "Mine is Javascript",
            user_id: 2,
            subreadit_id: 5
        },
        {
            title: "Anyone go on any fun vacations?",
            body: "I'd like to go Croatia",
            user_id: 3,
            subreadit_id: 2
        },
        {
            title: "Anyone watch Rick and Morty?",
            body: "It's a very good show",
            user_id: 1,
            subreadit_id: 4
        },
        {
            title: "why did the programmer quit his job?",
            body: "Because he didn't get arrays",
            user_id: 3,
            subreadit_id: 5
        },
    ];

    return knex("posts").insert(posts);
};