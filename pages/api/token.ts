import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler (req: NextApiRequest, res: NextApiResponse) {
  const RPCClient = require('@alicloud/pop-core').RPCClient
  const client = new RPCClient({
    accessKeyId: process.env.AK,
    accessKeySecret: process.env.AS,
    endpoint: 'http://nls-meta.cn-shanghai.aliyuncs.com/',
    apiVersion: '2019-02-28',
  })

  client.request('CreateToken').then((result: any) => {
    const data = JSON.parse(JSON.stringify(result))
    const { ErrMsg, Token } = data
    if (ErrMsg.length > 0) {
      res.status(400).json({
        msg: ErrMsg
      })
    }
    const { Id, ExpireTime } = Token
    res.status(200).json({
      token: Id,
      expire: ExpireTime,
    })
  }).catch(() => {
    res.status(400).json({
      msg: 'get token error'
    })
  })
}
