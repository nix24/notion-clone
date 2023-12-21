import { useEffect } from "react";
import { CheckCircle, FileKey2, LibraryBig } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Heroes = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const { ref: ref1, inView: inView1 } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();
  const { ref: ref3, inView: inView3 } = useInView();

  useEffect(() => {
    if (inView1) {
      controls1.start({ x: 0, opacity: 1, transition: { delay: 0.75 } });
    }
  }, [controls1, inView1]);

  useEffect(() => {
    if (inView2) {
      controls2.start({ x: 0, opacity: 1, transition: { delay: 1 } });
    }
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) {
      controls3.start({ x: 0, opacity: 1, transition: { delay: 0.5 } });
    }
  }, [controls3, inView3]);

  return (
    <div className="grid grid-cols-1 gap-5 items-center justify-center mx-10 space-y-40">
      <motion.div
        className="rounded-lg p-4 max-w-screen-md transform md:-translate-x-80"
        ref={ref1}
        initial={{ x: 100, opacity: 0 }}
        animate={controls1}
      >
        <LibraryBig className="mx-auto w-24 h-24 " color="blue" />
        <h3 className="text-xl font-bold">Capture your ideas Effortlessly</h3>
        <p className="text-lg">
          Seemlessly jot down ideas, compile research, and document your work
          conveniently & efficiently.
        </p>
      </motion.div>
      <motion.div
        className="rounded-lg p-4 max-w-screen-md transform md:translate-x-80"
        ref={ref2}
        initial={{ x: -100, opacity: 0 }}
        animate={controls2}
      >
        <FileKey2 className="mx-auto w-24 h-24" color="green" />
        <h3 className="text-xl font-bold">Your Files, Your Rules</h3>
        <p className="text-lg">
          Organize how you want it, when you want it. Jotion gives you full
          control over who can manage your files and who can view them.
        </p>
      </motion.div>
      <motion.div
        className="rounded-lg p-4 max-w-screen-md transform md:-translate-x-80"
        ref={ref3}
        initial={{ x: 100, opacity: 0 }}
        animate={controls3}
      >
        <CheckCircle className="mx-auto w-24 h-24" color="orange" />
        <h3 className="text-xl font-bold">Intuitive Design</h3>
        <p className="text-lg">
          Jotion is designed to be simple, yet powerful. It's easy to use and
          easy to learn. Perfect from basic note-taking to managing advanced
          projects.
        </p>
      </motion.div>
    </div>
  );
};

export default Heroes;
