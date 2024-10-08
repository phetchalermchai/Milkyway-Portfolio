import { UndrawResume } from "./svg";

export default function About() {
  return (
    <section id="About" className="bg-surface-container_low dark:bg-surface-inverse_container_high">
      <div className="mx-5 md:mx-[50px] xl:mx-20 py-10 md:py-[70px] xl:py-20 flex flex-col items-center justify-center gap-[10px]">
        <div className="py-5 xl:py-[30px]">
          <h3 className="text-surface-text_high dark:text-surface-inverse_text_high text-title xl:text-h3">About Me</h3>
        </div>
        <div className="text-center md:text-start md:py-10 md:flex md:items-center md:justify-center md:gap-[30px] ">
          <UndrawResume/>
          <p className="p-2 md:p-0 text-surface-text_default dark:text-surface-inverse_text_default text-body_regular xl:text-subtitle md:w-[320px] lg:w-[470px] xl:w-[630px] self-start">
            Hello, I'm Chalermchai WauwaiWelcome to my portfolio website! I'm a
            web developer passionate about creating beautiful and user-friendly
            websites. With expertise in Front-end development and UI/UX design,
            I'm dedicated to delivering the best user experiences. The projects
            you'll find here reflect my commitment to blending creativity with
            modern technology.
          </p>
        </div>
      </div>
    </section>
  );
}
