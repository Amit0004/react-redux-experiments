import React from "react";
import Button from "../atoms/Button";
import classes from "./ListBucket.module.css";
import { useAppSelector } from "../../hooks/typedHooks";
import { listStateSelector } from "../../reducers/slices/listStateSlice";
import ActionCard from "../atoms/ActionCard";

export interface ListBucketProps {
  children?: React.ReactNode;
  items: string[];
  label: string;
  id: string;
  style?: object;
  width?: string;
  onAddItem?: () => void;
}

const ListBucket = ({
  children,
  items = [],
  label,
  id,
  style,
  width,
  onAddItem,
}: ListBucketProps) => {
  return (
    <div style={{ width: width }} className={classes.listbucket}>
      <Button onClick={onAddItem}>Add items</Button>
      <div className={classes.listItems}>
        {items?.map((item: string) => (
          <ActionCard />
        ))}
      </div>
    </div>
  );
};

export default ListBucket;
