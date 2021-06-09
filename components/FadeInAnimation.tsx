import { motion } from "framer-motion";
import React, { ReactElement } from "react";

interface Props {
  children: React.ReactNode;
}

export default function FadeInAnimation({
  children,
  ...props
}: Props): ReactElement {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
      {...props}
    >
      {children}
    </motion.section>
  );
}
