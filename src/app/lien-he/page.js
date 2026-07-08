import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Building2, Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function LienHe() {
  const contactInformation = [
    {
      icon: <MapPin className="text-primary w-5 h-5" />,
      title: "Địa chỉ văn phòng",
      content: "B15/11 Đường Trung Mỹ Tây 13, Phường Trung Mỹ Tây, Thành phố Hồ Chí Minh, Việt Nam",
    },
    {
      icon: <Phone className="text-primary w-5 h-5" />,
      title: "Hotline hỗ trợ",
      content: "+84 978-152-233",
    },
    {
      icon: <Mail className="text-primary w-5 h-5" />,
      title: "Email liên hệ",
      content: "info@evergreen-logistics.com",
    },
    {
      icon: <Clock className="text-primary w-5 h-5" />,
      title: "Thời gian làm việc",
      content: "Thứ 2 - Thứ 6: 08:00 - 17:00",
    },
  ];

  return (
    <div className="w-full bg-white pb-24 space-y-16 md:space-y-24">
      <div className="relative w-full h-[40vh] sm:h-[50vh] overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/bannerLH.png"
            fill
            alt="Evergreen Contact Banner"
            className="object-cover object-right"
            priority
          />
        </div>

        <div className="absolute inset-0 z-10 bg-linear-to-r from-slate-50 from-25% via-slate-50/90 via-50% to-transparent to-80%" />

        <div className="relative z-20 h-full max-w-7xl mx-auto flex flex-col justify-center px-6 sm:px-8 lg:px-12">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Liên Hệ <br />
            <span className="text-primary text-base">Với Chúng Tôi</span>
          </h1>

          <p className="max-w-xl mt-4 text-sm sm:text-base text-slate-500 leading-relaxed font-medium">
            Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn hành trình
            thông quan và vận chuyển hàng hóa. Hãy để chúng tôi tối ưu chuỗi
            cung ứng của bạn.
          </p>
        </div>
      </div>

      {/* ================= TIÊU ĐỀ PHÂN ĐOẠN GIỮA ================= */}
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center space-y-3 px-6">
        <div className="p-3 bg-emerald-50 text-primary rounded-2xl">
          <Building2 size={24} />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Thông Tin Kết Nối Trực Tiếp
        </h2>
        <p className="text-sm sm:text-base text-slate-500 font-medium">
          Mọi thắc mắc hoặc yêu cầu báo giá dịch vụ, quý khách có thể liên hệ
          với Evergreen qua các kênh tương tác chính thức dưới đây.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {contactInformation.map((info, index) => (
            <Card
              key={index}
              className="bg-white p-6 sm:p-8 shadow-xs hover:shadow-md border border-slate-100 rounded-2xl flex flex-col items-center text-center gap-4 transition-all duration-300 group"
            >
              <div className="p-3.5 bg-slate-50 text-primary rounded-xl group-hover:bg-primary/20 group-hover:text-white transition-colors duration-300 shadow-2xs">
                {info.icon}
              </div>

              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                  {info.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-[200px] sm:max-w-xs mx-auto">
                  {info.content}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
