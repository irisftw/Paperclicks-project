const express = require('express')
const superagent = require('superagent');

const app = express();

app.use(express.json());

app.get('/callback', ((req, res ) => {

    // res.send(req.query.code)
    // console.log(req.query.code)
    if(!req.query.code){
        res.send(401).send("Code error");
    }
    
    superagent
        .post('https://github.com/login/oauth/access_token')
        .send({ 
            client_id: 'ad35c97954fca147f771',
            client_secret: 'a720d11ec0f0d847878b756aed1ed6669a376201',
            code: `${req.query.code}`
        })
        .end((err, result) => {
            // console.log(result.body)
            res.send(result.body)
        });

}))

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`server running on port ${port}...`)
}).on('error', (e) => {
    console.error(e.message)
    throw e;
});
