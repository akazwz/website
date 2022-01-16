import { NextApiRequest, NextApiResponse } from 'next'
import * as TencentCloud from 'tencentcloud-sdk-nodejs'

export default function handler (req: NextApiRequest, res: NextApiResponse) {
  const { base64Audio, dataLen, locale } = JSON.parse(req.body)
  if (base64Audio.length < 1 || dataLen.length < 1 || locale.length < 1) {
    res.status(400).json({ msg: 'params error' })
    return
  }

  const AsrClient = TencentCloud.asr.v20190614.Client

  const clientConfig = {
    credential: {
      secretId: 'AKIDd4ORDiwvd3C4MN7aniMjqgEVWGjvpXz9',
      secretKey: 'uYuznKaZGkyuZx4uTklUw71dy2pKYVBa',
    },
    region: '',
    profile: {
      httpProfile: {
        endpoint: 'asr.tencentcloudapi.com',
      },
    },
  }

  let EngSerViceType: string

  switch (locale) {
    case 'zh':
      EngSerViceType = '16k_zh'
      break
    case 'en':
      EngSerViceType = '8k_en'
      break
    default:
      EngSerViceType = '8k_en'
  }

  const client = new AsrClient(clientConfig)
  const params = {
    'ProjectId': 0,
    'SubServiceType': 2,
    'EngSerViceType': EngSerViceType,
    'SourceType': 1,
    'VoiceFormat': 'wav',
    'UsrAudioKey': 'zwz',
    'Data': base64Audio,
    'DataLen': dataLen,
  }
  client.SentenceRecognition(params).then(
    (data) => {
      console.log(data)
      res.status(200).json({
        data: data,
      })
      return
    },
    (err) => {
      console.error('error', err)
      res.status(500).json({
        err: err,
      })
    }
  )
    .catch((err) => {
      console.log(err)
    })
}



