import "react-spring-bottom-sheet/dist/style.css";
import { useState, useRef } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import useDebounce from "@components/home/hooks/useDebounce";
import BottomSheetHeader from "@components/home/bottom-sheet/BottomSheetHeader";
import BottomSheetBody from "@components/home/bottom-sheet/BottomSheetBody";
import BottomSheetBodySkeleton from "@components/home/bottom-sheet/BottomSheetBodySkeleton";
import React from "react";

const BottomSheetContainer = () => {
  const [loadingOpen, setLoadingOpen] = useState(false);
  const sheetRef = useRef();
  const open = useDebounce(loadingOpen, 1000);

  const handleButtonSheet = () => {
    if (sheetRef.current.height > 120) {
      sheetRef.current.snapTo(({ snapPoints }) => snapPoints[0]);
    } else {
      sheetRef.current.snapTo(({ snapPoints }) => snapPoints[1]);
    }
  };

  return (
    <BottomSheet
      open
      blocking={false}
      ref={sheetRef}
      scrollLocking={true}
      snapPoints={({ headerHeight, maxHeight }) => [
        headerHeight,
        (maxHeight - 56) * 0.65,
        maxHeight - 56,
      ]}
      onSpringStart={(event) => event.type === "SNAP" && setLoadingOpen(true)}
      header={<BottomSheetHeader onClick={handleButtonSheet} />}
    >
      {open ? <BottomSheetBody /> : <BottomSheetBodySkeleton />}
    </BottomSheet>
  );
};

export default BottomSheetContainer;
