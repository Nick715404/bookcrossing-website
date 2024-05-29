import { MotionBox } from "@/components/MotionBox";
import { Unbounded } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const unbounded = Unbounded({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <section className="py-8 sm:py-4">
        <div className="container">
          <div className="flex flex-wrap gap-[20px] sm:gap-[10px]">

            <MotionBox delay={0.2} className="max-w-[340px] w-full 2xl:w-[22%] lg:max-w-none lg:w-[48%] sm:max-w-[unset] sm:mb-2 sm:w-full sm:order-1">
              <div id="header" className="relative bg-yellow aspect-square flex items-center justify-center gap-2 flex-col rounded-[25px] shadow-lg p-5 sm:aspect-auto sm:flex-row sm:gap-5">
                <Image
                  width={201}
                  height={194}
                  src='/logo.svg'
                  alt="Логотип Буккроссинг.рф"
                  className="2xl:w-32 lg:w-36 sm:w-20"
                  style={{ height: 'auto' }}
                />
                <span className={`${unbounded.className} font-medium text-xl 2xl:text-[20px] lg:text-[30px] sm:text-[22px]`}>Буккроссинг.рф</span>
                <Link className="absolute w-full h-full top-0 left-0" href='https://m.vk.com/app51855371#/' />
              </div>
            </MotionBox>

            <MotionBox delay={0.3} className="flex max-w-[700px] w-full aspect-[2/1] 2xl:aspect-[2.25/1] lg:aspect-auto lg:max-w-[unset] lg:w-[48%] sm:w-full sm:aspect-auto sm:order-3">
              <div id="2" className="bg-gray flex relative items-center justify-between gap-2 rounded-[35px] shadow-lg p-8 mb-2 lg:flex-col-reverse lg:gap-0 lg:justify-center lg:text-center sm:flex-col-reverse sm:rounded-3xl sm:gap-0 sm:p-5 sm:justify-end">
                <div className="w-[55%] lg:w-full lg:flex lg:flex-col lg:items-center">
                  <span className={`${unbounded.className} block font-medium text-2xl leading-9 mb-4 sm:leading-8 sm:text-[28px] sm:text-center`}>Общайтесь<br className="lg:hidden sm:block" /> и меняйтесь</span>
                  <p className="mb-5 sm:text-center">
                    Все обсуждения, обмен мнениями и договоренности проходят в личной переписке прямо на платформе ВКонтакте
                  </p>
                  <span className={`${unbounded.className} sm:mb-5`}>Подробнее</span>
                </div>
                <div className="w-[35%] 2xl:w-[30%] lg:w-[30%] lg:mb-5 sm:w-[25%] sm:mb-5">
                  <Image
                    width={230}
                    height={230}
                    src='/chat.svg'
                    alt="Логотип Буккроссинг.рф"
                    style={{ height: 'auto' }}
                  />
                </div>
                {/* <Link className="absolute w-full h-full top-0 left-0" href='https://m.vk.com/app51855371#/' /> */}
              </div>
            </MotionBox>

            <MotionBox delay={0.4} className="flex max-w-[340px] w-full aspect-[1.1/1] 2xl:w-[22%] lg:aspect-[5.6/1] lg:max-w-none lg:w-full sm:max-w-[unset] sm:w-full sm:aspect-auto sm:order-4">
              <div id="3" className="relative bg-blue w-full flex items-center justify-center gap-2 flex-col rounded-[25px] shadow-lg p-5 2xl:aspect-[2/1] 2xl:p-4 lg:w-full lg:flex-row lg:gap-5 sm:aspect-auto sm:rounded-3xl">
                <div className="2xl:w-[45%] lg:w-[15%] sm:w-[25%]">
                  <Image
                    width={170}
                    height={170}
                    src='/add.svg'
                    alt="Логотип Буккроссинг.рф"
                    style={{ height: 'auto' }}
                  />
                </div>
                <span className={`${unbounded.className} block text-white font-medium text-xl lg:text-[28px] sm:text-[22px]`}>
                  Добавляй<br /> свои книги
                </span>
                <Link className="absolute w-full h-full top-0 left-0" href='https://m.vk.com/app51855371#/' />
              </div>
            </MotionBox>

            <MotionBox className="w-[49%] h-[59dvh] lg:w-full lg:h-fit sm:w-full sm:h-fit sm:order-2">
              <div id="4" className="relative bg-blue rounded-[45px] p-16 overflow-hidden shadow-xl aspect-square lg:aspect-auto lg:p-12 sm:h-[540px] sm:aspect-auto sm:p-5 sm:rounded-3xl">
                <h1 className={`${unbounded.className} block text-3xl leading-[1.1] mb-4 text-white`}>
                  Добро пожаловать<br /> в Буккроссинг
                </h1>
                <p className="text-white w-[80%] mb-3 lg:w-[45%] sm:w-full">
                  Открывайте для себя новые впечатления, знакомьтесь с единомышленниками вместе с обменом книгами
                </p>
                <span className={`${unbounded.className} text-white`}>Подробнее</span>
                <MotionBox delay={0.7} className="absolute -bottom-[0rem] left-[60px] 2xl:-bottom-[2rem] 2xl:left-[50px] lg:right-[4%] lg:left-[unset] lg:w-[45%] lg:-bottom-[2rem] sm:left-[10px] sm:w-[95%] sm:bottom-0">
                  <Image
                    width={570}
                    height={500}
                    src="/phones.png"
                    alt="Приложение Буккроссинг.рф"
                    priority
                    style={{ height: 'auto' }}
                  />
                </MotionBox>
                <Link className="absolute w-full h-full top-0 left-0" href='https://m.vk.com/app51855371#/' />
              </div>
            </MotionBox>

            <div className="w-[49%] lg:w-full order-5">

              <MotionBox delay={0.1} className="order-5">
                <div id="5" className="relative flex flex-col justify-center bg-red rounded-[35px] shadow-xl p-[30px] overflow-hidden mb-[20px] aspect-[2.05/1] 2xl:aspect-auto 2xl:h-[320px] lg:w-full sm:p-5 sm:rounded-3xl sm:h-[510px] sm:justify-start">
                  <span className={`${unbounded.className} block text-red-text text-white leading-8 mb-[9px] lg:text-[30px] lg:mb-5 sm:text-[28px] sm:mb-[9px]`}>
                    В каталоге есть<br /> все, что нравится!
                  </span>
                  <p className="text-white text-[14px] mb-[20px] max-w-[45%] sm:max-w-[unset]">
                    В каталоге можно загрузить книги различных жанров, каждый сможет найти литературу себе по вкусу или открыть что-то новое для себя
                  </p>
                  <span className={`${unbounded.className} text-white`}>Подробнее</span>
                  <MotionBox delay={0.9} className="absolute -bottom-[2rem] right-[30px] sm:right-[35px]">
                    <Image
                      width={300}
                      height={500}
                      src="/catalog.png"
                      alt="Приложение Буккроссинг.рф"
                      priority
                      style={{ height: 'auto' }}
                    />
                  </MotionBox>
                  <Link className="absolute w-full h-full top-0 left-0" href='https://m.vk.com/app51855371#/' />
                </div>
              </MotionBox>

              <div className="flex gap-[20px]">

                <MotionBox delay={0.5} className="flex max-w-[49%] w-full aspect-square sm:max-w-[unset] sm:aspect-auto">
                  <div id="6" className="relative flex w-full items-center justify-center flex-col gap-5 bg-gray rounded-[25px] shadow-xl p-5 sm:flex-row sm:gap-5 sm:p-6">
                    <div className="sm:w-[80%]">
                      <Image
                        width={150}
                        height={150}
                        src='/check.svg'
                        alt="Логотип Буккроссинг.рф"
                        style={{ height: 'auto' }}
                      />
                    </div>
                    <span className={`${unbounded.className} font-medium text-xl text-center leading-8 lg:text-[30px] sm:hidden`}>Добавляй,<br /> что нравится</span>
                    <Link className="absolute w-full h-full top-0 left-0" href='https://m.vk.com/app51855371#/' />
                  </div>
                </MotionBox>

                <MotionBox delay={0.6} className="flex max-w-[49%] w-full aspect-square">
                  <div id="6" className="relative flex w-full items-center justify-center flex-col gap-5 bg-yellow rounded-[25px] shadow-xl p-5">
                    <Image
                      width={240}
                      height={240}
                      src='/qr.svg'
                      alt="QR-код Буккроссинг.рф"
                      style={{ height: 'auto' }}
                    />
                    <Link className="absolute w-full h-full top-0 left-0" href='https://m.vk.com/app51855371#/' />
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