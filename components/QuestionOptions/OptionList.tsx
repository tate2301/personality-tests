"use client";
import * as RadioGroup from "@radix-ui/react-radio-group";
import Option from "./Option";
import { useState } from "react";

const QuestionOptions = (props: {
  options: string[];
  onSelectOption: (value: number) => void;
}) => {
  const [selectedOption, setSelectedOption] = useState<number | undefined>(
    undefined
  );

  const handleChange = (value: string) => {
    setSelectedOption(Number(value));
    props.onSelectOption(Number(value));
  };

  return (
    <form>
      <RadioGroup.Root
        onValueChange={handleChange}
        className="flex flex-col space-y-4"
      >
        {props.options.map((option, index) => (
          <Option
            key={`option-${index}`}
            option={option}
            index={index}
            isSelected={selectedOption === index}
          />
        ))}
      </RadioGroup.Root>
    </form>
  );
};

export default QuestionOptions;
