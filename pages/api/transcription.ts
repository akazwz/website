import { NextApiRequest, NextApiResponse } from 'next'
import qiniu from 'qiniu'
import * as TencentCloud from 'tencentcloud-sdk-nodejs'

export default function handler (req: NextApiRequest, res: NextApiResponse) {
  let { key, locale } = req.query
  if (typeof key !== 'string') {
    res.status(500).json({
      err: 'params error',
    })
    return
  }
  const url = getFileUrl(key)

  const AsrClient = TencentCloud.asr.v20190614.Client

  const clientConfig = {
    credential: {
      secretId: process.env.TAK,
      secretKey: process.env.TAS,
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
      EngSerViceType = '16k_zh'
  }

  const client = new AsrClient(clientConfig)
  const params = {
    'ProjectId': 0,
    'SubServiceType': 2,
    'EngSerViceType': EngSerViceType,
    'SourceType': 0,
    'VoiceFormat': 'wav',
    'UsrAudioKey': 'zwz',
    'Url': url,
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

const getFileUrl = (key: string): string => {
  const accessKey = process.env.QAK || ''
  const secretKey = process.env.QSK || ''
  const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)

  const config = new qiniu.conf.Config()
  const bucketManager = new qiniu.rs.BucketManager(mac, config)
  const privateBucketDomain = 'https://file.hellozwz.com'
  const deadline = parseInt(String(Date.now() / 1000)) + 360
  return bucketManager.privateDownloadUrl(privateBucketDomain, key, deadline)
}



