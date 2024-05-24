import { Skills } from "@/data";
import { cn } from "../../app/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBG";
import { GlobeDemo } from "./GridGlobe";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className, id, title, description, img, imgClassName, titleClassName, spareImg, }: {
    className?: string; id: number; title?: string | React.ReactNode;
    description?: string | React.ReactNode; img?: string; imgClassName?: string; titleClassName?: string; spareImg?: string;

  }) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-3xl relative overflow-hidden group/bento hover:shadow-xl transition duration-200  justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}>

      <div className={`${id === 6 && 'flex justify-center h-full'}`}>
        <div className="w-full h-full absolute">
          {img && <img src={img} alt="images" className={cn(imgClassName, 'object-cover object-center')} />}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}>
          {spareImg && (
            <img src={spareImg} alt="images" className={'object-cover object-center w-full h-full'} />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
          </BackgroundGradientAnimation>
        )}
        <div className={cn('group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5')}>
          <div className="font-sans font-extralight  text-[#c1c2d3] lg:text-base z-10 md:text-xs">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>

          {id === 2 && <GlobeDemo />}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2 ">
              <div className="flex flex-col gap-3">
                {["React.js", "Next.js", "AWS", "Material-UI"].map((item, i) => (
                  <sapn key={i} className="py-2 lg:py-3 lg:px-3 text-sm lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                    {item}
                  </sapn>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
              </div>
              <div className="flex flex-col gap-3">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                {["Express.js", "Node.js", "TypeScript", "MongoDB"].map((item, i) => (
                  <sapn key={i} className="py-2 lg:py-3 lg:px-3 text-sm lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                    {item}
                  </sapn>
                ))}
              </div>
            </div>
          )}
          {/* {id===6 && (

          )} */}
        </div>
      </div>
    </div>
  );
};
