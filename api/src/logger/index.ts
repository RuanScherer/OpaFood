const getCurrentDate = () => {
  const date = new Date()

  const day = date.getUTCDate()
  const month = date.getUTCMonth() + 1

  const hour = date.getUTCHours()
  const minutes = date.getUTCMinutes()

  return `${month}-${day} ${hour}:${minutes}`
}

interface LogProps {
  type: 'INFO' | 'ERROR'
  step: 'START' | 'END' | 'UNIQUE'
  message: string
}

const log = ({ type, step, message }: LogProps) => {
  let log = `[${type}] `
  log += `(${getCurrentDate()}): `

  if (step === 'START') log += '<<<<< '
  if (step === 'END') log += '>>>>> '

  log += message

  console.log(log)
}

export { log }