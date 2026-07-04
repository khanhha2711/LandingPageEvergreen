import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Eye, Target, BookMarked, CheckCircle, Truck } from "lucide-react";
import { cn } from "@/lib/utils";

export default function GioiThieu() {
  const companyValues = [
    {
      title: "Đội Ngũ Chuyên Gia",
      description: "Các chuyên gia logistics chuyên nghiệp và giàu kinh nghiệm",
      icon: <CheckCircle className="text-primary" />,
    },
    {
      title: "Được Cấp Phép & Chứng Nhận",
      description: "Tuân thủ đầy đủ các quy định thương mại quốc tế",
      icon: <BookMarked className="text-primary" />,
    },
    {
      title: "Khách Hàng Là Trên Hết",
      description: "Cam kết cung cấp dịch vụ xuất sắc",
      icon: <Target className="text-primary" />,
    },
    {
      title: "Nhanh Chóng & Đáng Tin Cậy",
      description: "Xử lý hiệu quả và giao hàng đúng hạn",
      icon: <Truck className="text-primary " />,
    },
  ];
  const logos = [
    "/logo/BBF.png",
    "/logo/chanhThu.png",
    "/logo/dingo.png",
    "/logo/nafoods.png",
    "/logo/SOVI.png",
    "/logo/vinhHoan.png",
  ];
  return (
    <div className="space-y-6 flex flex-col items-center">
      <div className="relative w-full h-[40vh] sm:h-[45vh] overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/header.png"
            alt="Evergreen Logistics About Banner"
            fill
            className="object-cover object-right"
            priority
          />
        </div>

        <div className="absolute inset-0 z-10 bg-linear-to-r from-slate-50 from-25% via-slate-50/90 via-45% to-transparent to-75%" />

        <div className="relative z-20 h-full max-w-7xl mx-auto flex flex-col justify-center px-6 sm:px-8 lg:px-12">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Xây Dựng Nền Tảng <br />
            <span className="text-primary md:text-3xl text-xl">
              Thương Mại Toàn Cầu
            </span>
          </h1>
          <p className="max-w-xl mt-4 text-sm sm:text-base text-slate-500 leading-relaxed font-medium">
            Kết nối doanh nghiệp của bạn với thế giới thông qua các giải pháp
            logistics đáng tin cậy, chuyên nghiệp và tối ưu hiệu quả.
          </p>
        </div>
      </div>
      {/*  */}
      <div className="container w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="relative lg:col-span-7 w-full ">
            <h1 className="text-primary">Câu Chuyện Của Chúng Tôi</h1>
            <div className="mt-2 mb-4 lg:w-60 w-20 h-0.5 bg-linear-to-r from-primary via-primary/40  to-white"></div>

            <div className="space-y-2 leading-relaxed text-slate-600">
              <p>
                <strong>Evergreen Logistics</strong> được thành lập vào năm 2021
                với một sứ mệnh rõ ràng: làm cho thương mại quốc tế trở nên dễ
                tiếp cận và không rắc rối cho các doanh nghiệp thuộc mọi quy mô.
                Điều bắt đầu như một dịch vụ thông quan hải quan nhỏ đã phát
                triển thành một nhà cung cấp giải pháp logistics toàn diện.
              </p>
              <p>
                Qua nhiều năm, chúng tôi đã xây dựng danh tiếng dựa trên độ tin
                cậy, chuyên môn và dịch vụ cá nhân hóa. Đội ngũ chuyên gia dày
                dạn kinh nghiệm của chúng tôi mang đến hàng thập kỷ kinh nghiệm
                kết hợp trong quy định hải quan, vận chuyển hàng hóa và tuân thủ
                thương mại quốc tế.
              </p>
              <p>
                Ngày nay, chúng tôi tự hào phục vụ hơn 500 khách hàng trong các
                ngành khác nhau, giúp họ điều hướng sự phức tạp của thương mại
                toàn cầu với sự tự tin và dễ dàng.
              </p>
            </div>
          </div>
          <div className="relative lg:col-span-5 h-full w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100">
            <Image
              src={"/team.png"}
              fill
              priority
              alt="team"
              className="rounded-2xl object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-linear-to-b from-slate-50 to-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <span className="text-xs font-bold tracking-widest text-primary uppercase mb-3 block">
                Định Hướng Chiến Lược
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Tầm Nhìn & <br />
                <span className="text-primary text-base ">
                  Sứ Mệnh Phát Triển
                </span>
              </h2>
              <div className="mt-6 h-1 w-12 bg-primary rounded-full hidden lg:block" />
            </div>

            <div className="lg:col-span-8 space-y-8">
              <div className="group bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start">
                <div className="p-3 bg-emerald-50 text-primary rounded-xl group-hover:bg-accent group-hover:text-white transition-colors duration-300 shrink-0">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Tầm Nhìn Của Chúng Tôi
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Trở thành{" "}
                    <strong className="text-slate-900 font-semibold">
                      đối tác logistics hàng đầu khu vực
                    </strong>
                    , được công nhận về sự đổi mới, độ tin cậy và xuất sắc trong
                    việc vận hành chuỗi cung ứng. Chúng tôi kiến tạo một thế
                    world nơi thương mại quốc tế diễn ra{" "}
                    <strong className="text-primary font-semibold">
                      liền mạch và không rào cản
                    </strong>
                    .
                  </p>
                </div>
              </div>

              <div className="group bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start">
                <div className="p-3 bg-emerald-50 text-primary rounded-xl group-hover:bg-accent group-hover:text-white transition-colors duration-300 shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Sứ Mệnh Của Chúng Tôi
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Cung cấp các giải pháp logistics toàn diện, tối ưu hiệu quả
                    và tuân thủ nghiêm ngặt pháp lý để{" "}
                    <strong className="text-slate-900 font-semibold">
                      đồng hành cùng sự thành công của doanh nghiệp
                    </strong>
                    . Cam kết vượt qua mong đợi của khách hàng bằng dịch vụ cá
                    nhân hóa và chuyên môn vượt trội.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="container ">
        <div className="text-center mb-6">
          <div className="flex justify-center items-center gap-4 mb-2">
            <div className="w-10 h-0.5 bg-accent"></div>
            <h2 className="capitalize font-bold">Vì sao chọn chúng tôi?</h2>
            <div className="w-10 h-0.5 bg-accent"></div>
          </div>
          <p className="text-gray-500">
            Tại sao chọn Evergreen Logistics cho nhu cầu logistics của bạn
          </p>
        </div>
        <div className="flex flex-wrap gap-10 ">
          {companyValues.map((value, index) => (
            <Card
              key={index}
              className={cn(
                "grow basis-[250px] w-max-[300px] px-8 border-none shadow-none",
              )}
            >
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-fit p-2 rounded-sm bg-primary/15 ">
                    {value.icon}
                  </div>
                </div>

                <h3 className="capitalize text-primary font-bold pb-2">
                  {value.title}
                </h3>
                <p>{value.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div className="w-full bg-accent/10 border-t border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-10">
            <div className="flex justify-center items-center gap-3 mb-2">
              <div className="w-8 h-[2px] bg-primary rounded-full"></div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Khách Hàng Tiêu Biểu
              </h2>
              <div className="w-8 h-[2px] bg-primary rounded-full"></div>
            </div>
            <p className="text-sm sm:text-base text-slate-500 font-medium">
              Được tin tưởng bởi các công ty hàng đầu trên toàn thế giới
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:justify-center lg:items-center gap-8 md:gap-12 lg:gap-16 w-full justify-items-center items-center">
            {logos.map((logo, index) => (
              <div key={index} className="relative w-28 h-12 sm:w-32 sm:h-14 ">
                <Image
                  src={logo}
                  alt={`Partner Logo ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
