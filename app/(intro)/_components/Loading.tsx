import { Loader2 } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const loadingVariants = cva("text-muted-foreground animate-spin", {
  variants: {
    size: {
      sm: "w-5 h-5",
      md: "w-10 h-10",
      lg: "w-20 h-20",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface LoadingProps extends VariantProps<typeof loadingVariants> {}
const Loading: React.FC<LoadingProps> = ({ size = "md" }) => {
  return <Loader2 className={cn(loadingVariants({ size }))} />;
};

export default Loading;
