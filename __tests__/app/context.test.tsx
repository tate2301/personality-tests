import AnswersContext from "@/context/AnswersContext";
import { renderHook } from "@testing-library/react";
import { useContext } from "react";

describe("<AnswersContextProvider />", () => {
  it("provides the answers context", () => {
    const { result } = renderHook(() => useContext(AnswersContext));
    expect(result.current).toEqual(
      expect.objectContaining({
        answers: expect.any(Map),
        commitAnswer: expect.any(Function),
        removeAnswer: expect.any(Function),
        name: null,
      })
    );
  });
});
