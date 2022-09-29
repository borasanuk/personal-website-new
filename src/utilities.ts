export const epochToDate = (epoch: number): string => {
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(epoch * 1000);
};
