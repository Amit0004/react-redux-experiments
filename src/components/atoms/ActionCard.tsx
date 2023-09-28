import React, { useState } from "react";

import classes from "./ActionCard.module.css";
import Button from "./Button";

export interface ActionCardProps {
  children?: React.ReactNode;
  id?: string;
  type?: string;
  header?: string;
  value?: string;
  style?: object;
  width?: string;
  mode?: "edit" | "view";
}

const ActionCard = ({
  children,
  id,
  type,
  mode = "edit",
  value,
  header = "New Action",
  width,
  style,
}: ActionCardProps) => {
  const dimension = "25px";
  const [curState, setCurState] = useState(mode);
  return (
    <div className={classes.actionCard} style={{ ...style, width: width }}>
      <div className={classes.actionCardHeader}>
        <div className={classes.actionCardTitle}>
          <b>{header}</b>
        </div>
        <div className={classes.actionCardActions}>
          {curState === "edit" && (
            <>
              <Button width={dimension} height={dimension}>
                o
              </Button>
              <Button width={dimension} height={dimension}>
                x
              </Button>
            </>
          )}
          {curState === "view" && (
            <Button width={dimension} height={dimension}>
              e
            </Button>
          )}
        </div>
      </div>
      <div className={classes.actionCardBody}>
        <textarea disabled rows={4} value={value}></textarea>
      </div>
      <div className={classes.actionCardFooter}>
        {curState === "edit" ? (
          <Button onClick={() => setCurState("view")}>Save</Button>
        ) : (
          <Button onClick={() => setCurState("edit")}>Edit</Button>
        )}
      </div>
    </div>
  );
};

export default ActionCard;
