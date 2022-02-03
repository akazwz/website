import { useEffect, useRef, useState } from 'react'
import { audioBufferToWav } from '../utils/towav'

export type ReactMediaRecorderProps = {
  /*audio?: boolean | MediaTrackConstraints
  video?: boolean | MediaTrackConstraints*/
  recorderConfig?: recorderConfig | null
}

export type ReactMediaRecorderRenderProps = {
  startRecording: () => void; // 开始录音
  stopRecording: () => void; // 结束录音
  pauseRecording?: () => void; // 暂停录音
  resumeRecording?: () => void; // 恢复录音
  cancelRecording?: () => void; // 取消录音
  blob: Blob | null; // 二进制数据
  status?: RecordStatus
  previewAudioStream?: MediaStream | null
}

// 录音配置
export type recorderConfig = {
  sampleBits: 8 | 16 | 32 // 采样位数
  sampleRate: number // 采样率
  channelsCount: number // 声道数
}

export enum RecordStatus {
  Idle,
  Recording,
  Stopped,
  Paused,
  Canceled,
  PermissionDenied,
  RecorderError
}

export function useMediaRecorder ({
  recorderConfig
}: ReactMediaRecorderProps): ReactMediaRecorderRenderProps {

  const audioContext = useRef<AudioContext | null>(null)
  const mediaRecorder = useRef<MediaRecorder | null>(null) // MediaRecorder
  const mediaStream = useRef<MediaStream | null>(null) // MediaStream
  const mediaChunks = useRef<Blob[]>([]) // mediaChunks

  const fileSize = useRef<number>(0) // 录音大小 byte
  const duration = useRef<number>(0) // 录音时长

  const [status, setStatus] = useState<RecordStatus>(RecordStatus.Idle)
  const [mediaBLob, setMediaBlob] = useState<Blob | null>(null)

  useEffect(() => {
    /*判断浏览器是否支持*/
    if (!window.MediaRecorder) {
      setStatus(RecordStatus.RecorderError)
    }
  }, [])

  /* 开始录音 */
  const startRecording = async () => {
    /* 清空 blob */
    setMediaBlob(null)
    /*初始化 audio context*/
    if (!audioContext.current) {
      audioContext.current = new AudioContext({
        /*默认采样率 16000*/
        sampleRate: recorderConfig?.sampleRate || 16000
      })
    }

    if (!mediaStream.current) {
      try {
        mediaStream.current = await navigator.mediaDevices.getUserMedia({
          /* 获取音频流 默认声道数 = 2 默认采样率 = 16000 */
          audio: {
            channelCount: recorderConfig?.channelsCount || 2,
            sampleRate: recorderConfig?.sampleRate || 16000,
          }
        })
      } catch (e) {
        /*获取音频流出错*/
        setStatus(RecordStatus.PermissionDenied)
      }
    }

    /* 音频流不存在*/
    if (!mediaStream.current) {
      setStatus(RecordStatus.PermissionDenied)
      return
    }

    /*音频流结束 重新录音*/
    const isSteamEnded = mediaStream.current.getTracks().some((track) => track.readyState === 'ended')
    if (isSteamEnded) {
      mediaStream.current = await navigator.mediaDevices.getUserMedia({
        /* 获取音频流 默认声道数 = 2 默认采样率 = 16000 */
        audio: {
          channelCount: recorderConfig?.channelsCount || 2,
          sampleRate: recorderConfig?.sampleRate || 16000,
        }
      })
    }

    /*获取 media recorder*/
    mediaRecorder.current = new MediaRecorder(mediaStream.current)
    /*音频数据可用时*/
    mediaRecorder.current.ondataavailable = async ({ data }: BlobEvent) => {
      if (RecordStatus.Canceled === status) {
        return
      }
      audioContext.current
      && audioContext.current.decodeAudioData(await data.arrayBuffer(), (audioBuffer: AudioBuffer) => {
        /* 获取到 audio buffer */
        // 转化成 wav
        const wavArrayBuffer = audioBufferToWav(audioBuffer, {
          bitDepth: recorderConfig?.sampleBits || 16
        })
        /* wav blob*/
        const wavBlob = new Blob([wavArrayBuffer], { type: 'audio/wav' })
        setMediaBlob(wavBlob)
      }, (err) => {
        /* 解码音频数据错误 */
        setStatus(RecordStatus.RecorderError)
      })
    }

    mediaRecorder.current.onstop = () => {
      setStatus(RecordStatus.Stopped)
    }

    mediaRecorder.current.start()
    setStatus(RecordStatus.Recording)
  }

  const pauseRecording = () => {
    if (!mediaRecorder.current) {
      return
    }
    if (mediaRecorder.current?.state !== 'recording') {
      return
    }
    mediaRecorder.current.pause()
    setStatus(RecordStatus.Paused)
  }

  const resumeRecording = () => {
    if (!mediaRecorder.current) {
      return
    }
    if (mediaRecorder.current?.state !== 'paused') {
      return
    }
    mediaRecorder.current.pause()
    setStatus(RecordStatus.Recording)
  }

  const stopRecording = () => {
    if (!mediaRecorder.current) {
      return
    }

    /*停止音频流*/
    mediaStream.current
    && mediaStream.current.getTracks().forEach((track) => track.stop())

    /* 关闭 media recorder  */
    mediaRecorder.current.state !== 'inactive'
    && mediaRecorder.current.stop()

    setStatus(RecordStatus.Stopped)
  }

  const cancelRecording = () => {
    if (!mediaRecorder.current) {
      return
    }

    /*停止音频流*/
    mediaStream.current
    && mediaStream.current.getTracks().forEach((track) => track.stop())

    setStatus(RecordStatus.Canceled)

    /* 关闭 media recorder  */
    mediaRecorder.current.state !== 'inactive'
    && mediaRecorder.current.stop()
  }

  return {
    startRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
    cancelRecording,
    blob: mediaBLob,
    status,
    previewAudioStream: mediaStream.current
      ? new MediaStream(mediaStream.current.getAudioTracks())
      : null
  }
}
