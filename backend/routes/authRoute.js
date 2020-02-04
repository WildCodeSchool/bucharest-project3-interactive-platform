const express = require("express");
const router = express.Router();
const bCrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const jwt = require("jsonwebtoken");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

const fs = require("file-system");

const models = require("../models");

const sendNodemailer = require("../services/nodemailer");

const createUser = (req, res, next) => {
    User.create(req.body, (err, results, fields) => {
        if (err) return res.render("error", { err });
        res.redirect("/auth/login");
        sendNodemailer(req.body.email);
    });
};

passport.use(
    new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password",
            session: false
        },
        (email, password, callback) => {
            models.user
                .findAll({
                    where: {
                        email: email
                    }
                })
                .then(users => {
                    if (!users)
                        return callback(null, false, {
                            msg: "stuff didnt work cuz username"
                        });
                    let bCryptPassword = bCrypt.compareSync(password, users[0].password);
                    if (!bCryptPassword) {
                        return callback(null, false, {
                            msg: "stuff didnt work cuz passord"
                        });
                    }
                    callback(null, users[0]);
                });
        }
    )
);

passport.use(
    new JWTStrategy(
        {
            jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
            secretOrKey: "secretPass"
        },
        (jwtPayload, done) => done(null, jwtPayload)
    )
);

router.post("/sign-up", (req, res) => {
    let hashedPass = bCrypt.hashSync(req.body.password, 15);
    let todayNow = Date.now();
    const stuff = {
        fullname: req.body.fullname,
        email: req.body.email,
        password: hashedPass,
        date: todayNow,
        accesLevel: "Area51"
    };
    models.user.create({ ...stuff }).then(dbRes => {
        dbRes
            ? res.status(200).json(dbRes)
            : res.status(500).json({ msg: "is bad" });
    });
});

router.post("/sign-in", (req, res) => {
    console.log(req);
    passport.authenticate("local", (err, user, info) => {
        if (err) res.status(500).send(err);
        if (!user) res.status(400).json({ msg: "It's bad" });

        const userData = {
            email: user.email,
            password: user.passwordCREATE_LOGIN_SESSION
        };

        const token = jwt.sign(userData, "secretPass");
        return res.json({
            user: {
                id: user.user_id,
                name: user.fullname,
                email: user.email,
                acces_level: user.acces_level
            },
            token,
            msg: "Me did gud! :)"
        });
    })(req, res);
});

router.get(
    "/quizz",
    // passport.authenticate("jwt", { session: false }),
    (req, res) =>
        models.quizzes.findAll().then(data => res.status(200).json(data))
);


router.put(
    "/quizz/:id",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        models.description
            .update(
                {
                    question: req.body.question,
                    answer1: req.body.answer1,
                    answer2: req.body.answer2,
                    correct_answer: req.body.correct_answer,
                    image_link: req.body.image_link,
                    categoryCategoryId: req.body.categoryid

 

                },
                {
                    where: { categoryCategoryId: req.params.id },
                }
            )
            .then(data => res.status(200).json({ data, msg: "Me did gud (: !" }));
    }
);

router.post(
    "/quizz",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        let stuff = {
            question: req.body.question,
            answer1: req.body.answer1,
            answer2: req.body.answer2,
            correct_answer: req.body.correct,
            image_linK: req.body.link,
            category_id: Math.floor(Math.random * 333)
        };
        models.quizzes.create({ ...stuff }).then(rez => {
            rez
                ? res.status(200).json(rez)
                : res.status(500).json({ msg: "quiz bad ):" });
        });
    }
);

router.get(
    "/description",
    // passport.authenticate("jwt", { session: false }),
    (req, res) => {
        models.description.findAll({ include: [models.categories] }).then(data => res.status(200).json(data));
    }
);
router.get(
    "/categories",
    // passport.authenticate("jwt", { session: false }),
    (req, res) => {
        models.categories.findAll().then(data => res.status(200).json(data));
    }
);

router.get(
    "/description/:id",
    //   passport.authenticate("jwt", { session: false }),
    (req, res) => {
        models.description
            .findAll({
                where: { description_id: req.params.id }
            })
            .then(data => res.status(200).json(data));
    }
);

router.put(
    "/description/:id",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        models.description
            .update(
                {
                    text: req.body.desctext,
                    link: req.body.desclink

                },
                {
                    where: { categoryCategoryId: req.params.id },
                    returning: true
                }
            )
            .then(data => res.status(200).json({ data, msg: "Me did gud (: !" }));
    }
);

router.post(
    "/description",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        let myDescription = {
            text: req.body.text,
            link: req.body.link,
            category_id: req.body.category_id
        };
        models.description.create({ ...myDescription }).then(rez => {
            rez ? res.status(200).json(rez) : res.status(500),
                json({ msg: "description bad )x" });
        });
    }
);

