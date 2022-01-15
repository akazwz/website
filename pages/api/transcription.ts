import { Deepgram } from '@deepgram/sdk'
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const deepgramApiKey = 'f8aabb9b2281dca6b656b081a7b42e878ca2fdad'
  const AUDIO_URL = 'https://static.deepgram.com/examples/Bueller-Life-moves-pretty-fast.wav'
  const deepgram = new Deepgram(deepgramApiKey)

  console.log('Requesting transcript...')
  console.log('Your file may take up to a couple minutes to process.')
  console.log('While you wait, did you know that Deepgram accepts over 40 audio file formats? Even MP4s.')
  console.log('To learn more about customizing your transcripts check out developers.deepgram.com.')

  deepgram.transcription.preRecorded({ url: AUDIO_URL },
    { version: '', punctuate: true },
  )
    .then((transcription)=>{
      console.dir(transcription, {depth: null})
      res.status(200).json({transcription: transcription.toSRT()})
    })
    .catch((err)=>{
      res.status(500).json({msg: err})
      console.log(err)
    })
}



