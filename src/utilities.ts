export const epochToDate = (
  epoch: number,
  option: "numeric" | "full" = "full"
): string => {
  switch (option) {
    case "numeric":
      return new Intl.DateTimeFormat("en-GB", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
      }).format(epoch * 1000);
    case "full":
      return new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }).format(epoch * 1000);
  }
};
