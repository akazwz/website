// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler (req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: 'Token' })
}

const getToken = () => {
  const RPCClient = require('@alicloud/pop-core').RPCClient
  const client = new RPCClient({
    accessKeyId: '',
    accessKeySecret: '',
    endpoint: '',
    apiVersion: '',
  })

  client.request('CreateToken').then((result: { token: string }) => {
    console.log(result.token)
  })
}