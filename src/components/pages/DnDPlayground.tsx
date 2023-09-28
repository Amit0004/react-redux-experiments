import { DraggableCard } from "../molecules/DraggableCard";
import { DropBucket } from "../molecules/DropBucket";

export interface DnDPlaygroundProps {
  isDragging: boolean;
  text: string;
}

export const DndPlayground = (props: DnDPlaygroundProps) => {
  return (
    <>
      <DraggableCard />
      <DropBucket />
    </>
  );
};
