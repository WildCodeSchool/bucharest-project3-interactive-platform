const express = require('express');
const router = express.Router();
const bCrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const models = require('../models')

passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
        session: false
    },
    (email, password, callback) => {
        models
            .user
            .findAll({
                where: {
                    email: email
                }
            })
            .then(users => {
                if (!users) return callback(null, false, { msg: 'stuff didnt work cuz username' })
                let bCryptPassword = bCrypt.compareSync(password, users[0].password)
                if (!bCryptPassword) { return callback(null, false, { msg: 'stuff didnt work cuz passord' }) }
                callback(null, users[0])
            })
    }
))

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secretPass'
}, (jwtPayload, done) => done(null, jwtPayload)))

router.post('/sign-up', (req, res) => {
    let hashedPass = bCrypt.hashSync(req.body.password, 15);
    let todayNow = Date.now()
    const stuff = {
        fullname: req.body.fullName,
        email: req.body.email,
        password: hashedPass,
        date: todayNow,
        accesLevel: 'Area51'
    }
    models
        .user
        .create({ ...stuff })
        .then((dbRes) => { dbRes ? res.status(200).json(dbRes) : res.status(500).json({ msg: 'is bad' }) })
});

router.post('/sign-in', (req, res) => {
    console.log(req);

    passport.authenticate('local', (err, user, info) => {

        if (err) res.status(500).send(err);
        if (!user) res.status(400).json({ msg: 'It\'s bad' })

        const userData = {
            email: user.email,
            password: user.passwordCREATE_LOGIN_SESSION
        }

        const token = jwt.sign(userData, 'secretPass')
        return res.json({
            user: {
                id: user.user_id,
                name: user.fullname,
                email: user.email,
                acces_level: user.acces_level
            }, token, msg: 'Me did gud! :)'
        })
    })(req, res)
});

router.get('/quizz', passport.authenticate('jwt', { session: false }), (req, res) =>
    models
        .quizzes
        .findAll()
        .then(data => res.status(200).json(data)))

router.post('/quizz', passport.authenticate('jwt', { session: false }), (req, res) => {
    let stuff = {
        question: req.body.question,
        answer1: req.body.answer1,
        answer2: req.body.answer2,
        correct_answer: req.body.correct,
        image_linK: req.body.link,
        category_id: Math.floor(Math.random * 333)
    }
    models
        .quizzes
        .create({ ...stuff })
        .then((rez) => { rez ? res.status(200).json(rez) : res.status(500).json({ msg: 'quiz bad ):' }) })
})

router.get('/description', passport.authenticate('jwt', { session: false }), (req, res) => {
    models
        .description
        .findAll()
        .then(data => res.status(200).json(data))
})

router.get('/description/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    models
        .description
        .findAll({
            where: { description_id: req.params.id }
        })
        .then(data => res.status(200).json(data))
})

router.put('/description/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    models
        .description
        .update(
            {
                text: req.body.text,
                link: req.body.link
            }, {
            where: { description_id: req.params.id },
            returning: true
        })
        .then(data => res.status(200).json({ data, msg: 'Me did gud (: !' }))

})

router.post('/description', passport.authenticate('jwt', { session: false }), (req, res) => {
    let myDescription = {
        text: req.body.text,
        link: req.body.link,
        category_id: req.body.category_id
    }
    models
        .description
        .create({ ...myDescription })
        .then((rez) => { rez ? res.status(200).json(rez) : res.status(500), json({ msg: 'description bad )x' }) })
})


router.post('/coupons', passport.authenticate('jwt', { session: false }), (req, res) => {
    let code = {
        code: Math.floor(Math.random() * (Math.floor(9999999999) - Math.ceil(999999)) + Math.ceil(999999)),
        discount_value: Math.floor(Math.random() * (Math.floor(100) - Math.ceil(20)) + Math.ceil(20)),
        user_id: 3
    }
    models
        .coupons
        .create({ ...code })
        .then((rez) => { rez ? res.status(200).json(rez) : res.status(500).json({ msg: 'coupon bad ):' }) })
})

router.get('/coupons', passport.authenticate('jwt', { session: false }), (req, res) => {
    models
        .coupons
        .findAll()
        .then(data => res.status(200).json(data))
})

router.get('/coupons/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    models
        .coupons
        .findAll({
            where: { coupon_id: req.params.id }
        })
        .then(data => res.status(200).json(data))
})

router.get('/locations', passport.authenticate('jwt', { session: false }), (req, res) => {
    models
        .locations
        .findAll()
        .then(data => res.status(200).json({ data, msg: 'Me did gud (: !' }))
})

module.exports = router;