"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import PATH from "@/routes/path";
import { Phone, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

export default function Navbar() {
  const pathName = usePathname();
  const nav = [
    { href: `${PATH.PUBLIC.HOME}`, trang: "Trang chủ" },
    { href: `${PATH.PUBLIC.GIOITHIEU}`, trang: "Giới thiệu" },
    { href: `${PATH.PUBLIC.DICHVU}`, trang: "Dịch vụ" },
    { href: `${PATH.PUBLIC.LIENHE}`, trang: "Liên hệ" },
  ];

  return (
    <header className="w-full bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3.5">
        {/* LOGO */}
        <Link
          href={PATH.PUBLIC.HOME}
          className="transition-opacity hover:opacity-90 shrink-0"
        >
          <Image
            src="/logo.png"
            alt="Evergreen Logo"
            width={140}
            height={42}
            className="object-contain"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {nav.map((item, index) => {
              const isActive = pathName === item.href;
              return (
                <li key={index} className="relative py-1 group">
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-semibold tracking-wide transition-colors duration-200",
                      isActive
                        ? "text-primary font-bold"
                        : "text-slate-600 hover:text-primary",
                    )}
                  >
                    {item.trang}
                  </Link>
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-[2px] bg-primary rounded-full transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </li>
              );
            })}
          </ul>

          <Button
            asChild
            className="bg-primary hover:bg-accent text-white font-semibold gap-2 shadow-xs transition-all cursor-pointer rounded-xl"
            size="md"
          >
            <Link href={PATH.PUBLIC.LIENHE} className="p-2 rounded-2xl">
              <Phone size={16} className="animate-pulse " />
              <span>0332147382</span>
            </Link>
          </Button>
        </div>

        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 text-slate-600 hover:text-primary transition-colors cursor-pointer">
                <Menu size={24} />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[280px] sm:w-[350px] bg-white p-6 flex flex-col justify-between"
            >
              <div className="space-y-8">
                <SheetTitle className="text-left text-slate-400 font-medium text-xs uppercase tracking-widest border-b border-slate-100 pb-2">
                  Danh Mục Menu
                </SheetTitle>

                <ul className="flex flex-col gap-5">
                  {nav.map((item, index) => {
                    const isActive = pathName === item.href;
                    return (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className={cn(
                            "text-base font-bold tracking-wide block py-2 px-3 rounded-xl transition-all",
                            isActive
                              ? "bg-primary/20 text-accent"
                              : "text-slate-700 hover:bg-primary/10 hover:text-accent",
                          )}
                        >
                          {item.trang}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-emerald-700 text-white font-bold gap-2 py-6 shadow-md rounded-xl cursor-pointer"
                >
                  <Link href={PATH.PUBLIC.LIENHE}>
                    <Phone size={18} />
                    <span>0332147382</span>
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
