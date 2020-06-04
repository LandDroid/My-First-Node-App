import express from 'express';
const app = express();
import { get } from 'https';

app.get('/', (request, response) => 
{
    get('https://insult.mattbas.org/api/insult', resp => 
        {
            resp.on('data', chunk => 
                {
                    response.send(`
          ras              <http>
                        <head><title>Oh Snap Landon</title></head>
                        <body>
                            <h1>OH SNAP!</h1>
                            <p style="font-size: 24px; color: red;">
                            ${chunk.toString()}!
                            </p>
                        </body>
                        </http>
                    `);
                });
        });
});

app.listen(process.env.PORT || 3000);