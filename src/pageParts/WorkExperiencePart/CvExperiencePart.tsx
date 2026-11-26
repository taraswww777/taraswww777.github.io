export const CvExperiencePart = () => {
  return (
    <div className="w-full flex flex-wrap gap-x-2">
      <h2 className="text-xl font-bold">Резюме</h2>

      <div className="w-full mt-4 flex-wrap flex gap-4 flex-row">
        <div
          className="mb-2
            w-full
            lg:basis-[calc(50%-0.5*1rem)] lg:w-auto
            shrink-0 overflow-auto print:break-before-page"
        >
          <a href="./assets/Tech-Lead-Front-End-Developer.pdf" target="_blank">Full-stack web developer</a>
        </div>

        <div
          className="mb-2
            w-full
            lg:basis-[calc(50%-0.5*1rem)] lg:w-auto
            shrink-0 overflow-auto print:break-before-page"
        >
          <a href="./assets/Full-stack-web-developer.pdf" target="_blank">Tech Lead, Front-End Developer</a>
        </div>
      </div>
    </div>
  );
}
