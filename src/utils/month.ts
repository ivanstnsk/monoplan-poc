const MONTHS = {
  '0': 'Січень',
  '1': 'Лютий',
  '2': 'Березень',
  '3': 'Квітень',
  '4': 'Травень',
  '5': 'Червень',
  '6': 'Липень',
  '7': 'Серпень',
  '8': 'Вересень',
  '9': 'Жовтень',
  '10': 'Листопад',
  '11': 'Грудень',
};


export const getMonthNameByIndex = (month: string): string => {
  return MONTHS[month] || 'Invalid month';
}