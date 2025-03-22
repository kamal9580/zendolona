import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-primary/10 shadow-md py-4 px-6">
      <div className="flex items-center justify-between w-full">
       
        <div className="flex items-center gap-6 w-full justify-between">
        
          <div className="flex items-center gap-3">
            <Image
              src="/map-logo.svg"
              alt="Map Logo"
              width={50}
              height={50}
              className="w-12 h-12"
              tabIndex={-1}
            />
            <p
              id="map-explorer-text"
              tabIndex={0}
              className="text-xl font-bold whitespace-nowrap"
            >
              World-Map-Explorer
            </p>
          </div>

        
          <Link href="/help">
           
            <Button > Help</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