router.post(
    "/coupons",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        let code = {
            code: Math.floor(
                Math.random() * (Math.floor(9999999999) - Math.ceil(999999)) +
                Math.ceil(999999)
            ),
            discount_value: Math.floor(
                Math.random() * (Math.floor(100) - Math.ceil(20)) + Math.ceil(20)
            ),
            user_id: req.body.user_id
        };
        models.coupons.create({ ...code }).then(rez => {
            rez
                ? res.status(200).json(rez)
                : res.status(500).json({ msg: "coupon bad ):" });
        });
    }
);

router.get(
    "/coupons",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        models.coupons.findAll().then(data => res.status(200).json(data));
    }
);

router.get(
    "/coupons/:id",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        models.coupons
            .findAll({
                where: { coupon_id: req.params.id }
            })
            .then(data => res.status(200).json(data));
    }
);

router.get("/locations", (req, res) => {
    models.locations
        .findAll()
        .then(data => res.status(200).json({ data, msg: "Me did gud (: !" }));
});

router.get(
    "/quiz-modal",
    // passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const modal = fs.readFileSync("./assets/quiz-modal.json", "utf8");
        if (modal !== undefined || modal !== null)
            res.status(200).json(JSON.parse(modal).array);
        else res.status(401).json("fs.read() quiz-modal error");
    }
);
router.get(
    "/q-title-desc",
    //  passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const qData = fs.readFileSync("./assets/quiz-data.json", "utf8");
        if (qData !== undefined || qData !== null) {
            return res.status(200).json(JSON.parse(qData).array);
        }
        res.status(401).json("fs.read() q-title-desc error");
    }
);

router.get(
    "/parteners",
    (req, res) => {
        const parteners = fs.readFileSync("./assets/parteners.json");
        if (parteners !== undefined || parteners !== null) res.status(200).json(JSON.parse(parteners).array);
        else res.status(401).json('fs.read() parteners error')
    });

// const makeLocation = () => {
//     let myDescription = [
//         // {
//         //     city: 'The Pit',
//         //     name: 'Hell',
//         //     adress: 'The Abyss',
//         //     telephone: '666-666-666',
//         //     latitude: 666.666,
//         //     longitude: 666.666
//         // },
//         // {
//         //     city: 'Cities',
//         //     name: 'Names',
//         //     adress: 'Adresses',
//         //     telephone: '123-456-789',
//         //     latitude: 50.50,
//         //     longitude: 50.50
//         // },
//         {
//             city: "Bucharest",
//             name: "Luxury Studio",
//             adress: "Strada Locotenent Baican Ionescu 53, București",
//             telephone: "0748 589 879",
//             latitude: 44.43854,
//             longitude: 26.14
//         },
//         {
//             city: "Bucharest",
//             name: "Wild Code School",
//             adress: "Șoseaua Nicolae Titulescu 56, București",
//             telephone: "0754 468 941",
//             latitude: 44.45245,
//             longitude: 26.07606
//         },
//         {
//             city: "Bucharest",
//             name: "Studio 20",
//             adress: "alea Victoriei numarul 155 Tronson 7, Etaj 1, București",
//             telephone: "0748 777 757",
//             latitude: 44.45108,
//             longitude: 26.08699
//         }
//     ];
//     models.locations.create({ ...myDescription[2] }).then(rez => {
//         // rez ? res.status(200).json(rez) :
//         //     json({ msg: "locationz bad )x" });
//     });
// };

// const makeDescription = () => {

//     const data = [{
//         text: 'par',
//         link: 'par',
//         categoryCategoryId: '1',
//     }, {
//         text: 'fata',
//         link: 'fata',
//         categoryCategoryId: '2',
//     }, {
//         text: 'anticelulita',
//         link: 'anticelulita',
//         categoryCategoryId: '3',
//     }, {
//         text: 'masaj',
//         link: 'masaj',
//         categoryCategoryId: '4',
//     }, {
//         text: 'maini',
//         link: 'maini',
//         categoryCategoryId: '5',
//     }, {
//         text: 'picioare',
//         link: 'picioare',
//         categoryCategoryId: '6',
//     }]

//     data.forEach((e, i) => models.description.create({ ...e }))
// }

// makeCategories = () => {
//     const cat = [{ category_name: "par" },
//     { category_name: "fata" },
//     { category_name: "anticelulita" },
//     { category_name: "masaj" },
//     { category_name: "maini" },
//     { category_name: "picioare" }]
//     cat.forEach((e, i) => models.categories.create({ ...e }))
//     // models.categories
// }

// makeLocation()
// makeCategories()
// makeDescription()

module.exports = router;