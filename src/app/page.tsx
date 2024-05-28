import { unbounded } from "./layout";
import { MotionBox } from "@/components/MotionBox";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="py-8">
        <div className="container">
          <div className="flex flex-wrap gap-[20px] sm:gap-[10px]">

            <MotionBox delay={0.2} className="max-w-[340px] w-full sm:max-w-[unset] sm:mb-2 sm:order-1">
              <Link href='https://m.vk.com/app51855371#/' id="header" className="bg-yellow aspect-square flex items-center justify-center gap-2 flex-col rounded-[25px] shadow-lg p-5 sm:aspect-auto sm:flex-row sm:gap-5">
                <Image
                  width={201}
                  height={194}
                  src='/logo.svg'
                  alt="Логотип Буккроссинг.рф"
                  className="sm:w-20"
                  style={{ height: 'auto' }}
                />
                <span className={`${unbounded.className} font-medium text-xl sm:text-[22px]`}>Буккроссинг.рф</span>
              </Link>
            </MotionBox>

            <MotionBox delay={0.3} className="flex max-w-[700px] w-full aspect-[2/1] sm:aspect-auto sm:order-3">
              <div id="2" className="bg-gray flex items-center justify-between gap-2 rounded-[35px] shadow-lg p-8 mb-2 sm:flex-col-reverse sm:rounded-3xl sm:gap-0 sm:p-5 sm:justify-end">
                <div className="w-[55%] sm:w-full">
                  <span className={`${unbounded.className} block font-medium text-2xl leading-9 mb-4 sm:leading-8 sm:text-[28px] sm:text-center`}>Общайтесь<br /> и меняйтесь</span>
                  <p className="mb-5 sm:text-center">Все обсуждения, обмен мнениями и договоренности проходят в личной переписке прямо на платформе ВКонтакте</p>
                  <Link className={`${unbounded.className} block w-fit px-5 py-2 sm:mx-auto`} href={'#'}>Подробнее</Link>
                </div>
                <div className="w-[35%] sm:w-[25%] sm:mb-5">
                  <Image
                    width={230}
                    height={230}
                    src='/chat.svg'
                    alt="Логотип Буккроссинг.рф"
                    style={{ height: 'auto' }}
                  />
                </div>
              </div>
            </MotionBox>

            <MotionBox delay={0.4} className="flex max-w-[340px] w-full aspect-[1/1] sm:max-w-[unset] sm:aspect-auto sm:order-4">
              <div id="3" className="bg-blue w-full flex items-center justify-center gap-2 flex-col rounded-[25px] shadow-lg p-5 sm:flex-row sm:gap-5 sm:rounded-3xl">
                <div className="sm:w-[25%]">
                  <Image
                    width={170}
                    height={170}
                    src='/add.svg'
                    alt="Логотип Буккроссинг.рф"
                    style={{ height: 'auto' }}
                  />
                </div>
                <span className={`${unbounded.className} block text-white font-medium text-xl sm:text-[22px]`}>
                  Добавляй<br /> свои книги
                </span>
              </div>
            </MotionBox>

            <MotionBox className="w-[49%] h-[59dvh] 2xl:h-[67dvh] flex sm:w-full sm:h-[58dvh] sm:order-2">
              <div id="4" className="relative bg-blue rounded-[45px] p-16 overflow-hidden shadow-xl sm:p-5 sm:rounded-3xl">
                <h1 className={`${unbounded.className} block text-3xl leading-[1.1] mb-4 text-white`}>
                  Добро пожаловать<br /> в Буккроссинг
                </h1>
                <p className="text-white w-[80%] mb-37 sm:w-full">
                  Открывайте для себя новые впечатления, знакомьтесь с единомышленниками вместе с обменом книгами
                </p>
                <MotionBox delay={0.7} className="absolute -bottom-[0rem] left-[60px] sm:left-[10px] sm:w-[95%] sm:bottom-0">
                  <Image
                    width={570}
                    height={500}
                    src="/phones.png"
                    alt="Приложение Буккроссинг.рф"
                    priority
                    style={{ height: 'auto' }}
                  />
                </MotionBox>
              </div>
            </MotionBox>

            <div className="w-[49%] sm:w-full order-5">

              <MotionBox delay={0.1} className="order-5">
                <div id="5" className="relative bg-red rounded-[35px] shadow-xl p-[30px] overflow-hidden mb-[20px] sm:p-5 sm:rounded-3xl sm:h-[55dvh]">
                  <span className={`${unbounded.className} block text-red-text text-white leading-8 mb-[9px] sm:text-[28px]`}>
                    В каталоге есть<br /> все, что нравится!
                  </span>
                  <p className="text-white mb-[25px] max-w-[40%] sm:max-w-[unset]">
                    В каталоге можно загрузить книги различных жанров, каждый сможет найти литературу себе по вкусу или открыть что-то новое для себя
                  </p>
                  <MotionBox delay={0.9} className="absolute -bottom-[2rem] right-[30px] sm:right-[45px]">
                    <Image
                      width={300}
                      height={500}
                      src="/catalog.png"
                      alt="Приложение Буккроссинг.рф"
                      priority
                      style={{ height: 'auto' }}
                    />
                  </MotionBox>
                </div>
              </MotionBox>

              <div className="flex gap-[20px]">

                <MotionBox delay={0.5} className="flex max-w-[49%] w-full aspect-square sm:max-w-[unset] sm:aspect-auto">
                  <div id="6" className="flex w-full items-center justify-center flex-col gap-5 bg-gray rounded-[25px] shadow-xl p-5 sm:flex-row sm:gap-5 sm:p-6">
                    <div className="sm:w-[80%]">
                      <Image
                        width={150}
                        height={150}
                        src='/check.svg'
                        alt="Логотип Буккроссинг.рф"
                        style={{ height: 'auto' }}
                      />
                    </div>
                    <span className={`${unbounded.className} font-medium text-xl text-center leading-8 sm:hidden`}>Добавляй,<br /> что нравится</span>
                  </div>
                </MotionBox>

                <MotionBox delay={0.6} className="flex max-w-[49%] w-full aspect-square">
                  <div id="6" className="flex w-full items-center justify-center flex-col gap-5 bg-yellow rounded-[25px] shadow-xl p-5">
                    <Image
                      width={240}
                      height={240}
                      src='/qr.svg'
                      alt="QR-код Буккроссинг.рф"
                      style={{ height: 'auto' }}
                    />
                  </div>
                </MotionBox>

              </div>

            </div>

          </div>
        </div>
      </section >
    </main >
  );
};