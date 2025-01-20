type RandomNumberProps = {
  value: number;
};

type PositiveNumberProps = RandomNumberProps & {
  isPositive: boolean;
  isNegative?: never;
};

type NegativeNumberProps = RandomNumberProps & {
  isNegative: boolean;
  isPositive?: never;
};

function RandomNumber({
  value,
  isPositive,
  isNegative,
}: PositiveNumberProps | NegativeNumberProps) {
  return (
    <div>
      {isPositive && <p>This number is positive: {value}</p>}
      {isNegative && <p>This number is negative: {value}</p>}
    </div>
  );
}

export default RandomNumber;
