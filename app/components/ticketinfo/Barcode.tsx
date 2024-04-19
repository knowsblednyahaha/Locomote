import { useBarcode } from "next-barcode";
import React from "react";

const Barcode = () => {
  const { inputRef } = useBarcode({
    value: "next-barcode",
    options: {
      displayValue: false,
      width: 2,
      height: 100,
    },
  });

  return <svg ref={inputRef} />;
};

export default Barcode;
