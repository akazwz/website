interface IOptions {
  bitDepth: 8 | 16 | 32
}

export function audioBufferToWav (buffer: AudioBuffer, options?: IOptions): ArrayBuffer {
  const numChannels = buffer.numberOfChannels
  const sampleRate = buffer.sampleRate
  /*format 8bit and 16bi  format = 1 , 32bit format = 3 */
  const format = options?.bitDepth === 32 ? 3 : 1
  const bitDepth = options?.bitDepth || 16

  let result: Float32Array

  if (numChannels === 2) {
    /*2 channels*/
    result = interleave(buffer.getChannelData(0), buffer.getChannelData(1))
  } else {
    /*1 channel*/
    result = buffer.getChannelData(0)
  }

  return encodeWAV(result, format, sampleRate, numChannels, bitDepth)
}

function encodeWAV (samples: Float32Array, format: number, sampleRate: number, numChannels: number, bitDepth: 8 | 16 | 32): ArrayBuffer {
  const bytesPerSample = bitDepth / 8
  const blockAlign = numChannels * bytesPerSample

  /* length = pcm body and 44 wav header*/
  let buffer = new ArrayBuffer(44 + samples.length * bytesPerSample)
  let view = new DataView(buffer)

  /* RIFF identifier */
  writeString(view, 0, 'RIFF')
  /* RIFF chunk length */
  view.setUint32(4, 36 + samples.length * bytesPerSample, true)
  /* RIFF type */
  writeString(view, 8, 'WAVE')
  /* format chunk identifier */
  writeString(view, 12, 'fmt ')
  /* format chunk length */
  view.setUint32(16, 16, true)
  /* sample format (raw) */
  view.setUint16(20, format, true)
  /* channel count */
  view.setUint16(22, numChannels, true)
  /* sample rate */
  view.setUint32(24, sampleRate, true)
  /* byte rate (sample rate * block align) */
  view.setUint32(28, sampleRate * blockAlign, true)
  /* block align (channel count * bytes per sample) */
  view.setUint16(32, blockAlign, true)
  /* bits per sample */
  view.setUint16(34, bitDepth, true)
  /* data chunk identifier */
  writeString(view, 36, 'data')
  /* data chunk length */
  view.setUint32(40, samples.length * bytesPerSample, true)

  switch (bitDepth) {
    case 8:
      floatTo8BitPCM(view, 44, samples)
      break
    case 16:
      floatTo16BitPCM(view, 44, samples)
      break
    case 32:
      writeFloat32(view, 44, samples)
  }

  return buffer
}

/* interleave merge left and right audio */
function interleave (inputL: Float32Array, inputR: Float32Array): Float32Array {
  const length = inputL.length + inputR.length
  let result = new Float32Array(length)

  let index = 0
  let inputIndex = 0

  while (index < length) {
    result[index++] = inputL[inputIndex]
    result[index++] = inputR[inputIndex]
    inputIndex++
  }
  return result
}

function writeFloat32 (output: DataView, offset: number, input: Float32Array): void {
  for (let i = 0; i < input.length; i++, offset += 4) {
    output.setFloat32(offset, input[i], true)
  }
}

function floatTo16BitPCM (output: DataView, offset: number, input: Float32Array): void {
  for (let i = 0; i < input.length; i++, offset += 2) {
    let s = Math.max(-1, Math.min(1, input[i]))
    output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true)
  }
}

function floatTo8BitPCM (output: DataView, offset: number, input: Float32Array): void {
  for (let i = 0; i < input.length; i++, offset++) {
    let s = Math.max(-1, Math.min(1, input[i]))
    let val = s < 0 ? s * 128 : s * 127
    val = +val + 128
    output.setInt8(offset, val)
  }
}

function writeString (view: DataView, offset: number, string: string): void {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i))
  }
}