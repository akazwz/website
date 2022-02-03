import { upload } from 'qiniu-js'
import { UploadProgress } from 'qiniu-js/esm/upload'
import { SetStateAction, useEffect, useMemo, useRef, useState } from 'react'

export enum Status {
  Ready,
  Processing,
  Finished,
}

export function useUpload (file: File | null, token: string | null) {
  const startTimeRef = useRef<number | null>(null)
  const [state, setState] = useState<Status | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [speedPeak, setSpeedPeak] = useState<number | null>(null)
  const [completeInfo, setCompleteInfo] = useState<any | null>(null)
  const [progress, setProgress] = useState<UploadProgress | null>(null)
  const [observable, setObservable] = useState<ReturnType<typeof upload> | null>(null)
  const subscribeRef = useRef<ReturnType<ReturnType<typeof upload>['subscribe']> | null>(null)

  // start to upload file
  const start = () => {
    startTimeRef.current = Date.now()
    setCompleteInfo(null)
    setProgress(null)
    setError(null)

    subscribeRef.current = observable?.subscribe({
      error: (newError) => {
        setState(Status.Finished)
        setError(newError)
      },
      next: (newProgress) => {
        setState(Status.Processing)
        setProgress(newProgress)
      },
      complete: (newInfo) => {
        setState(Status.Finished)
        setError(null)
        setCompleteInfo(newInfo)
      }
    }) || null
  }

  // stop upload file
  const stop = () => {
    const subscribe = subscribeRef.current
    if (state === Status.Processing && subscribe && !subscribe.closed) {
      setState(Status.Finished)
      subscribe.unsubscribe()
    }
  }

  // get upload speed
  const speed = useMemo(() => {
    if (progress == null || progress.total == null || progress.total.loaded == null) return 0
    const duration = (Date.now() - (startTimeRef.current || 0)) / 1000

    if (Array.isArray(progress.chunks)) {
      const size = progress.chunks.reduce(((acc, cur) => (
        !cur.fromCache ? cur.loaded + acc : acc
      )), 0)

      return size > 0 ? Math.floor(size / duration) : 0
    }

    return progress.total.loaded > 0
      ? Math.floor(progress.total.loaded / duration)
      : 0
  }, [progress])

  useEffect(() => {
    setState(Status.Ready)
    if (token && file) {
      setObservable(upload(file, null, token))
    }
  }, [token, file])

  useEffect(() => {
    if (speed == null) {
      setSpeedPeak(0)
      return
    }

    if (speed > (speedPeak || 0)) {
      setSpeedPeak(speed)
    }
  }, [speed, speedPeak])

  return { start, stop, state, progress, error, completeInfo, speed, speedPeak }
}
