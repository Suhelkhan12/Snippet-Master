"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Highlight, themes } from "prism-react-renderer";

const Code = () => {
  // getting refs for pretag, textarea and container
  const preRef = useRef<HTMLPreElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // state value for textarea
  const [value, setValue] = useState<string>("");
  const [isTextAreaFocused, setIsTextAreaFocused] = useState<boolean>(false);

  // for focusing the textarea
  useEffect(() => {
    if (textareaRef.current) textareaRef.current.focus();
  }, []);

  // for changing height of text area based on container and pre tag height
  useEffect(() => {
    if (containerRef.current && preRef.current && textareaRef.current) {
      const containerHeight = containerRef.current.clientHeight;
      const preHeight = preRef.current.clientHeight;

      textareaRef.current.style.height = `${Math.max(
        containerHeight,
        preHeight
      )}px`;
    }
  }, [containerRef.current?.clientHeight, preRef.current?.clientHeight]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <div
      className={cn(
        isTextAreaFocused ? "border border-pink-400" : "border-white",
        "h-2/3 w-2/3 max-w-xl rounded-xl border-[1px] py-4",
        "transition-colors duration-300 ease-in-out"
      )}
    >
      <div ref={containerRef} className="relative w-full h-full overflow-auto ">
        <Highlight theme={themes.nightOwl} language={"tsx"} code={value}>
          {({ className, tokens, getLineProps, getTokenProps }) => (
            <>
              <textarea
                ref={textareaRef}
                value={value}
                onChange={handleChange}
                placeholder="Enter some code here"
                spellCheck={false}
                onFocus={() => setIsTextAreaFocused(true)}
                onBlur={() => setIsTextAreaFocused(false)}
                className={cn(
                  className,
                  "absolute resize-none overflow-hidden w-full whitespace-pre-wrap break-words break-keep bg-transparent pl-16 pr-3 font-mono",
                  "caret-pink-500 selection:bg-pink-500/30 placeholder:text-white focus:outline-none"
                )}
              />
              <pre
                ref={preRef}
                aria-hidden={true}
                className={cn(
                  className,
                  "pointer-events-none absolute w-full select-none pr-3"
                )}
              >
                {tokens.map((line, i) => (
                  <div
                    key={i}
                    {...getLineProps({ line })}
                    className=" table-row"
                  >
                    <span className=" table-cell w-10 select-none text-right opacity-50">
                      {i + 1}
                    </span>
                    <code className="table-cell whitespace-pre-wrap break-words break-keep pl-6">
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })}></span>
                      ))}
                    </code>
                  </div>
                ))}
              </pre>
            </>
          )}
        </Highlight>
      </div>
    </div>
  );
};

export default Code;
