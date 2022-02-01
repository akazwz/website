import { NextApiRequest, NextApiResponse } from 'next'
import * as TencentCloud from 'tencentcloud-sdk-nodejs'

export default function handler (req: NextApiRequest, res: NextApiResponse) {
  let { base64Audio, dataLen, locale } = JSON.parse(req.body)
  if (base64Audio.length < 1 || dataLen.length < 1 || locale.length < 1) {
    res.status(400).json({ msg: 'params error' })
    return
  }

  base64Audio = base64Audio.slice(base64Audio.indexOf(',') + 1).replace(/[\r\n]/g, '')

  const AsrClient = TencentCloud.asr.v20190614.Client

  const clientConfig = {
    credential: {
      secretId: 'AKIDKTMyJNAgvtZy7zauzoMddNq2xc07wVno',
      secretKey: 'lFUS8XgY9SVHm10jBMGvJPFp8AvPcZFf',
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
      EngSerViceType = '16k_en'
      break
    default:
      EngSerViceType = '16k_en'
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
    /*'DataLen': dataLen,*/
  }
  client.SentenceRecognition(params).then(
    (data) => {
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



