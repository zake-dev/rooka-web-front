export const toKoreanDateString = (dateString) => {
	const [year, month, day] = dateString.split('-');
	return `${year}년 ${month}월 ${day}일`;
};

export const toKoreanMilitaryType = (militaryType) => {
  switch (militaryType) {
    case "army": return "육군";
    case "airforce": return "공군";
  }
}