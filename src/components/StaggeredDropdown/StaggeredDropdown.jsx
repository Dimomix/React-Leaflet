import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from './StaggeredDropdown.module.scss';

const StaggeredDropDown = () => {
  const [open, setOpen] = useState(false);

  return (
      <div className={styles.dropdownContainer}>
        <motion.div animate={open ? "open" : "closed"} className={styles.dropdown}>
          <button
              onClick={() => setOpen((pv) => !pv)}
              className={styles.dropdownButton}
          >
            <span className={styles.buttonText}>Post actions</span>
            <motion.span variants={iconVariants}>
              <FiChevronDown />
            </motion.span>
          </button>

          <motion.ul
              initial={wrapperVariants.closed}
              variants={wrapperVariants}
              className={styles.dropdownMenu}
          >
            <Option setOpen={setOpen} text="TK-915" />
            <Option setOpen={setOpen} text="TK-916" />
            <Option setOpen={setOpen} text="TK-905" />
            <Option setOpen={setOpen} text="TK-913" />
            <Option setOpen={setOpen} text="TK-905B">Text</Option>
          </motion.ul>
        </motion.div>
      </div>
  );
};

const Option = ({ text, setOpen }) => {
  return (
      <motion.li
          variants={itemVariants}
          onClick={() => setOpen(false)}
          className={styles.dropdownOption}
      >
        <span>{text}</span>
      </motion.li>
  );
};

export default StaggeredDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};
