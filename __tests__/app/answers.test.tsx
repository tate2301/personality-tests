import LocalStorageMock from "@/__mocks__/LocalStorage";
import QuestionCard from "@/components/QuestionCard";
import { AnswersContextProvider } from "@/context/AnswersContext";
import { getQuestions } from "@/lib/question";
import { render } from "@testing-library/react";
import mockRouter from "next-router-mock";
import { act } from "react";

global.localStorage = new LocalStorageMock();

const questions = getQuestions();
const TestQuestionsCard = (props: { idx: number }) => {
  return (
    <AnswersContextProvider name="test name">
      <QuestionCard
        question={questions[props.idx]}
        nextQuestionIdx={props.idx + 1}
      />
    </AnswersContextProvider>
  );
};

describe("<QuestionsCard />", () => {
  it("mocks the useRouter hook", () => {
    mockRouter.setCurrentUrl("/platform/1");
    expect(mockRouter.pathname).toBe("/platform/1");
  });

  it("renders the question correctly", () => {
    const questionIdx = 0;
    const question = questions[questionIdx];
    const { getByTestId } = render(<TestQuestionsCard idx={questionIdx} />);
    const questionIndex = getByTestId("question-index");
    const questionTitle = getByTestId("question-title");
    const questionDescription = getByTestId("question-description");

    const nextButton = getByTestId("next");

    expect(questionIndex.textContent).toEqual(`Question ${question.id}`);
    expect(questionTitle.textContent).toEqual(question.question);
    expect(questionDescription.textContent).toEqual(question.description);

    expect(nextButton).toHaveAttribute("disabled");
  });

  it("renders the question answer options", () => {
    const questionIdx = 0;
    const question = questions[questionIdx];
    const { getByTestId } = render(<TestQuestionsCard idx={questionIdx} />);

    const optionsLabel = question.options.map((_, index) => {
      return getByTestId(`option-${index}-label`);
    });

    const options = question.options.map((_, index) => {
      return getByTestId(`option-${index}`);
    });

    optionsLabel.forEach((option, index) => {
      expect(option.textContent).toEqual(question.options[index]);
    });

    options.forEach((option, index) => {
      expect(option).toHaveValue(index.toString());
    });
  });

  it("enables next button when an option is selected", () => {
    const questionIdx = 0;
    const { getByTestId } = render(<TestQuestionsCard idx={questionIdx} />);
    const nextButton = getByTestId("next");
    const option = getByTestId("option-0-label");
    act(() => {
      option.click();
    });
    expect(nextButton).not.toHaveAttribute("disabled");
  });

  it("enables prev button when idx > 0", () => {
    const questionIdx = 1;
    const { getByTestId } = render(<TestQuestionsCard idx={questionIdx} />);
    const nextButton = getByTestId("prev");
    expect(nextButton).toBeInTheDocument();
  });
});
