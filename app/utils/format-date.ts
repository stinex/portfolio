export const fromatDate = (unix_timestamp: number | null) => {
  if (unix_timestamp === null) return 'Present'

  return new Intl.DateTimeFormat('en-Us', {
    year: 'numeric',
    month: 'short',
  }).format(unix_timestamp * 1000)
}
