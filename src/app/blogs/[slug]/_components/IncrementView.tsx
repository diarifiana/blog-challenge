"use client";

import axios from "axios";
import { FC, useEffect } from "react";

interface IncrementViewProp {
  objectId: string;
  totalView: number;
}

const IncrementView: FC<IncrementViewProp> = ({ objectId, totalView }) => {
  useEffect(() => {
    // fungsi yang diexecute untuk menambah count totalView

    const increment = async () => {
      await axios.put(
        `https://helpfulpickle-us.backendless.app/api/data/blogs/${objectId}`,
        {
          totalView: totalView + 1,
        }
      );
    };

    increment();
  }, []);

  return <></>;
};

export default IncrementView;
