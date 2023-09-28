import classes from "./Circle.module.css";
export interface CircleProps {
  color?: string;
  size?: string;
  style?: React.CSSProperties;
}

export const Circle: React.FC<CircleProps> = ({ color, size, style }) => {
  return (
    <div
      className={classes.circle}
      style={{
        ...style,
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: color,
      }}
    />
  );
};
