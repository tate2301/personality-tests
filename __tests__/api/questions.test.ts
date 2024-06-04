import { getPercentageScore, getPersonalityFromScore } from "@/lib/question";

describe("Questions API", () => {
  it("Calculates percentage score for selected option ids", () => {
    expect(getPercentageScore([0, 0, 0, 0, 0])).toBe(0);
    expect(getPercentageScore([4, 1, 2, 0, 4])).toBe(
      Number(((11 / 20) * 100).toFixed(0))
    );
  });

  it("Determines the personality based on a score", () => {
    expect(getPersonalityFromScore(40)).toBe("Introvert");
    expect(getPersonalityFromScore(60)).toBe("Extrovert");
    expect(getPersonalityFromScore(50)).toBe("Ambivert");
  });
});
