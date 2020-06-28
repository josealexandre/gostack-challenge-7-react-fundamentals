const formatValue = (value: number | Date): string => {
  const localValue = Number(value);

  if (Number.isNaN(localValue)) {
    return Intl.DateTimeFormat('pt-BR').format(new Date(value));
  }

  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(localValue);
};

export default formatValue;
