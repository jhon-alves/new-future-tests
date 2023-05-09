export const today = new Date();

export const beforeMonth = new Date();
beforeMonth.setMonth(beforeMonth.getMonth() - 1);

export const threeMonth = new Date();
threeMonth.setMonth(threeMonth.getMonth() - 3);

export const sixMonth = new Date();
sixMonth.setMonth(sixMonth.getMonth() - 6);

export const oneYear = new Date();
oneYear.setMonth(oneYear.getMonth() - 12);

export const formatDate = (date: Date) => {
  return new Date(date.toISOString().slice(0, 10));
}
