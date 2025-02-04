import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div>
      <nav className="flex justify-around bg-gray-800 text-white p-4">
        <Link href="/">Home</Link>
        <Link href="/locations">Locations</Link>
        <Link href="/package">Package</Link>
        <Link href="/voucher">Voucher</Link>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;