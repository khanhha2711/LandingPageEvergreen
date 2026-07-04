import { Card } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  BookMarked,
  CheckCircle,
  Target,
  Truck,
  FileText,
  Search,
  ClipboardCheck,
  Ship,
  Globe,
  User,
  CalendarDays,
  Dot,
} from "lucide-react";
import PATH from "@/routes/path";

export default function TrangChu() {
  const logisticsStats = [
    {
      value: "5+",
      label: "Năm kinh nghiệm",
      icon: <CalendarDays className="text-primary md:size-6 size-5 " />,
    },
    {
      value: "500+",
      label: "Khách hàng",
      icon: <Target className="text-primary md:size-6 size-5 " />,
    },
    {
      value: "5000+",
      label: "Lô hàng đã xử lý",
      icon: <Globe className="text-primary md:size-6 size-5 " />,
    },
    {
      value: "98%",
      label: "Tỉ lệ thành công",
      icon: <CheckCircle className="text-primary md:size-6 size-5 " />,
    },
  ];
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
  const services = [
    {
      id: 1,
      title: "Khai Báo Hải Quan",
      description:
        "Dịch vụ thông quan hải quan đầy đủ với xử lý tài liệu chuyên nghiệp cho quy trình xuất/nhập khẩu suôn sẻ.",
      icon: <FileText className=" text-[#00b34d]" />,
    },
    {
      id: 2,
      title: "Khai báo C/O",
      description:
        "Dịch vụ thông quan hải quan đầy đủ với xử lý tài liệu chuyên nghiệp cho quy trình xuất/nhập khẩu suôn sẻ.",
      icon: <Search className=" text-[#00b34d]" />,
    },
    {
      id: 3,
      title: "Kiểm Hóa Hàng Hóa",
      description:
        "Dịch vụ kiểm tra toàn diện đảm bảo tuân thủ các tiêu chuẩn chất lượng và an toàn.",
      icon: <ClipboardCheck className=" text-[#00b34d]" />,
    },
    {
      id: 4,
      title: "Dịch Vụ Vận Chuyển",
      description:
        "Giải pháp vận tải đáng tin cậy bao gồm vận chuyển đường biển, hàng không và đường bộ toàn cầu.",
      icon: <Ship className=" text-[#00b34d]" />,
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
    <div className="flex flex-col items-center">
      <div className="relative w-full h-[70vh] bg-white">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/header.png"
            alt="Evergreen Logistics Banner"
            fill
            className="xl:object-contain object-cover object-left lg:object-right"
            priority
          />
        </div>

        <div
          className={cn(
            "hidden lg:block absolute inset-0 z-10 bg-linear-to-r from-white from-0% via-white via-45% to-transparent to-80%",
          )}
        />

        <div className="relative z-20 h-full mx-auto flex flex-col justify-center px-8 md:px-20">
          <div className="flex justify-center items-center shadow-lg shadow-primary/20 text-primary border lg:border-primary/50 lg:bg-primary/10 bg-white w-fit px-2 py-1 rounded-xl text-sm md:text-base font-semibold mb-4 pr-4">
            <Dot className="text-primary" size={30} />
            <p>Fastest & Secure</p>
          </div>
          <h1 className="text-2xl lg:text-6xl md:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            Logistics Solution
          </h1>
          <div className="mt-4 lg:w-60 w-20 h-1 bg-linear-to-r from-primary via-primary/40 to-white"></div>
          <p className="max-w-lg mt-4 text-sm lg:text-base leading-relaxed font-normal">
            Dịch vụ thông quan hải quan, kiểm hóa hàng hóa và vận chuyển chuyên
            nghiệp cho thương mại quốc tế liền mạch.
          </p>
        </div>

        <div className="absolute mt-6 md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:translate-y-1/2 sm:z-30 w-full max-w-6xl px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full">
            {logisticsStats.map((stat, index) => (
              <Card
                key={index}
                className={cn(
                  "shadow-xl border border-slate-100 bg-white p-4 md:p-6",
                )}
              >
                <div className="flex flex-col justify-center items-center text-center gap-1 md:gap-2">
                  <div className="text-primary text-xl md:text-2xl">
                    {stat.icon}
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-primary tracking-tight">
                    {stat.value}
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-gray-500 font-medium leading-tight max-w-[140px] md:max-w-none">
                    {stat.label}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Gioi thieu */}
      <div className="w-full max-w-7xl mx-auto md:mt-30 mt-70  pb-20 md:px-8 px-12 lg:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="relative lg:col-span-5 w-full h-[350px] sm:h-[450px] ">
            <Image
              src="/vanChuyen.png"
              alt="Evergreen Logistics Port"
              fill
              className="object-container hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-sm font-bold tracking-widest text-primary uppercase mb-3 block">
              Về chúng tôi
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Đối Tác Chuỗi Cung Ứng <br />
              <span className="text-primary text-base">
                Toàn Diện & Tin Cậy
              </span>
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Với nền tảng kinh nghiệm vững chắc trong ngành logistics,{" "}
                <strong className="text-slate-900 font-semibold">
                  Evergreen Logistics
                </strong>{" "}
                tự hào là mắt xích tin cậy giúp kết nối doanh nghiệp của bạn với
                thị trường quốc tế. Chúng tôi đơn giản hóa các quy trình thương
                mại phức tạp bằng giải pháp tích hợp trọn gói từ thông quan hải
                quan, kiểm hóa đến vận tải đa phương thức.
              </p>
              <p>
                Sở hữu đội ngũ chuyên gia am hiểu sâu sắc pháp lý, chúng tôi cam
                kết bảo vệ dòng chảy hàng hóa của bạn luôn thông suốt, an toàn
                và tối ưu chi phí trên mọi chặng đường.
              </p>
            </div>

            <div className="mt-8">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-accent text-white font-medium rounded-xl text-sm transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer">
                <p>Khám phá thêm</p>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dich vu */}
      <div className="bg-accent/10 w-full flex justify-center ">
        <div className="container ">
          <div className="text-center mb-6">
            <div className="flex justify-center items-center gap-4 mb-2">
              <div className="w-10 h-0.5 bg-accent"></div>
              <h2 className="capitalize font-bold">Dịch vụ của chúng tôi</h2>
              <div className="w-10 h-0.5 bg-accent"></div>
            </div>
            <p className="text-gray-500">
              Giải pháp logistics toàn diện cho doanh nghiệp của bạn
            </p>
          </div>
          <div className="sm:flex flex-wrap items-stretch w-min-sm gap-10 space-y-4">
            {services.map((service, index) => (
              <Card
                key={index}
                className={cn(
                  "flex grow basis-[250px] w-max-[380px] px-8 py-7 ",
                )}
              >
                <div className="text-center ">
                  <div className="flex justify-center mb-2">
                    <div className="w-fit bg-primary/15 p-1.5 rounded-sm">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="capitalize text-primary font-bold pb-2">
                    {service.title}
                  </h3>
                  <p>{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      {/* gia tri */}
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
      {/* Khach hang */}
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
