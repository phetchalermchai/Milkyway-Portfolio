import Slider from "./slider"
import { UndrawHTML , UndrawReact , UndrawDesign} from "./svg"

export default function Skills() {
  return (
    <section id="Skills">
        <div className="mx-5 md:mx-[50px] xl:mx-20 py-10 md:py-[70px] flex flex-col gap-[10px]">
            <div className="p-[10px] md:py-[30px] xl:py-10 text-center">
                <h3 className="text-title xl:text-h3 text-surface-text_high dark:text-surface-inverse_text_high">Skills</h3>
            </div>
            <div className="py-[10px] xl:py-5 flex flex-col gap-5 md:gap-[60px]">
                <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-[10px] lg:gap-14 xl:gap-20">
                    <div className="flex flex-col gap-5">
                        <div className="px-[10px]">
                            <h5 className="text-body_large font-bold text-surface-text_high dark:text-surface-inverse_text_high">Language</h5>
                        </div>
                        <div className="px-[10px] flex items-center justify-between md:gap-5 xl:gap-10">
                            <span className="text-body_small text-surface-text_default dark:text-surface-inverse_text_default">HTML</span>
                            <Slider value={95}/>
                        </div>
                        <div className="px-[10px] flex items-center justify-between md:gap-5 xl:gap-10">
                            <span className="text-body_small text-surface-text_default dark:text-surface-inverse_text_default">Css</span>
                            <Slider value={95}/>
                        </div>
                        <div className="px-[10px] flex items-center justify-between md:gap-5 xl:gap-10">
                            <span className="text-body_small text-surface-text_default dark:text-surface-inverse_text_default">JavaScript</span>
                            <Slider value={75}/>
                        </div>
                        <div className="px-[10px] flex items-center justify-between md:gap-5 xl:gap-10">
                            <span className="text-body_small text-surface-text_default dark:text-surface-inverse_text_default">TypeScript</span>
                            <Slider value={60}/>
                        </div>
                        <div className="px-[10px] flex items-center justify-between md:gap-5 xl:gap-10">
                            <span className="text-body_small text-surface-text_default dark:text-surface-inverse_text_default">Python</span>
                            <Slider value={60}/>
                        </div>
                        <div className="px-[10px] flex items-center justify-between md:gap-5 xl:gap-10">
                            <span className="text-body_small text-surface-text_default dark:text-surface-inverse_text_default">SQL</span>
                            <Slider value={55}/>
                        </div>
                    </div>
                    <UndrawHTML/>
                </div>
                <div className="py-5 flex flex-col md:flex-row md:items-center md:justify-center md:gap-[10px] lg:gap-14 xl:gap-20">
                    <div className="flex flex-col gap-5 order-2">
                        <div className="px-[10px]">
                            <h5 className="text-body_large font-bold text-surface-text_high dark:text-surface-inverse_text_high">Frameworks & Libraries</h5>
                        </div>
                        <div className="px-[10px] flex items-center justify-between md:gap-5 xl:gap-10">
                            <span className="text-body_small text-surface-text_default dark:text-surface-inverse_text_default">React.js</span>
                            <Slider value={70}/>
                        </div>
                        <div className="px-[10px] flex items-center justify-between md:gap-5 xl:gap-10">
                            <span className="text-body_small text-surface-text_default dark:text-surface-inverse_text_default">Express.js</span>
                            <Slider value={60}/>
                        </div>
                        <div className="px-[10px] flex items-center justify-between md:gap-5 xl:gap-10">
                            <span className="text-body_small text-surface-text_default dark:text-surface-inverse_text_default">Next.js</span>
                            <Slider value={70}/>
                        </div>
                        <div className="px-[10px] flex items-center justify-between md:gap-5 xl:gap-10">
                            <span className="text-body_small text-surface-text_default dark:text-surface-inverse_text_default">Bootstrap</span>
                            <Slider value={80}/>
                        </div>
                        <div className="px-[10px] flex items-center justify-between md:gap-5 xl:gap-10">
                            <span className="text-body_small text-surface-text_default dark:text-surface-inverse_text_default">Tailwind</span>
                            <Slider value={85}/>
                        </div>
                        <div className="px-[10px] flex items-center justify-between md:gap-5 xl:gap-10">
                            <span className="text-body_small text-surface-text_default dark:text-surface-inverse_text_default">MUI</span>
                            <Slider value={70}/>
                        </div>
                    </div>
                    <UndrawReact/>
                </div>
                <div className="py-5 flex flex-col md:flex-row md:items-center md:justify-center md:gap-[10px] lg:gap-14 xl:gap-20">
                    <div className="flex flex-col gap-5">
                        <div className="px-[10px]">
                            <h5 className="text-body_large font-bold text-surface-text_high dark:text-surface-inverse_text_high">Tools</h5>
                        </div>
                        <div className="px-[10px] flex items-center justify-between md:gap-5 xl:gap-10">
                            <span className="text-body_small text-surface-text_default dark:text-surface-inverse_text_default">VS Code</span>
                            <Slider value={80}/>
                        </div>
                        <div className="px-[10px] flex items-center justify-between md:gap-5 xl:gap-10">
                            <span className="text-body_small text-surface-text_default dark:text-surface-inverse_text_default">GitHub</span>
                            <Slider value={65}/>
                        </div>
                        <div className="px-[10px] flex items-center justify-between md:gap-5 xl:gap-10">
                            <span className="text-body_small text-surface-text_default dark:text-surface-inverse_text_default">Figma</span>
                            <Slider value={80}/>
                        </div>
                        <div className="px-[10px] flex items-center justify-between md:gap-5 xl:gap-10">
                            <span className="text-body_small text-surface-text_default dark:text-surface-inverse_text_default">Postman</span>
                            <Slider value={60}/>
                        </div>
                    </div>
                    <UndrawDesign/>
                </div>
            </div>
        </div>
    </section>
  )
}
