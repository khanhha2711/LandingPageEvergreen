import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function DichVu() {
  const danhSachDichVu = [
    {
      tieuDe: "Khai báo hải quan",
      moTa: "Dịch vụ thông quan hải quan đầy đủ với xử lý tài liệu chuyên nghiệp cho quy trình xuất/nhập khẩu suôn sẻ.",
      chiTiet: [
        "Khai báo xuất nhập khẩu",
        "Phân loại mã HS chính xác",
        "Tính toán áp thuế quan tối ưu",
        "Tư vấn tuân thủ pháp lý hải quan",
        "Hỗ trợ thông quan nhanh chóng",
      ],
      image: "/haiQuan.png",
    },
    {
      tieuDe: "Khai báo C/O",
      moTa: "Xử lý chứng nhận xuất xứ (C/O) nhanh chóng và chính xác để hỗ trợ yêu cầu thương mại quốc tế và hưởng lợi ích thuế quan ưu đãi.",
      chiTiet: [
        "Xử lý Form E, Form D, Form AK...",
        "C/O thông thường & ưu đãi",
        "GSP Form A chuyên sâu",
        "Kiểm tra tính hợp lệ của bộ hồ sơ",
        "Dịch vụ xử lý nhanh trong ngày",
      ],
      image: "/khaiBao.png",
    },
    {
      tieuDe: "Kiểm hóa hàng hóa",
      moTa: "Dịch vụ kiểm tra toàn diện đảm bảo tuân thủ các tiêu chuẩn chất lượng, quy cách và an toàn cho các loại hàng hóa khác nhau.",
      chiTiet: [
        "Kiểm tra thực tế trước khi xuất hàng",
        "Xác minh chất lượng & quy cách",
        "Xác nhận số lượng, trọng lượng",
        "Kiểm tra tiêu chuẩn bao bì đóng gói",
        "Hỗ trợ chuẩn bị tài liệu kiểm hóa",
      ],
      image: "/kiemHoa.png",
    },
    {
      tieuDe: "Dịch vụ vận chuyển",
      moTa: "Giải pháp vận tải đáng tin cậy bao gồm vận chuyển đường biển, hàng không và đường bộ với hệ thống theo dõi và hỗ trợ toàn diện.",
      chiTiet: [
        "Vận tải đường biển quốc tế (FCL/LCL)",
        "Vận tải hàng không nội địa & quốc tế",
        "Vận tải nội địa đường bộ bằng xe tải/container",
        "Theo dõi hành trình thời gian thực",
        "Tư vấn gói bảo hiểm hàng hóa an toàn",
      ],
      image: "/vanChuyen.png",
    },
  ];

  return (
    <div className="w-full bg-white pb-24 space-y-20">
      {/* Banner */}
      <div className="relative w-full h-[40vh] sm:h-[55vh] overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/bannerDV.png"
            alt="Evergreen Logistics Services"
            fill
            className="object-cover object-right"
            priority
          />
        </div>

        <div className="absolute inset-0 z-10 bg-linear-to-r from-slate-50 from-25% via-slate-50/90 via-50% to-transparent to-80%" />

        <div className="relative z-20 h-full max-w-7xl mx-auto flex flex-col justify-center px-6 sm:px-8 lg:px-12">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Dịch Vụ Logistics <br />
            <span className="text-primary">Toàn Diện & Đáng Tin Cậy</span>
          </h1>

          <p className="max-w-xl mt-4 text-sm sm:text-base text-slate-500 leading-relaxed font-medium">
            Từ thông quan hải quan đến vận chuyển quốc tế, chúng tôi cung cấp
            giải pháp logistics trọn gói giúp doanh nghiệp của bạn vận hành trơn
            tru và hiệu quả.
          </p>
        </div>
      </div>

      {/* Danh sách dịch vụ - HIỆU ỨNG SO LE CHUẨN */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-24 md:space-y-32">
        {danhSachDichVu.map((dichVu, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
          >
            {/* 1. Khối chữ (Chiếm 7 cột) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-primary/15 text-primary w-fit px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Dịch vụ 0{index + 1}
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {dichVu.tieuDe}
              </h2>

              <p className="text-slate-500 text-sm sm:text-base leading-relaxed pb-2 border-b border-slate-100">
                {dichVu.moTa}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {dichVu.chiTiet.map((noiDung, i) => (
                  <div
                    className="flex gap-2.5 items-start text-sm sm:text-base text-slate-700 font-medium"
                    key={i}
                  >
                    <CheckCircle
                      size={18}
                      className="text-primary shrink-0 mt-0.5"
                    />
                    <span>{noiDung}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Khối ảnh (Chiếm 5 cột) - Điều khiển so le bằng thuộc tính Order */}
            <div
              className={cn(
                "lg:col-span-5 relative h-[280px] sm:h-[380px] w-full rounded-2xl overflow-hidden shadow-md border border-slate-100 group",
                // Hàng lẻ (index 1, 3): Ảnh nhảy lên trước Khối chữ trên màn hình PC lớn
                index % 2 !== 0 ? "lg:order-first" : "lg:order-last",
              )}
            >
              <Image
                src={dichVu.image}
                fill
                alt={dichVu.tieuDe}
                priority={index === 0}
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
