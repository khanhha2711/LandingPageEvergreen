import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import PATH from "@/routes/path";

export default function Footer() {
  const footerData = {
    lienKetNhanh: [
      { name: "Trang chủ", href: `${PATH.PUBLIC.HOME}` },
      { name: "Giới thiệu", href: `${PATH.PUBLIC.GIOITHIEU}` },
      { name: "Dịch vụ", href: `${PATH.PUBLIC.DICHVU}` },
      { name: "Liên hệ", href: `${PATH.PUBLIC.LIENHE}` },
    ],
    dichVu: [
      { name: "Khai Báo Hải Quan", href: `${PATH.PUBLIC.DICHVU}` },
      { name: "Khai báo C/O", href: `${PATH.PUBLIC.DICHVU}` },
      { name: "Kiểm Hóa Hàng Hóa", href: `${PATH.PUBLIC.DICHVU}` },
      { name: "Dịch Vụ Vận Chuyển", href: `${PATH.PUBLIC.DICHVU}` },
    ],
    thongTinLienHe: [
      {
        icon: <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />,
        content: "15 Thạch Thang, Quận Hải Châu, TP. Đà Nẵng, Việt Nam",
      },
      {
        icon: <Phone className="w-5 h-5 text-emerald-500 shrink-0" />,
        content: "+84 (236) 3123-4567",
      },
      {
        icon: <Mail className="w-5 h-5 text-emerald-500 shrink-0" />,
        content: "info@evergreen-logistics.com",
      },
    ],
  };

  return (
    <footer className="w-full bg-[#0B1221] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 pb-12 border-b border-slate-800/60">
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <div className="bg-white p-1.5 rounded-lg shadow-sm w-fit">
                <Image
                  src="/logo.png"
                  alt="Evergreen Logo"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 font-medium">
              Đối tác tin cậy của bạn trong các giải pháp logistics toàn diện.
              Mang đến sự vận hành trơn tru và tối ưu vượt biên giới.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-base tracking-wide mb-5">
              Liên Kết Nhanh
            </h4>
            <ul className="space-y-3.5 text-sm font-medium">
              {footerData.lienKetNhanh.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 block py-0.5"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-base tracking-wide mb-5">
              Dịch Vụ Cốt Lõi
            </h4>
            <ul className="space-y-3.5 text-sm font-medium">
              {footerData.dichVu.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 block py-0.5"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-base tracking-wide mb-5">
              Thông Tin Liên Hệ
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              {footerData.thongTinLienHe.map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <span className="mt-0.5">{item.icon}</span>
                  <span className="text-slate-400 leading-relaxed break-words">
                    {item.content}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <p>
            © {new Date().getFullYear()} Evergreen Logistics. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <span className="hover:text-slate-400 cursor-pointer transition-colors">
              Chính sách bảo mật
            </span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">
              Điều khoản dịch vụ
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
