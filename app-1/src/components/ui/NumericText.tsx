type NumericTextProps = {
  readonly children: string | number;
};

const numericPartPattern = /^(?:\d+)$/u;

/**
 * Keeps numeric runs visually black while allowing surrounding copy to keep
 * its existing colour.
 */
export const NumericText = ({ children }: NumericTextProps) => (
  <>
    {String(children)
      .split(/(\d+)/u)
      .map((part, index) =>
        numericPartPattern.test(part) ? (
          <span className="text-[#000]" key={`${part}-${index}`}>
            {part}
          </span>
        ) : (
          part
        ),
      )}
  </>
);
