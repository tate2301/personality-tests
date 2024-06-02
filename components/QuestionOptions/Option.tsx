"use client";
import { cn } from "@/lib/utils";
import * as RadioGroup from "@radix-ui/react-radio-group";

type OptionProps = {
  option: string;
  index: number;
  isSelected: boolean;
};

const Option = (props: OptionProps) => {
  return (
    <div
      className={cn(
        "h-[48px] rounded-full font-semibold border-zinc-400/20 text-zinc-600 pl-3 pr-6 gap-4 flex items-center border relative",
        props.isSelected && "text-[#202020] bg-zinc-600/10 border-transparent"
      )}
    >
      <RadioGroup.Item
        value={`${props.index}`}
        id={`option-${props.index}`}
        className={cn(
          "bg-white w-[24px] h-[24px] rounded-full border border-zinc-400/30",
          props.isSelected && "ring ring-blue-600"
        )}
      >
        <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[14px] after:h-[14px] after:rounded-[50%] after:bg-blue-600" />
      </RadioGroup.Item>
      <label
        className="flex-1 inset-0 absolute pl-14 flex items-center"
        htmlFor={`option-${props.index}`}
      >
        {props.option}
      </label>
    </div>
  );
};

export default Option;
