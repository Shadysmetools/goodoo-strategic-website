// Date utilities for the meeting system
// To update the current date, simply change the date string below
export const CURRENT_DATE = new Date('2025-06-22') // Sunday, June 22, 2025

export interface WeekInfo {
  weekNumber: number
  startDate: Date
  endDate: Date
  weekRange: string
}

export const getWeekInfo = (date: Date): WeekInfo => {
  const startOfWeek = new Date(date)
  const day = startOfWeek.getDay()
  const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : 1) // Adjust when day is Sunday
  startOfWeek.setDate(diff)
  
  const endOfWeek = new Date(startOfWeek)
  endOfWeek.setDate(startOfWeek.getDate() + 6)
  
  const weekNumber = Math.ceil((startOfWeek.getTime() - new Date(startOfWeek.getFullYear(), 0, 1).getTime()) / (7 * 24 * 60 * 60 * 1000))
  
  return {
    weekNumber,
    startDate: startOfWeek,
    endDate: endOfWeek,
    weekRange: `${startOfWeek.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}-${endOfWeek.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`
  }
}

export const getNextMonday = (fromDate: Date = CURRENT_DATE): Date => {
  const nextMonday = new Date(fromDate)
  nextMonday.setDate(fromDate.getDate() + (8 - fromDate.getDay())) // Next Monday
  return nextMonday
}

export const formatMeetingDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

export const formatCurrentDate = (): string => {
  return formatMeetingDate(CURRENT_DATE)
} 