const express = require('express');
//const controller = require('./controller');

const router = express.Router();

router.use(express.json());

router.get('/', (req,res,next) => {
    res.send("Sent email status");
})

router.get('/:id', (req,res,next) => {
    res.send("Will show email details");
})


/**
 * Sending emails
 * req object format should contain { "job": "STR_ID", "payload" : { "key" : "val" [, "key":"val"] } }
 */
router.post('/', async (req, res, next) => {

    res.send("Will send email");

    const job = req.body.job;
    const payload = req.body.payload;

    if (!job || !payload) {
        return next(new Error("Invalid arguments"));
    }

    // controller.sendEmail(job, payload)
    //     .then(result => {

    //         // If no errors, the details will hold just a message
    //         // If errors, then details will hold message, rejectedemails and the status codes of those emails
    //         res.status(result.status).send(result.details)

    //     })
    //     .catch(err => {
    //         next(err);
    //     });

})

module.exports = router;