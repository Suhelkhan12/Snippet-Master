import { ChoiceDefinition } from "@/lib/types";
import { Radio, Field, Label, RadioGroup } from "@headlessui/react";
import React from "react";

interface ChoicesProps {
  choices: ChoiceDefinition[];
  initialValue: ChoiceDefinition;
  setValue: (_: ChoiceDefinition) => void;
}

// eslint-disable-next-line react/display-name
const Choices = React.memo(
  ({ choices, initialValue, setValue }: ChoicesProps) => {
    return (
      <RadioGroup value={initialValue} onChange={setValue}>
        <div className="flex gap-3 text-sm">
          {choices.map((choice) => (
            <Field key={choice.label} className="flex items-center gap-2">
              <Radio
                value={choice}
                className="group cursor-pointer flex size-4 items-center justify-center rounded-md border bg-white data-[checked]:bg-blue-900"
              >
                <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible transition-colors duration-300 ease-in-out" />
              </Radio>
              <Label className="capitalize">{choice.label}</Label>
            </Field>
          ))}
        </div>
      </RadioGroup>
    );
  }
);

export default Choices;
