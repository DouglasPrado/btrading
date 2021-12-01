// https://github.com/jaggedsoft/node-binance-api
// https://account.jet-bot.com/dashboard/bots-marketplace

import type { NextApiRequest, NextApiResponse } from 'next'

type Response = {
  message: string
  error: boolean
}

const handler = (req: NextApiRequest, res: NextApiResponse<Response>) => {
  res.status(200).json({ error: false, message: 'Hello world' })
}

export default handler
