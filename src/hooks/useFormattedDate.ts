import { ref, Ref } from 'vue'

const useFormattedDate = (date: string): Ref<string> => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  }
  const formattedDate: Ref<string> = ref(new Date(date).toLocaleDateString('en-US', options))

  return formattedDate
}

export { useFormattedDate }
