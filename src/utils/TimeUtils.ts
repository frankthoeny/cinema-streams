export const formatMinutes = (
  totalMinutes: number | string | undefined
): string => {
  if (typeof totalMinutes === "undefined") {
    return "";
  }

  if (typeof totalMinutes === "string") {
    const minutes = totalMinutes.replace(" minutes", "");
    totalMinutes = parseInt(minutes, 10);
  }

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours} hours ${minutes} minutes`;
};
