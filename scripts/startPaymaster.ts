import * as fs from 'fs';
import express from 'express';
import cors from 'cors';

interface Config {
  port: number;
  paymasterAddress: string;
}

async function startProxy(config: Config): Promise<void> {

  if (!config.paymasterAddress) {
    console.log("paymasterAddress cannot be empty");
    return;
  }

  const app = express();
  app.set('keepAliveTimeout', 60000);
  app.use(cors())
  app.use(express.json())

  app.post('*', async (req, res) => {
    console.log("req: ", req.body)
    if (Array.isArray(req.body)) {
      req.body = req.body[0];
    }
    if (req.body.method === "pm_sponsorUserOperation") {
      res.json({
        jsonrpc: "2.0",
        result: config.paymasterAddress,
        id: req.body.id
      });
      return;
    }  
  });

  app.get('*', async (req, res) => {
    console.log("req: ", req.body)
    if (Array.isArray(req.body)) {
      req.body = req.body[0];
    }
    if (req.body.method === "pm_sponsorUserOperation") {
      res.json({
        jsonrpc: "2.0",
        result: config.paymasterAddress,
        id: req.body.id
      });
      return;
    }
  });

  app.listen(config.port, () => console.log('Paymaster listening on port ', config.port))
}

function parse_config(): Config {
  const jsonString = fs.readFileSync('config.json', 'utf8');
  const config: Config = JSON.parse(jsonString);
  return config;
}

const config = parse_config();
startProxy(config);
