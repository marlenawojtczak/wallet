export const getColor = (categoryToFind) => {
  const categoryColors = {};
  const data = [
    { category: "Main expenses", color: "#fed057" },
    { category: "Products", color: "#ffd8d0" },
    { category: "Car", color: "#fd9498" },
    { category: "Self care", color: "#c5baff" },
    { category: "Child care", color: "#6e78e8" },
    { category: "Household products", color: "#4a56e2" },
    { category: "Education", color: "#81e1ff" },
    { category: "Leisure", color: "#24cca7" },
    { category: "Other expenses", color: "#00ad84" },
  ];
  data.forEach((item) => {
    categoryColors[item.category] = item.color;
  });

  const color = categoryColors[categoryToFind] || null;

  return color;
};
