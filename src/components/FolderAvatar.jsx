import { motion } from "framer-motion";
import folderImg from "/mac-folder-96.png";
import avatarImg from "/profile photo.jpg";

export default function FolderAvatar() {
  return (
    <div className="page">
      <motion.div
        whileHover="hover"
        className="folder-wrap"
      >
        <motion.div
          className="avatar-shell"
          initial={{ scale: 0.92, opacity: 0.82, y: 8 }}
          variants={{ hover: { scale: 1.06, opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            src={avatarImg}
            alt="avatar"
            className="avatar"
            initial={{ y: 42, scale: 1 }}
            variants={{ hover: { y: -20, scale: 1.03 } }}
            transition={{ duration: 0.85, ease: [0.2, 0.9, 0.2, 1] }}
          />
        </motion.div>

        <motion.div
          className="shadow"
          initial={{ opacity: 0.45, scale: 0.9 }}
          variants={{ hover: { opacity: 0.65, scale: 1.08 } }}
          transition={{ duration: 0.55 }}
        />

        <motion.div
          className="folder-box"
          variants={{ hover: { y: -4, scale: 1.02 } }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            src={folderImg}
            alt="folder"
            className="folder"
            variants={{ hover: { rotate: -1.2, y: -2 } }}
            transition={{ duration: 0.45 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
